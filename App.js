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

function App() {
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

export default App;
