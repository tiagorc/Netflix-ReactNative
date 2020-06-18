import { Platform, NativeModules } from "react-native";
import I18n from "i18n-js";

const normalizeTranslate = {
  en_US: "en_US",
  pt_BR: "pt_BR",
  en: "en_US",
  pt_US: "pt_BR",
};

I18n.translations = {
  en_US: require("./en-US.json"),
  pt_BR: require("./pt-BR.json"),
};

const getLanguageByDevice = () => {
  let locale = null;

  if (Platform.OS === "ios") {
    const majorVersionIOS = parseInt(Platform.Version, 10);
    if (majorVersionIOS >= 13) {
      locale = NativeModules.SettingsManager.settings.AppleLanguages[0];
    } else {
      locale = NativeModules.SettingsManager.settings.AppLocale;
    }
  } else {
    locale = NativeModules.I18nManager.localeIdentifier;
  }

  return locale;
};

export const configureI18n = () => {
  const language = getLanguageByDevice();

  const translateNormalize = normalizeTranslate[language];

  const languageExists = I18n.translations.hasOwnProperty(translateNormalize);

  languageExists
    ? (I18n.locale = translateNormalize)
    : (I18n.defaultLocale = "pt-BR");
};

export const translate = (key) => I18n.t(key);
