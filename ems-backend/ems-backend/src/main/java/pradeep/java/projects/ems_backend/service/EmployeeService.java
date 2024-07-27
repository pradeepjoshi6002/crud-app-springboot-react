package pradeep.java.projects.ems_backend.service;

import pradeep.java.projects.ems_backend.dto.EmployeeDto;

import java.util.ArrayList;
import java.util.List;

public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long employeeId,EmployeeDto employeeDto);

    void deleteEmployee(Long employeeId);
}
