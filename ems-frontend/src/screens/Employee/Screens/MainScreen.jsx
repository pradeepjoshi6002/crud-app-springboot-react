import {
  Button,
  InputAdornment,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useEffect, useMemo } from "react";
import { useState } from "react";
import EmployeeServices from "../../../Services/api-handling/api-collections/employeeApi";
import { generatePath, useNavigate } from "react-router-dom";
import PATH_NAME from "../../../configs/pathName";

const MainScreen = () => {
  const [list, setList] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();

  const getAllEmployeeList = async () => {
    try {
      const res = await EmployeeServices.getAllEmployeesList();
      setList(res?.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  const filteredList = useMemo(
    () => list.filter((empl) => empl?.firstName.includes(searchKey)),
    [searchKey, list]
  );
  const head = [
    { code: "employeeId", label: "Employee ID" },
    { code: "firstName", label: "First Name" },
    { code: "lastName", label: "Last Name" },
    { code: "email", label: "Email" },
  ];
  useEffect(() => {
    getAllEmployeeList();
  }, []);

  return (
    <Stack
      height="calc(100vh - 4rem)"
      width="100%"
      bgcolor="lightskyblue"
      alignItems="center"
      py="3rem"
      gap="2rem"
    >
      <Stack
        flexDirection="row"
        justifyContent="center"
        gap="3rem"
        width="100%"
      >
        <TextField
          placeholder="search for employee-name,email"
          size="small"
          sx={{ width: "500px", bgcolor: "white" }}
          onChange={(e) => setSearchKey(e.target.value)}
          InputProps={{
            endAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            navigate(generatePath(PATH_NAME.CREATE_EMPLOYEE));
          }}
        >
          add
        </Button>
      </Stack>
      <TableContainer sx={{ width: "70%" }}>
        <Table>
          <TableHead>
            <TableRow>
              {head.map((label, indx) => (
                <TableCell key={indx}>{label?.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredList?.map((employee, indx) => (
              <TableRow key={indx}>
                <TableCell>{employee?.id}</TableCell>
                <TableCell>{employee?.firstName}</TableCell>
                <TableCell>{employee?.lastName}</TableCell>
                <TableCell>{employee?.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default MainScreen;
