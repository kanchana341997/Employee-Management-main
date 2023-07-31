import express from "express";
import { getAllRoles, updateRoleById, getRoleById, activeRole } from "../Controller/roleController.js";

const router = express.Router();

// Define the route to get all roles
router.get("/roles", getAllRoles);

// Define the route to get all roles
router.get("/roles/:role_id", getRoleById);

// Define the route to update all role
router.put('/roles/:role_id', updateRoleById);

// Define the route to list the roles with filters active and inactive
router.get("/activerole",activeRole);

export default router;
