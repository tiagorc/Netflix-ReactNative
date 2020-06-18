const { Platform, NativeModules } = require("react-native");

const getLanguageByDevice = () => {
  const majorVersionIOS = parseInt(Platform.Version, 10);

  let locale = null;

  if (Platform.OS === "ios") {
    //https://github.com/facebook/react-native/issues/26540
    if (majorVersionIOS == 13) {
      locale = NativeModules.SettingsManager.settings.AppleLanguage;
    } else {
      locale = NativeModules.SettingsManager.settings.AppLocale;
    }
  } else {
    locale = NativeModules.I18nManager.localeIdentifier;
  }

  return locale;
};
