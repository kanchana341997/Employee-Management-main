
import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  role_id: {
    type: Number, // If using a custom role_id as a string
    required: true,
    unique: true, // Set as unique identifier
  },
  role_name: {
    type: String,
    required: true,
  },
  dept_id: {
    type: Number,
    required: true,
  },
  dept_name: {
    type: String,
    required: true,
  },
  updated_by: {
    type: String,
    required: true,
  },
  inserted_by: {
    type: String,
    required: true,
  },
  is_active_flag: {
    type: Boolean,
    default: true,
  },
  inserted_date: {
    type: Date,
    default: Date.now,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

const Role = mongoose.model("Role", roleSchema);

export default Role;