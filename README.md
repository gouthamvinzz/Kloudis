# Kloudis - React Native Authentication App

A modern React Native authentication app built with TypeScript, featuring a clean atomic design structure and persistent authentication.

## 🌟 Features

- User Authentication (Login/Signup)
- Persistent Authentication using AsyncStorage
- Modern UI with Dark Theme
- Form Validation
- Atomic Design Pattern
- TypeScript Support
- Protected Routes

## 📱 Demo

https://github.com/user-attachments/assets/2e45ed05-7633-4da0-a13c-df7e2d0fc12b

<img width="300" height="800" alt="Simulator Screenshot - iPhone 16 Pro - 2025-08-22 at 09 26 10" src="https://github.com/user-attachments/assets/84f43c65-cc0c-42e5-96a4-3214ba68fea5" />
<img width="300" height="800" alt="Simulator Screenshot - iPhone 16 Pro - 2025-08-22 at 09 26 25" src="https://github.com/user-attachments/assets/04a4cdd0-51ac-4137-bf04-f6136f2611d8" />
<img width="300" height="800" alt="Simulator Screenshot - iPhone 16 Pro - 2025-08-22 at 09 26 30" src="https://github.com/user-attachments/assets/c0fb76a1-f2ef-4889-9570-43fe39891a97" />


## 🏗 Project Structure

<img width="1518" height="313" alt="Screenshot 2025-08-21 at 12 16 41 am" src="https://github.com/user-attachments/assets/573c7bf3-1a70-4b56-9751-52e8aa0ca9ce" />


```
src/
├── components/
│   ├── atoms/          # Basic UI components
│   │   ├── Avatar.tsx
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Text.tsx
│   │   └── ErrorText.tsx
│   ├── molecules/      # Composite components
│   │   ├── FormInput.tsx
│   │   ├── PasswordInput.tsx
│   │   └── ProfileCard.tsx
│   └── organisms/      # Complex components
│       ├── LoginForm.tsx
│       └── SignupForm.tsx
├── screens/            # App screens
│   ├── LoginScreen.tsx
│   ├── SignupScreen.tsx
│   └── HomeScreen.tsx
├── context/           # React Context
│   └── AuthContext.tsx
├── navigation/        # React Navigation
│   ├── AppNavigator.tsx
│   └── AuthNavigator.tsx
├── constants/         # App constants
│   ├── theme.ts
│   └── routes.ts
└── types/            # TypeScript types
    ├── auth.types.ts
    └── navigation.types.ts
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org)
- [React Native Development Environment](https://reactnative.dev/docs/environment-setup)
- [Xcode](https://developer.apple.com/xcode/) (for iOS)
- [Android Studio](https://developer.android.com/studio) (for Android)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Kloudis.git
cd Kloudis
```

2. Install dependencies:
```bash
yarn install
```

3. Install iOS dependencies:
```bash
cd ios && bundle install && bundle exec pod install && cd ..
```

### Running the App

#### iOS
```bash
yarn ios
```

#### Android
```bash
yarn android
```

## 🔐 Authentication Flow

The app implements a complete authentication flow:
- Login/Signup screens with form validation
- Persistent authentication using AsyncStorage
- Protected routes using React Navigation
- Automatic login if valid credentials exist
- Secure logout functionality

## 🎨 UI Components

Built using atomic design principles:
- **Atoms**: Basic UI components (Button, Input, Text)
- **Molecules**: Composite components (FormInput, PasswordInput)
- **Organisms**: Complex components (LoginForm, SignupForm)
- **Screens**: Full screens combining multiple components

## 🛠 Technical Details

- **State Management**: React Context API
- **Navigation**: React Navigation v6
- **Storage**: AsyncStorage
- **Styling**: StyleSheet API
- **Forms**: Custom form handling with validation
- **TypeScript**: Full type coverage

## 📝 Development Notes

- Uses atomic design pattern for better component organization
- Implements modern React Native best practices
- Follows TypeScript strict mode
- Uses consistent styling through theme constants

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [React Native](https://reactnative.dev)
- [React Navigation](https://reactnavigation.org)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
