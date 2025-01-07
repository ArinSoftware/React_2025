function EmployeeItem({ employee, onEditClick }) {

  function handleEditClick() {
    onEditClick(employee)
  }

    return (
      <tr>
        <td>
          <span className="custom-checkbox">
            <input type="checkbox" id="checkbox1" name="options[]" value="1" />
            <label htmlFor="checkbox1"></label>
          </span>
        </td>
        <td>{employee.name}</td>
        <td>{employee.email}</td>
        <td>{employee.address}A</td>
        <td>{employee.phone}</td>
        <td>{employee.gender}</td>
        <td>{employee.department}</td>
        <td>
          <a onClick={handleEditClick} className="edit"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
          <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
      </tr>
    )
  }

  export default EmployeeItem;