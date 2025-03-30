import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JobProvider } from "./context/JobContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext"; // Import Theme Context
import JobFinderScreen from "./screens/JobFinderScreen";
import SavedJobsScreen from "./screens/SavedJobsScreen";
import ApplicationFormScreen from "./screens/ApplicationFormScreen";
import { RootStackParamList } from "./navigation/types"; 

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppContent = () => {
  const { isDarkMode } = useTheme(); // Access dark mode state

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="JobFinder">
        <Stack.Screen 
          name="JobFinder" 
          component={JobFinderScreen} 
          options={{ title: "Welcome to the TS Job Finder" }} 
        />
        <Stack.Screen 
          name="SavedJobs" 
          component={SavedJobsScreen} 
          options={{ title: "Your saved jobs" }} 
        />
        <Stack.Screen 
          name="ApplicationForm" 
          component={ApplicationFormScreen} 
          options={{ title: "Apply for the Job" }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <JobProvider>
        <AppContent />
      </JobProvider>
    </ThemeProvider>
  );
};

export default App;
