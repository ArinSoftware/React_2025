import { useState } from "react";

import Header from "./components/Header";
import AddEmployeeModal from "./components/AddEmployeeModal";
import EditEmployeeModal from "./components/EditModalEmployee";
import EmployeeList from "./components/EmployeeList";

function App() {

    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "David Hardy",
            email: "thomashardy@mail.com",
            address: "89 Chiaroscuro Rd, Portland, USA",
            phone: "(171) 555-2222"
        }
    ]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    function addEmployee(newEmployee) {
        setEmployees(prevEmployees => [
            ...prevEmployees,
            {
                ...newEmployee,
                id: Math.max(...prevEmployees.map(emp => emp.id), 0) + 1
            }
        ])
    }

    function editClick(employee) {
        setIsEditModalOpen(true);
        setSelectedEmployee(employee)
    }

    

    return (
        <div className="container">
            <div className="table-wrapper">
                <Header onOpenAddModal={() => setIsAddModalOpen(true)} />
                <EmployeeList employees={employees} onEditClick={editClick} />
                <AddEmployeeModal isOpen={isAddModalOpen} onCloseAddModal={() => setIsAddModalOpen(false)} onAddEmployee={addEmployee} />
                <EditEmployeeModal 
                    isOpen={isEditModalOpen} 
                    employee={selectedEmployee} 
                    onCloseEditModal={ () => {
                        setIsEditModalOpen(false);
                        setSelectedEmployee(null);
                    }}
                    />
            </div>
        </div>
    )

}

export default App;