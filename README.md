# signature-cordova
A Proof Of Concept Cordova repo for E-signatures. Can be used to build both iOS and Android App. 

##To run the app on Android
Open up a command line terminal, and

1. Ensure cordova is installed globally `npm install -g cordova`
2. Clone this repo `git clone https://github.com/btgjisan/signature-cordova.git`
3. Navigate to directory where you cloned it, this is usually done by typing `cd signature-cordova`
4. Ensure that ANT and Android SDK binaries are in your path. In Windows, you can do this by typing `echo %PATH%` and in UNIX based computers, you can do this by typing `echo $PATH`
5. Build the Android cordova platform: `cordova platforms add android` 
6. You can either emulate the Android app by typing 

  `cordova emulate android` 

  through Android emulator (very slow usually) or run the app in an attached device or Genymotion simulator by running 

  `cordova run android`

##To run the app on iOS (must be on MAC or VirtualEnv MAC)
Open up a command line terminal, and 

1. Ensure cordova is installed globally `npm install -g cordova`
2. Clone this repo `git clone https://github.com/btgjisan/signature-cordova.git`
3. Navigate to directory where you cloned it, this is usually done by typing `cd signature-cordova`
4. Ensure that you have XCode installed properly by typing `$(which xcodebuild) -version`. If not, go and install it.
5. Build the iOS cordova platform: `cordova platforms add ios`
6. You can emulate the iOS app by typing : `cordova build ios` and then typing `cordova emulate ios`. This should run the iOS app on a virtual simulator in your computer. 

Please report any problems in the issues section.

###Credits
This app uses the signature_pad codebase that was developed by Szymon Nowak [GitHub](https://github.com/szimek/signature_pad)


