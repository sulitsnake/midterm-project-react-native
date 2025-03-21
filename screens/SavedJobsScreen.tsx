import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { JobContext } from "../context/JobContext";
import styles from "../styles/styles";

type Props = NativeStackScreenProps<RootStackParamList, "SavedJobs">;

const SavedJobsScreen: React.FC<Props> = ({ navigation }) => {
  const jobContext = useContext(JobContext);

  if (!jobContext) return <Text>Loading...</Text>;

  const { savedJobs, removeJob } = jobContext;

  return (
    <View style={styles.container}>
      <FlatList
        data={savedJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.jobItem}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.jobCompany}>{item.company}</Text>
            <Text style={styles.jobSalary}>{item.salary}</Text>
            <TouchableOpacity style={styles.button} onPress={() => removeJob(item.id)}>
              <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("ApplicationForm", { jobId: item.id, jobTitle: item.title })}
            >
              <Text style={styles.buttonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default SavedJobsScreen;
