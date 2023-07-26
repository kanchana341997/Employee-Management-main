// import Role from '../Model/roleModel.js';
// import mongoose from "mongoose";



// Function to get a role by role ID

// const getRoleById = async (req, res) => {
//   try {
//     const roleId = req.params.role_id;
//     const roles = await Role.findOne({ role_id: roleId });
//     if (!roles) {
//       return res.status(404).json({ message: 'Role not found' });
//     }
//     res.status(200).json(roles);
//   } catch (error) {
//     console.error('Error fetching role:', error);
//     res.status(500).json({ error: 'Failed to fetch role' });
//   }
// };

// API to update the role
// const updateRoleById = async (req, res) => {
//   try {
//     const { role_name, dept_id, dept_name, updated_by } = req.body;
//     const roleIdToUpdate = req.params.role_id;

//     const filter = { role_id: roleIdToUpdate }; 
//     const update = {
//       role_name,
//       dept_id,
//       dept_name,
//       updated_by,
//       updated_date: new Date(),
//     };

//     const updatedRole = await Role.updateOne(filter, update);

//     if (updatedRole.nModified === 0) {
//       return res.status(404).json({ message: 'Role not found' });
//     }

//     res.status(200).json({ message: 'Role updated successfully', update });
//   } catch (error) {
//     console.error('Error updating role:', error);
//     res.status(500).json({ error: 'Failed to update role' });
//   }
// };

// // API to list the roles with filters active and inactive
// const activeRole = async (req, res) => {
// try {
//   const { active } = req.query;

//   // Create a filter object based on the 'active' query parameter
//   const filter = active === "true" ? { is_active_flag: true } : active === "false" ? { is_active_flag: false } : {};

//   // Fetch the roles based on the filter
//   const roles = await Role.find(filter);

//   // Return the list of roles
//   res.status(200).json(roles);
// } catch (error) {
//   console.error("Error fetching roles:", error);
//   res.status(500).json({ error: "Failed to fetch roles" });
// }
// };



// controller.js
import Role from '../Model/roleModel.js';
import { GetRoleByIdRequest, UpdateRoleByIdRequest } from '../Model/requestModel.js';
import { RoleResponse } from '../Model/responseModel.js';
import { validateGetRoleByIdRequest, validateUpdateRoleByIdRequest } from '../Validation/validator.js';

// Controller function to get all roles
const getAllRoles = (req, res) => {
  Role.find()
    .then((roles) => res.json(roles))
    .catch((err) => res.status(500).json({ error: "Error fetching roles from the database." }));
};

// Function to get a role by role ID
// const getRoleById = async (req, res) => {
//   try {
//     const requestData = new GetRoleByIdRequest(req.params.role_id);
//     const validationResult = validateGetRoleByIdRequest(requestData);

//     if (!validationResult.isValid) {
//       return res.status(400).json({ error: 'Invalid request data', details: validationResult.getErrors() });
//     }

//     const roleId = req.params.role_id;
//     const roles = await Role.findOne({ role_id: roleId });
//     if (!roles) {
//       return res.status(404).json({ message: 'Role not found' });
//     }

//     const roleResponse = new RoleResponse(
//       roles.role_id,
//       roles.role_name,
//       roles.dept_id,
//       roles.dept_name,
//       roles.inserted_date,
//       roles.updated_date,
//       roles.inserted_by,
//       roles.updated_by,
//       roles.is_active_flag
//     );

//     res.status(200).json(roleResponse);
//   } catch (error) {
//     console.error('Error fetching role:', error);
//     res.status(500).json({ error: 'Failed to fetch role' });
//   }
// };

// API to list the roles with filters active and inactive
const activeRole = async (req, res) => {
try {
  const { active } = req.query;

  // Create a filter object based on the 'active' query parameter
  const filter = active === "true" ? { is_active_flag: true } : active === "false" ? { is_active_flag: false } : {};

  // Fetch the roles based on the filter
  const roles = await Role.find(filter);

  // Return the list of roles
  res.status(200).json(roles);
} catch (error) {
  console.error("Error fetching roles:", error);
  res.status(500).json({ error: "Failed to fetch roles" });
}
};

// API to update the role
const updateRoleById = async (req, res) => {
  try {
    const requestData = new UpdateRoleByIdRequest(
      req.body.role_name,
      req.body.dept_id,
      req.body.dept_name,
      req.body.updated_by
    );

    const validationResult = validateUpdateRoleByIdRequest(requestData);

    if (!validationResult.isValid) {
      return res.status(400).json({ error: 'Invalid request data', details: validationResult.getErrors() });
    }

    const roleIdToUpdate = req.params.role_id;

    const filter = { role_id: roleIdToUpdate }; 
        const update = {
          role_name,
          dept_id,
          dept_name,
          updated_by,
          updated_date: new Date(),
        };
    
        const updatedRole = await Role.updateOne(filter, update);
    
        if (updatedRole.nModified === 0) {
          return res.status(404).json({ message: 'Role not found' });
        }
    
        res.status(200).json({ message: 'Role updated successfully', update });
    
  } catch (error) {
    console.error('Error updating role:', error);
    res.status(500).json({ error: 'Failed to update role' });
  }
};

export {   
  getAllRoles,  
  // getRoleById,  
  updateRoleById,
  activeRole 
};
