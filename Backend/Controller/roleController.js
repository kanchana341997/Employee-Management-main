// controller.js
import Role from '../Model/roleModel.js';
import { UpdateRoleByIdRequest } from '../Model/requestModel.js';
import { RoleResponse } from '../Model/responseModel.js';
import { validateUpdateRoleByIdRequest } from '../Validation/validator.js';

// Controller function to get all roles
const getAllRoles = (req, res) => {
  Role.find()
    .then((roles) => res.json(roles))
    .catch((err) => res.status(500).json({ error: "Error fetching roles from the database." }));
};

// Function to get a role by role ID

const getRoleById = async (req, res) => {
  try {
    const roleId = req.params.role_id;
    const roles = await Role.findOne({ role_id: roleId });
    if (!roles) {
      return res.status(404).json({ message: 'Role not found' });
    }
    res.status(200).json(roles);
  } catch (error) {
    console.error('Error fetching role:', error);
    res.status(500).json({ error: 'Failed to fetch role' });
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

  // Validation logic here...
  const validationResult = validateUpdateRoleByIdRequest(requestData);

  if (!validationResult.isValid) {
    return res.status(400).json({ error: 'Invalid request data', details: validationResult.errors });
  }

  const roleIdToUpdate = req.params.role_id;

  const filter = { role_id: roleIdToUpdate };
  const update = {
    role_name: requestData.role_name,
    dept_id: requestData.dept_id,
    dept_name: requestData.dept_name,
    updated_by: requestData.updated_by,
    updated_date: new Date(),
  };

  const updatedRole = await Role.updateOne(filter, update);

  if (updatedRole.n === 0) {
    return res.status(404).json({ message: 'Role not found' });
  }

  // Fetch the updated role object and return it in the response
  const updatedRoleObject = await Role.findOne(filter);

  res.status(200).json({ message: 'Role updated successfully', role: updatedRoleObject });

} catch (error) {
  console.error('Error updating role:', error);
  res.status(500).json({ error: 'Failed to update role' });
}
};

// API to Get active and inactive role list
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

const activeRole = async (req, res) => {
  try {
    const { active, page = 1, limit = 10 } = req.query;

    // Create a filter object based on the 'active' query parameter
    const filter = active === "true" ? { is_active_flag: true } : active === "false" ? { is_active_flag: false } : {};

    // Calculate the skip value to skip items on previous pages
    const skip = (page - 1) * limit;

    // Fetch the roles based on the filter and pagination options
    const roles = await Role.find(filter).skip(skip).limit(parseInt(limit));

    // Count the total number of roles that match the filter (without pagination)
    const totalRolesCount = await Role.countDocuments(filter);

    // Return the paginated list of roles along with additional pagination info
    res.status(200).json({
      totalRolesCount,
      currentPage: page,
      rolesPerPage: limit,
      totalPages: Math.ceil(totalRolesCount / limit),
      roles,
    });
  } catch (error) {
    console.error("Error fetching roles:", error);
    res.status(500).json({ error: "Failed to fetch roles" });
  }
};


export {   
  getAllRoles,  
  getRoleById,  
  updateRoleById,
  activeRole 
};