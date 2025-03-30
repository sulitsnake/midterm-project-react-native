import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JobProvider } from "./context/JobContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext"; 
import JobFinderScreen from "./screens/JobFinderScreen";
import SavedJobsScreen from "./screens/SavedJobsScreen";
import ApplicationFormScreen from "./screens/ApplicationFormScreen";
import { RootStackParamList } from "./navigation/types"; 
import Ionicons from "react-native-vector-icons/Ionicons"; 
import { TouchableOpacity, View } from "react-native"; 

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppContent = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="JobFinder">
        <Stack.Screen 
          name="JobFinder" 
          component={JobFinderScreen} 
          options={({ navigation }) => ({
            title: "",
            headerBackVisible: false,
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.navigate("SavedJobs")} style={{ marginRight: 15 }}>
                  <Ionicons name="bookmark-outline" size={24} color={isDarkMode ? "white" : "black"} />
                </TouchableOpacity>

                <TouchableOpacity onPress={toggleTheme}>
                  <Ionicons 
                  name = {isDarkMode ? "moon-stars" : "moon"}
                  size = {24} 
                  color = {isDarkMode ? "#d4bb63" : "black"} 
                  style = {{ marginRight:15 }}
                  />

                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen 
          name="SavedJobs" 
          component={SavedJobsScreen} 
          options={({ navigation }) => ({
            title: "",
            headerBackVisible: false,
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.navigate("JobFinder")} style={{ marginRight: 15 }}>
                  <Ionicons name="briefcase-outline" size={24} color={isDarkMode ? "white" : "black"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleTheme}>
                  <Ionicons name="moon" size={24} color={isDarkMode ? "yellow" : "black"} />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen 
          name="ApplicationForm" 
          component={ApplicationFormScreen} 
          options={({ navigation }) => ({
            title: "",
            headerBackVisible: true,
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.navigate("JobFinder")} style={{ marginRight: 15 }}>
                  <Ionicons name="briefcase-outline" size={24} color={isDarkMode ? "white" : "black"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("SavedJobs")} style={{ marginRight: 15 }}>
                  <Ionicons name="bookmark-outline" size={24} color={isDarkMode ? "white" : "black"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleTheme}>
                  <Ionicons name="moon" size={24} color={isDarkMode ? "yellow" : "black"} />
                </TouchableOpacity>
              </View>
            ),
          })}
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
