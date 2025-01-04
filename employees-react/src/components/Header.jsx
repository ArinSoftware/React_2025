function Header({ onOpenAddModal }) {
    return (
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Manage <b>Employees</b></h2>
          </div>
          <div className="col-sm-6">
            <button onClick={onOpenAddModal} className="btn btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></button>
            <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>
          </div>
        </div>
      </div>
    )
  }

  export default Header;