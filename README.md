# This is just my small project that I used to learn react native my own, by taking me to my limits.

### Its a to do app, with a minimalistic UI.

### Bugs and things I faced during the creation and how I overcome them:

- StatusBar, Color Issue: use custom status bar provided by expo, install with `expo install expo-status-bar` [expo.dev](https://docs.expo.dev/versions/latest/sdk/status-bar/#installation)
- React Native Paper Header and using custom theme: Add the config to paper provider container with the default theme
- Paper, and whole using custom font:For whole app, install `expo install expo-font @expo-google-fonts/inter` and then import, also install Apploading so the app waits for loading fonts, create a font loader and only return the app after fontloading is true else return apploading. For paper, import from the main provider function and add to fonts config. [expo](https://docs.expo.dev/guides/using-custom-fonts/)
- Keyboard Rising view elements problem: [Stackoverflow](https://stackoverflow.com/a/65749722/14303620)
- React navigation, custom appbar: Add it as screenOptions, header inside stacknavigator
- React navigation header, getParam is not a funciton: [github Issue](https://github.com/react-navigation/react-navigation/issues/6212)
- Dynamic title for navigator appbar: add it as stackscreen options and then add that as props to the custom appbar
- Pass data between screens: Add it as a parameter (this is cheeting actually) and then check if those paramers are passed to the header, if it is, do something
- Re Rendering issue: use useEffect with route.params as condition so that it only happens when there is a parameter in route
