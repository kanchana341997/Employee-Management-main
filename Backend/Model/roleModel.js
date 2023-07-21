import { Schema, model } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import mongoose from 'mongoose';

// Assuming you have already created a mongoose connection
autoIncrement.initialize(mongoose.connection);

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

// Initialize auto-increment for the role_id field
RoleSchema.plugin(autoIncrement.plugin, {
    model: 'role',
    field: 'role_id',
    startAt: 1,
    incrementBy: 1,
  });
  
  const role = model('role', RoleSchema);
  
  export default role;
  