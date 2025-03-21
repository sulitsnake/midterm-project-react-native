import React, { createContext, useState, useEffect, ReactNode } from "react";
import jobsData from "../data/jobs.json"; // Import JSON data
import { Job } from "../types/jobTypes";
import uuid from "react-native-uuid"; // ✅ Use react-native-uuid

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
    if (jobsData.jobs && Array.isArray(jobsData.jobs)) {

      const jobsWithId = jobsData.jobs.map((job) => ({
        id: uuid.v4() as string, //id generator
        title: job.title,
        company: job.companyName,
        salary: job.minSalary ? `$${job.minSalary} - $${job.maxSalary}` : "Not specified",
        description: job.description,
        jobType: job.jobType,
        workModel: job.workModel,
        location: job.locations ? job.locations.join(", ") : "Unknown",
        applicationLink: job.applicationLink,
      }));
      setJobs(jobsWithId);
    } else {
      console.error("Invalid job data structure in jobs.json");
    }
  }, []);

  const saveJob = (job: Job) => {
    setSavedJobs((prevJobs) =>
      prevJobs.some((j) => j.id === job.id) ? prevJobs : [...prevJobs, job]
    );
  };

  const removeJob = (id: string) => {
    setSavedJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  return (
    <JobContext.Provider value={{ jobs, savedJobs, saveJob, removeJob }}>
      {children}
    </JobContext.Provider>
  );
};
