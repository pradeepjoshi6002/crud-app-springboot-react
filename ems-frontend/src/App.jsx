import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./screens/EmployeeList/Screens/MainScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
