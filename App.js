import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screen/Home";
import Tabs from "./screen/Tabs";
import More from "./screen/More";
import Camera from "./screen/Camera";
import ChooseIcon from "./screen/ChooseIcon";
import ProfileToEdit from "./screen/ProfileToEdit";
import { configureI18n } from "./languages/utils";

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    configureI18n();
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
