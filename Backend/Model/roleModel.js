
import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  role_id: {type: Number, unique: true },
  role_name: { type: String},
  dept_id: {type: Number, unique: true },
  dept_name: { type: String },
  inserted_date: { type: Date, default: Date.now,  },
  updated_date: { type: Date, default: Date.now,  },
  inserted_by: { type: String},
  updated_by: { type: String },
  is_active_flag: { type: Boolean,  default: true  }
});

const Role = mongoose.model("Role", roleSchema);

export default Role;