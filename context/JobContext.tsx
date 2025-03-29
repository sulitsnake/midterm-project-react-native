import React, { createContext, useState, useEffect, ReactNode } from "react";
import { fetchJobs } from "../api/jobApi"; 
import { Job } from "../types/jobTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface JobContextType {
  jobs: Job[];
  savedJobs: Job[];
  saveJob: (job: Job) => void;
  removeJob: (id: string) => void;
}

export const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);

  useEffect(() => {
    const loadJobs = async () => {
      const fetchedJobs = await fetchJobs();
      setJobs(fetchedJobs);
    };
    loadJobs();
  }, []);

  useEffect(() => {
    const loadSavedJobs = async () => {
      const saved = await AsyncStorage.getItem("savedJobs");
      if (saved) {
        setSavedJobs(JSON.parse(saved));
      }
    };
    loadSavedJobs();
  }, []);

  const saveJob = async (job: Job) => {
    setSavedJobs((prevJobs) => {
      if (prevJobs.some((j) => j.id === job.id)) return prevJobs;
      const updatedJobs = [...prevJobs, job];
      AsyncStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
      return updatedJobs;
    });
  };

  const removeJob = async (id: string) => {
    setSavedJobs((prevJobs) => {
      const updatedJobs = prevJobs.filter((job) => job.id !== id);
      AsyncStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
      return updatedJobs;
    });
  };

  return (
    <JobContext.Provider value={{ jobs, savedJobs, saveJob, removeJob }}>
      {children}
    </JobContext.Provider>
  );
};
