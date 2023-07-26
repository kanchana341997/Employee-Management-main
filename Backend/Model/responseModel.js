// responseModel.js
class RoleResponse {
    constructor(role_id, role_name, dept_id, dept_name, inserted_date, updated_date, inserted_by, updated_by, is_active_flag) {
      this.role_id = role_id;
      this.role_name = role_name;
      this.dept_id = dept_id;
      this.dept_name = dept_name;
      this.inserted_date = inserted_date;
      this.updated_date = updated_date;
      this.inserted_by = inserted_by;
      this.updated_by = updated_by;
      this.is_active_flag = is_active_flag;
    }
  }
  
  export { RoleResponse };
  