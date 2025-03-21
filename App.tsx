import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JobProvider } from "./context/JobContext";
import JobFinderScreen from "./screens/JobFinderScreen";
import SavedJobsScreen from "./screens/SavedJobsScreen";
import ApplicationFormScreen from "./screens/ApplicationFormScreen";
import { RootStackParamList } from "./navigation/types"; 

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <JobProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="JobFinder">
          <Stack.Screen name="JobFinder" component={JobFinderScreen} />
          <Stack.Screen name="SavedJobs" component={SavedJobsScreen} />
          <Stack.Screen name="ApplicationForm" component={ApplicationFormScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </JobProvider>
  );
};

export default App;
