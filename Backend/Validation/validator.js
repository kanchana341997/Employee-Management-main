// const validateGetRoleByIdRequest = (data) => {
//   if (!data || !data.role_id || typeof data.role_id !== 'number') {
//     return { isValid: false, errors: ['role_id should be a valid number.'] };
//   }
//   return { isValid: true, errors: [] };
// };

const validateUpdateRoleByIdRequest = (data) => {
  const errors = [];

  if (!data || !data.role_name || typeof data.role_name !== 'string') {
    errors.push('role_name should be a non-empty string.');
  }

  if (!data || !data.dept_id || typeof data.dept_id !== 'number') {
    errors.push('dept_id should be a valid number.');
  }

  if (!data || !data.dept_name || typeof data.dept_name !== 'string') {
    errors.push('dept_name should be a non-empty string.');
  }

  if (!data || !data.updated_by || typeof data.updated_by !== 'string') {
    errors.push('updated_by should be a non-empty string.');
  }

  return { isValid: errors.length === 0, errors: errors.join(', ') }; // Return errors as a string
};

export { validateUpdateRoleByIdRequest };
