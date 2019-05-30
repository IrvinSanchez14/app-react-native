# Getting Started
You will need the following installed on development machine:
`nodejs`
`yarn`
`visual studio code`
` python2 or last stable version`
` Java SE Development Kit (JDK)`
` Android Studio`

for more information about the installation please read the official documentation (https://facebook.github.io/react-native/docs/getting-started)

Run `yar global add react-native-cli` or `npm install -g react-native-cli`
Run `yarn setup` 

# Run app on Emulator Android

You will need to download an androd emulator for this you [can install Android Studio](https://developer.android.com/studio/install) and after that create a new emulator or just use your android device.

After that you need to run 
`react-native run-android`

you will need run first the emulator android and later to run the react-native command to create the application on the emulator.

# Run app on Device

* you will need to connect the device on the computer.
* on the device you add all permission for development
* you will need to activate android development on the device

After that you need to run 
`react-native run-android`

for more information about how to run the app on device please check the official page (https://facebook.github.io/react-native/docs/running-on-device).

# Run test

you need run 
`yarn test`

* We work with Jest-test and create a folder with all snapshots necessary for the application

# Run app on iOS

* at the moment the application has not been tested in this environment because we need a MacBook.
