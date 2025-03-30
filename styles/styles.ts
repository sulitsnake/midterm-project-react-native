import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  jobItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  jobCompany: {
    fontSize: 16,
    color: "#555",
    marginBottom: 4,
  },
  jobSalary: {
    fontSize: 14,
    color: "#28a745",
    marginBottom: 8,
  },
  buttonContainer: {
    marginTop: 10, 
    marginBottom: 5, 
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 120, 
    height: 40, 
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: "#007bff",
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: "#fff",
  },

  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    marginBottom: 12,
  },
  textArea: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    marginBottom: 12,
    textAlignVertical: "top",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subHeader: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },

  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
    alignSelf: "flex-start", 
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 200, 
  },
  emptyText: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
  },
  
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  
  toggleText: {
    fontSize: 16,
    color: "#333",
  },
  
  darkContainer: {
    backgroundColor: "#121212",
  },
  
  darkText: {
    color: "#cbd6cf",
  },
  
  darkInput: {
    backgroundColor: "#333",
    color: "#fff",
    borderColor: "#555",
  },
  
  darkJobItem: {
    backgroundColor: "#333",
    borderColor: "#555",
  },

  darkErrorText: {
    color: "#ff6961",
  },
  
  saveButton: {
    backgroundColor: "#2c82bf", //blue
  },
  applyButton: {
    backgroundColor: "#2cbf56", // green
  },
  removeButton: {
    backgroundColor: "#bf452c", //red
  },
  fullWidthButton: {
    width: "100%",  
    backgroundColor: "#82d102", //yellow green
    alignSelf: "stretch",
    marginTop: 10,
  },
  
  
  


});

export default styles;
