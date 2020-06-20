import { registerRootComponent } from "expo";

import App from "./App";
import React from "react";
import codePush from "react-native-code-push";

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
MyApp = codePush(codePushOptions)(App);
console.log("Code push on");

registerRootComponent(MyApp);
