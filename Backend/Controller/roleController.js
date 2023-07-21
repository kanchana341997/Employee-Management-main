import role from '../Model/roleModel.js';

// Update user
const updateroleById = async (req, res) => {
  try {
    const role_id = req.params.role_id;
    const roleData = req.body;
    const updatedrole = await role.findOneAndUpdate(
      { role_id },
      roleData,
      { new: true }
    );
    if (!updatedrole) {
      return res.status(404).json({ message: 'role not found' });
    }
    console.log('role updated:', updatedrole);
    res.status(200).json(updatedrole);
  } catch (error) {
    console.error('Error updating role:', error);
    res.status(500).json({ error: 'Failed to update role' });
  }
};

// Delete user
// const deleteEmployeeById = async (req, res) => {
//   try {
//     const emp_id = req.params.emp_id;
//     const deletedEmployee = await Employee.findOneAndDelete({ emp_id });
//     if (!deletedEmployee) {
//       return res.status(404).json({ message: 'Employee not found' });
//     }
//     console.log('Employee deleted:', deletedEmployee);
//     res.status(200).json(deletedEmployee);
//   } catch (error) {
//     console.error('Error deleting employee:', error);
//     res.status(500).json({ error: 'Failed to delete employee' });
//   }
// };

export {
  updateroleById,
//   deleteEmployeeById,
};
