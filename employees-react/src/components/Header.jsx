function Header({ onOpenAddModal, onDeleteSelected }) {
    return (
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Manage <b>Employees</b></h2>
          </div>
          <div className="col-sm-6">
            <button onClick={onOpenAddModal} className="btn btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></button>
            <button onClick={onDeleteSelected} className="btn btn-danger"><i className="material-icons">&#xE15C;</i> <span>Delete</span></button>
          </div>
        </div>
      </div>
    )
  }

  export default Header;