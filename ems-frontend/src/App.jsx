import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import PATH_NAME from "./configs/pathName";
import CreateEmployee from "./screens/Employee/Screens/CreateEmployee";
import MainScreen from "./screens/Employee/Screens/MainScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Stack
        height="4rem"
        bgcolor="darkblue"
        justifyContent="center"
        alignItems="center"
        color="white"
      >
        <Typography variant="h5">Employee Management System</Typography>
      </Stack>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path={PATH_NAME.CREATE_EMPLOYEE} element={<CreateEmployee />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
