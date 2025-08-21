import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AuthContextType,
  User,
  LoginCredentials,
  SignupCredentials,
} from '../types/auth.types';

const USER_STORAGE_KEY = '@kloudis_user';
const CREDENTIALS_STORAGE_KEY = '@kloudis_credentials';
const AUTH_STATE_KEY = '@kloudis_auth_state';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadUser = useCallback(async () => {
    try {
      // Get both user data and auth state
      const [userStr, credentialsStr] = await AsyncStorage.multiGet([
        USER_STORAGE_KEY,
        CREDENTIALS_STORAGE_KEY,
      ]);

      // If we have both user data and credentials, auto-login
      if (userStr[1] && credentialsStr[1]) {
        const storedUser = JSON.parse(userStr[1]);
        setUser(storedUser);
      } else {
        // If we're missing either, clear everything to be safe
        await AsyncStorage.multiRemove([
          USER_STORAGE_KEY,
          CREDENTIALS_STORAGE_KEY,
          AUTH_STATE_KEY,
        ]);
        setUser(null);
      }
    } catch (error) {
      // On any error, clear everything
      await AsyncStorage.multiRemove([
        USER_STORAGE_KEY,
        CREDENTIALS_STORAGE_KEY,
        AUTH_STATE_KEY,
      ]);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const storeUserData = async (userData: User, credentials: { email: string; password: string }) => {
    try {
      await AsyncStorage.multiSet([
        [USER_STORAGE_KEY, JSON.stringify(userData)],
        [CREDENTIALS_STORAGE_KEY, JSON.stringify(credentials)],
        [AUTH_STATE_KEY, 'true'],
      ]);
    } catch (error) {
      throw new Error('Failed to store user data');
    }
  };

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const storedCredentialsStr = await AsyncStorage.getItem(CREDENTIALS_STORAGE_KEY);
      if (!storedCredentialsStr) {
        throw new Error('Invalid email or password');
      }

      const storedCredentials = JSON.parse(storedCredentialsStr);
      
      if (credentials.email !== storedCredentials.email || 
          credentials.password !== storedCredentials.password) {
        throw new Error('Invalid email or password');
      }

      const storedUserStr = await AsyncStorage.getItem(USER_STORAGE_KEY);
      if (!storedUserStr) {
        throw new Error('User data not found');
      }

      const storedUser = JSON.parse(storedUserStr);
      await AsyncStorage.setItem(AUTH_STATE_KEY, 'true');
      setUser(storedUser);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (credentials: SignupCredentials) => {
    setIsLoading(true);
    try {
      const storedCredentialsStr = await AsyncStorage.getItem(CREDENTIALS_STORAGE_KEY);
      
      if (storedCredentialsStr) {
        const storedCredentials = JSON.parse(storedCredentialsStr);
        if (storedCredentials.email === credentials.email) {
          throw new Error('Email already exists');
        }
      }

      const newUser: User = {
        id: Math.random().toString(),
        name: credentials.name,
        email: credentials.email,
      };

      await storeUserData(newUser, {
        email: credentials.email,
        password: credentials.password,
      });

      setUser(newUser);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (clearStorage: boolean = false) => {
    setIsLoading(true);
    try {
      if (clearStorage) {
        await AsyncStorage.multiRemove([
          USER_STORAGE_KEY,
          CREDENTIALS_STORAGE_KEY,
          AUTH_STATE_KEY,
        ]);
      } else {
        // Just mark as logged out but keep credentials
        await AsyncStorage.setItem(AUTH_STATE_KEY, 'false');
      }
      setUser(null);
    } catch (error) {
      // Handle logout error silently
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext; 