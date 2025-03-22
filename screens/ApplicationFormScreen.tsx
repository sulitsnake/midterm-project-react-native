import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import styles from "../styles/styles";

type Props = NativeStackScreenProps<RootStackParamList, "ApplicationForm">;

const ApplicationFormScreen: React.FC<Props> = ({ route, navigation }) => {
  const { jobId, jobTitle } = route.params; 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [reason, setReason] = useState("");

  const submitApplication = () => {
    if (!name || !email || !contact || !reason) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    Alert.alert("Success", "Application submitted!", [
      { text: "OK", onPress: () => navigation.navigate("JobFinder") },
    ]);
    setName("");
    setEmail("");
    setContact("");
    setReason("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Apply for {jobTitle}</Text> 
      <Text style={styles.subHeader}>Job ID: {jobId}</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#C0C0C0"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#C0C0C0"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        placeholderTextColor="#C0C0C0"
        value={contact}
        onChangeText={setContact}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.textArea}
        placeholder="Why should we hire you?"
        placeholderTextColor="#C0C0C0"
        value={reason}
        onChangeText={setReason}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={submitApplication}>
        <Text style={styles.buttonText}>Submit Application</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ApplicationFormScreen;
