module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    "./node_modules/(?!react-native|native-base-shoutem-theme|react-native-gesture-handler|@react-native-community|accordion-collapse-react-native)"
  ],
  coveragePathIgnorePatterns: ["/node_modules", "<rootDir>/src/modules/models/NSwag.ts" ],
  setupFilesAfterEnv: ["./node_modules/jest-enzyme/lib/index.js"],
  setupFiles: ["enzyme-react-16-adapter-setup", "./testSetup/setup.js"]
  
}
