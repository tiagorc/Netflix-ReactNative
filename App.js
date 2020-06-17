import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screen/Home";
import Tabs from "./screen/Tabs";
import More from "./screen/More";
import Camera from "./screen/Camera";
import ChooseIcon from "./screen/ChooseIcon";
import ProfileToEdit from "./screen/ProfileToEdit";

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    setLanguageToI18n();
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Camera"
            component={Camera}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChooseIcon"
            component={ChooseIcon}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="More"
            component={More}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProfileToEdit"
            component={ProfileToEdit}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export const setLanguageToI18n = () => {
  // const language = getLanguageByDevice();
  // console.log("language: ", language);
  // const translateNormalize = normalizeTranslate[language];
  // const languageExists = I18n.translations.hasOwnProperty(translateNormalize);
  // languageExists
  //   ? (I18n.locale = translateNormalize)
  //   : (I18n.defaultLocale = "pt-BR");
  // 01;
  // 52;
  // 57;
};
