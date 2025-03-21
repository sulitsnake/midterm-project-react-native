import React, { useContext, useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import { JobContext } from "../context/JobContext";
import JobItem from "../components/JobItem";
import styles from "../styles/styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types"
import { useNavigation } from "@react-navigation/native";

const JobFinderScreen: React.FC = () => {
  const jobContext = useContext(JobContext);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "JobFinder">>();
  const [search, setSearch] = useState("");

  if (!jobContext) return <Text>Loading...</Text>;

  const { jobs, saveJob, savedJobs } = jobContext;

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SavedJobs")}>
        <Text style={styles.buttonText}>Go to Saved Jobs</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.searchInput}
        placeholder="Search jobs..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JobItem
            job={item}
            onSave={() => saveJob(item)}
            onApply={() => navigation.navigate("ApplicationForm", { jobId: item.id, jobTitle: item.title })}
            isSaved={savedJobs.some((savedJob) => savedJob.id === item.id)}
          />
        )}
      />
    </View>
  );
};

export default JobFinderScreen;
