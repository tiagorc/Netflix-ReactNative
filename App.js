import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AsyncStorage } from "react-native";

import Home from "./screen/Home";
import Tabs from "./screen/Tabs";
import More from "./screen/More";
import Camera from "./screen/Camera";
import ChooseIcon from "./screen/ChooseIcon";
import ProfileToEdit from "./screen/ProfileToEdit";
import { configureI18n } from "./languages/utils";
import { ProfileContext } from "./context/ProfileContext";

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    configureI18n();

    AsyncStorage.getItem("profile").then((result) => {
      this.setState({ user: result });
    });

    this.changeProfile = this.changeProfile.bind(this);

    this.state = {
      user: null,
      changeProfile: this.changeProfile,
    };
  }

  changeProfile(newUser) {
    this.setState({ user: newUser.name });
  }

  render() {
    return (
      <ProfileContext.Provider value={this.state}>
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
      </ProfileContext.Provider>
    );
  }
}
