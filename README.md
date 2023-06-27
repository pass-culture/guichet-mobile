# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)

## Setup

```sh
yarn add --dev @testing-library/react-native
yarn add --dev @testing-library/jest-native
yarn add --dev jest
yarn add --dev @types/jest
yarn add --dev ts-jest
yarn add --dev @jest/globals
````

In `package.json`, add:
```JSON
"jest": {
        "preset": "react-native",
        "setupFilesAfterEnv": ["@testing-library/jest-native/extend-expect"]
},
```