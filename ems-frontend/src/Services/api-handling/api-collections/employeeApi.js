import axios from "axios";

const apiEmp = "api/employees";

// const baseUrl = process.env.local.REACT_APP_BASE_URL;
const baseUrl = "http://localhost:8080";

class EmployeeService {
  getAllEmployeesList = () => {
    return axios.get(`${baseUrl}/${apiEmp}`);
  };
}

const EmployeeServices = new EmployeeService();

export default EmployeeServices;
