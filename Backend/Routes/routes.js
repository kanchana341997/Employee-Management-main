import express from 'express';

import {
   updateEmployeeById, 
   deleteEmployeeById,
} from '../Controller/employeeConroller.js'


import {
   updateroleById, 
   // deleteEmployeeById,
} from '../Controller/roleConroller.js'

const router = express.Router();

// Update user
router.put('/employees/:emp_id', updateEmployeeById);

// Delete user
router.delete('/employees/:emp_id', deleteEmployeeById);

// Update user
router.put('/roles/:role_id', updateroleById);

export default router;

