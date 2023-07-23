const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    role_id: {type: Number, required: true},
  role_name: { type: String, required: true },
  dept_id: {type: Number, required: true},
  dept_name: { type: String, required: true },
  inserted_date: { type: Date, required: true },
  updated_date: { type: Date, required: true },
  inserted_by: { type: String, required: true },
  updated_by: { type: String, required: true },
  is_active_flag: { type: Boolean, required: true }
});

module.exports = mongoose.model("role", RoleSchema);