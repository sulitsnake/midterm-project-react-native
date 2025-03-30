import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { useTheme } from "../context/ThemeContext"; 
import styles from "../styles/styles";
import { Alert } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "ApplicationForm">;

const ApplicationFormScreen: React.FC<Props> = ({ route, navigation }) => {
  const { jobId, jobTitle } = route.params;
  const { isDarkMode } = useTheme(); 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [reason, setReason] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contact: "",
    reason: "",
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", email: "", contact: "", reason: "" };

    if (!name) {
      newErrors.name = "Full Name is required.";
      valid = false;
    }

    if (!email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format.";
      valid = false;
    }

    if (!contact) {
      newErrors.contact = "Contact number is required.";
      valid = false;
    } else if (contact.replace(/\D/g, "").length < 8) {
      newErrors.contact = "Contact number must have at least 8 digits.";
      valid = false;
    }

    if (!reason) {
      newErrors.reason = "This field is required.";
      valid = false;
    } else if (reason.length < 25) {
      newErrors.reason = "Reason must be at least 25 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const submitApplication = () => {
    if (validateForm()) {
      Alert.alert(
        "Confirm Application",
        `Would you like to apply for ${jobTitle}?`,
        [
          {
            text: "No",
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              Alert.alert(
                "Application Submitted!",
                "Your application has been successfully submitted.",
                [
                  {
                    text: "Okay",
                    onPress: () => {
                      navigation.navigate("JobFinder");
                      setName("");
                      setEmail("");
                      setContact("");
                      setReason("");
                      setErrors({ name: "", email: "", contact: "", reason: "" });
                    },
                  },
                ]
              );
            },
          },
        ]
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.header, isDarkMode && styles.darkText]}>Apply for {jobTitle}</Text>
      <Text style={[styles.subHeader, isDarkMode && styles.darkText]}>Job ID: {jobId}</Text>

      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Full Name"
        placeholderTextColor={isDarkMode ? "#A0A0A0" : "#C0C0C0"}
        value={name}
        onChangeText={(text) => {
          setName(text);
          setErrors((prev) => ({ ...prev, name: "" }));
        }}
      />
      {errors.name ? <Text style={[styles.errorText, isDarkMode && styles.darkErrorText]}>{errors.name}</Text> : null}

      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Email"
        placeholderTextColor={isDarkMode ? "#A0A0A0" : "#C0C0C0"}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setErrors((prev) => ({ ...prev, email: "" }));
        }}
        keyboardType="email-address"
      />
      {errors.email ? <Text style={[styles.errorText, isDarkMode && styles.darkErrorText]}>{errors.email}</Text> : null}

      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Contact Number"
        placeholderTextColor={isDarkMode ? "#A0A0A0" : "#C0C0C0"}
        value={contact}
        onChangeText={(text) => {
          setContact(text);
          setErrors((prev) => ({ ...prev, contact: "" }));
        }}
        keyboardType="phone-pad"
      />
      {errors.contact ? <Text style={[styles.errorText, isDarkMode && styles.darkErrorText]}>{errors.contact}</Text> : null}

      <TextInput
        style={[styles.textArea, isDarkMode && styles.darkInput]}
        placeholder="Why should we hire you?"
        placeholderTextColor={isDarkMode ? "#A0A0A0" : "#C0C0C0"}
        value={reason}
        onChangeText={(text) => {
          setReason(text);
          setErrors((prev) => ({ ...prev, reason: "" }));
        }}
        multiline
      />
      {errors.reason ? <Text style={[styles.errorText, isDarkMode && styles.darkErrorText]}>{errors.reason}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={submitApplication}>
        <Text style={styles.buttonText}>Submit Application</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ApplicationFormScreen;
