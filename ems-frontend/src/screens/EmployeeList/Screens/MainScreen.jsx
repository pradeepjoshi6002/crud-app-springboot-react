import { Box, Stack } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import EmployeeServices from "../../../Services/api-handling/api-collections/employeeApi";

const MainScreen = () => {
  const [list, setList] = useState([]);

  const getAllEmployeeList = async () => {
    try {
      const res = await EmployeeServices.getAllEmployeesList();
      setList(res?.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getAllEmployeeList();
  }, []);

  return (
    <Box width="100%" height="100vh">
      {list.length > 0 &&
        list?.map((employee) => (
          <Stack key={employee?.id}>{employee?.firstName}</Stack>
        ))}
    </Box>
  );
};

export default MainScreen;
