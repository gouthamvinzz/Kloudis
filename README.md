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

[Place for screenshots/GIFs of the app in action]

## 🏗 Project Structure



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

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Native](https://reactnative.dev)
- [React Navigation](https://reactnavigation.org)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
