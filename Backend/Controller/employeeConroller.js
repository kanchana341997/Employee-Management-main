import Employee from '../Model/employeeModel.js';

// Update user
const updateEmployeeById = async (req, res) => {
  try {
    const emp_id = req.params.emp_id;
    const employeeData = req.body;
    const updatedEmployee = await Employee.findOneAndUpdate(
      { emp_id },
      employeeData,
      { new: true }
    );
    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    console.log('Employee updated:', updatedEmployee);
    res.status(200).json(updatedEmployee);
  } catch (error) {
    console.error('Error updating employee:', error);
    res.status(500).json({ error: 'Failed to update employee' });
  }
};

// Delete user
const deleteEmployeeById = async (req, res) => {
  try {
    const emp_id = req.params.emp_id;
    const deletedEmployee = await Employee.findOneAndDelete({ emp_id });
    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    console.log('Employee deleted:', deletedEmployee);
    res.status(200).json(deletedEmployee);
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ error: 'Failed to delete employee' });
  }
};

export {
  updateEmployeeById,
  deleteEmployeeById,
};
