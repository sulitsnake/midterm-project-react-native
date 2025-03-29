import axios from "axios";
import { Job } from "../types/jobTypes";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";


const API_URL = "https://empllo.com/api/v1";

export const fetchJobs = async (): Promise<Job[]> => {
  try {
    const response = await axios.get(API_URL);
    if (response.status === 200) {
      return response.data.jobs.map((job: any) => ({
        id: uuidv4(),
        title: job.title || "Unknown Title",
        company: job.companyName || "Unknown Company",
        salary: job.minSalary ? `$${job.minSalary} - $${job.maxSalary}` : "Not specified",
        description: job.description || "No description available",
        jobType: job.jobType || "Unknown",
        workModel: job.workModel || "Unknown",
        location: job.locations?.join(", ") || "Unknown",
        applicationLink: job.applicationLink || "#",
      }));
    } else {
      throw new Error("Failed to fetch jobs");
    }
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};
