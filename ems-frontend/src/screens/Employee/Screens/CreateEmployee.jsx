import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import EmployeeServices from "../../../Services/api-handling/api-collections/employeeApi";
import { useNavigate } from "react-router-dom";
const CreateEmployee = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const createEmployee = async () => {
    try {
      await EmployeeServices.createEmployee({ data: formData });
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createEmployee();
    navigate(-1);
  };
  return (
    <Stack
      height="calc(100vh - 4rem)"
      justifyContent="center"
      alignItems="center"
    >
      <Stack>
        <form onSubmit={handleSubmit}>
          <Stack>
            <Stack flexDirection="row">
              <TextField
                type="text"
                label="FirstName"
                placeholder="First Name"
                value={formData?.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              <TextField
                type="text"
                label="LastName"
                placeholder="Last Name"
                value={formData?.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </Stack>
            <TextField
              type="email"
              label="Email"
              placeholder="email"
              value={formData?.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <Button type="submit">submit</Button>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};

export default CreateEmployee;
