const express = require("express");
const router = express.Router();
const Role = require("../models/role");

// API to add the new role
router.post("/add", (req, res) => {
  const newRole = new Role({
    role_id: req.body.role_id,
    role_name: req.body.role_name,
    dept_id: req.body.dept_id,
    dept_name: req.body.dept_name,
    inserted_date: req.body.inserted_date,
    updated_date: req.body.updated_date,
    inserted_by: req.body.inserted_by,
    updated_by: req.body.updated_by,
    is_active_flag: req.body.is_active_flag,
  });
  newRole
    .save()
    .then(() => res.json("Role Added..."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// API to get all the roles
router.get("/", (req, res) => {
    Role.find()
    .then((roles) => res.json(roles))
    .catch((err) => res.status(400).json("Error: " + err));
});

// API to update the role
router.post("/update/:id", (req, res) => {
  Role.findById(req.params.id)
    .then((roles) => {
      roles.role_id = req.body.role_id;
      roles.role_name = req.body.role_name;
      roles.dept_id = req.body.dept_id;
      roles.dept_name = req.body.dept_name;
      roles.inserted_date = req.body.inserted_date;
      roles.updated_date = req.body.updated_date;
      roles.inserted_by = req.body.inserted_by;
      roles.updated_by = req.body.updated_by;
      roles.is_active_flag = req.body.is_active_flag;
      roles
        .save()
        .then(() => res.json("Role Updated..."))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// API to list the roles with filters active and inactive

router.get("/activerole", async (req, res) => {
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
});


module.exports = router;