import EmployeeItem from "./EmployeeItem";

function EmployeeList({ employees, onEditClick }) {
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>
              <span className="custom-checkbox">
                <input type="checkbox" id="selectAll" />
                <label htmlFor="selectAll"></label>
              </span>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map(employee => (
              <EmployeeItem 
                key={employee.id} 
                employee={employee} 
                onEditClick={onEditClick}
                />
            ))
          }
        </tbody>
      </table>
    )
  }

  export default EmployeeList;