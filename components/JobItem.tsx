import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Job } from "../types/jobTypes"
import styles from "../styles/styles"

interface JobItemProps {
  job: Job;
  onSave: () => void;
  onApply: () => void;
  isSaved: boolean;
}

const JobItem: React.FC<JobItemProps> = ({ job, onSave, onApply, isSaved }) => {
  return (
    <View style={styles.jobItem}>
      <Text style={styles.jobTitle}>{job.title}</Text>
      <Text style={styles.jobCompany}>{job.company}</Text>
      <Text style={styles.jobSalary}>{job.salary}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onSave}>
          <Text>{isSaved ? "Saved" : "Save Job"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onApply}>
          <Text>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobItem; 