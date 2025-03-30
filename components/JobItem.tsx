import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Job } from "../types/jobTypes";
import { useTheme } from "../context/ThemeContext"; 
import styles from "../styles/styles";

interface JobItemProps {
  job: Job;
  onSave: () => void;
  onApply: () => void;
  isSaved: boolean;
}

const JobItem: React.FC<JobItemProps> = ({ job, onSave, onApply, isSaved }) => {
  const { isDarkMode } = useTheme(); 

  return (
    <View style={[styles.jobItem, isDarkMode && styles.darkJobItem]}>
      <Text style={[styles.jobTitle, isDarkMode && styles.darkText]}>{job.title}</Text>
      <Text style={[styles.jobCompany, isDarkMode && styles.darkText]}>{job.company}</Text>
      <Text style={[styles.jobSalary, isDarkMode && styles.darkText]}>{job.salary}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={onSave}>
          <Text style={styles.buttonText}>{isSaved ? "Saved" : "Save Job"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.applyButton]} onPress={onApply}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobItem;
