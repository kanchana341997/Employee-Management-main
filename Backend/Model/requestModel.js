// requestModel.js
// class GetRoleByIdRequest {
//     constructor(role_id) {
//       this.role_id = role_id;
//     }
//   }
  
  class UpdateRoleByIdRequest {
    constructor(role_name, dept_id, dept_name, updated_by) {
     // this.role_name = "Javitha";
     // this.dept_id = 179;
     // this.dept_name = "EC CS";
     // this.updated_by = "Kanchana";
     this.role_name = role_name;
     this.dept_id = dept_id;
     this.dept_name = dept_name;
     this.updated_by = updated_by;
    }
  }
  
  export { UpdateRoleByIdRequest };
  
