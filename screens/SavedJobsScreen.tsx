import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { JobContext } from "../context/JobContext";
import { useTheme } from "../context/ThemeContext"; 
import styles from "../styles/styles";

type Props = NativeStackScreenProps<RootStackParamList, "SavedJobs">;

const SavedJobsScreen: React.FC<Props> = ({ navigation }) => {
  const jobContext = useContext(JobContext);
  const { isDarkMode } = useTheme(); 

  if (!jobContext) return <Text>Loading...</Text>;

  const { savedJobs, removeJob } = jobContext;

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      {savedJobs.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyText, isDarkMode && styles.darkText]}>
            No jobs saved. Apply for one to get started.
          </Text>
        </View>
      ) : (
        <FlatList
          data={savedJobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.jobItem, isDarkMode && styles.darkJobItem]}>
              <Text style={[styles.jobTitle, isDarkMode && styles.darkText]}>{item.title}</Text>
              <Text style={[styles.jobCompany, isDarkMode && styles.darkText]}>{item.company}</Text>
              <Text style={[styles.jobSalary, isDarkMode && styles.darkText]}>{item.salary}</Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity 
                  style={[styles.button, styles.removeButton]} 
                  onPress={() => removeJob(item.id)}
                >
                  <Text style={styles.buttonText}>Remove</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[styles.button, styles.applyButton]} 
                  onPress={() =>
                    navigation.navigate("ApplicationForm", { jobId: item.id, jobTitle: item.title })
                  }
                >
                  <Text style={styles.buttonText}>Apply</Text>
                </TouchableOpacity>
              </View>

            </View>
          )}
        />
      )}
    </View>
  );
};

export default SavedJobsScreen;
