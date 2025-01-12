import { useState } from "react";

import Header from "./components/Header";
import AddEmployeeModal from "./components/AddEmployeeModal";
import EditEmployeeModal from "./components/EditEmployeeModal";
import EmployeeList from "./components/EmployeeList";

function App() {

    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "David Hardy",
            email: "thomashardy@mail.com",
            address: "89 Chiaroscuro Rd, Portland, USA",
            phone: "(171) 555-2222"
        },
        {
            id: 2,
            name: "Ricardo Quaresma",
            email: "ricody@mail.com",
            address: "89 Chiaroscuro Rd, Portland, USA",
            phone: "(171) 444-5555"
        }
    ]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedEmployees, setSelectedEmployees] = useState([]);

    function addEmployee(newEmployee) {
        setEmployees(prevEmployees => [
            ...prevEmployees,
            {
                ...newEmployee,
                id: Math.max(...prevEmployees.map(emp => emp.id), 0) + 1
            }
        ])
    }

    function editEmployee(updatedEmployee) {
        setEmployees(prevEmployees =>
            prevEmployees.map(emp =>
                emp.id === updatedEmployee.id ? updatedEmployee : emp
            )
        )
    }

    function editClick(employee) {
        setIsEditModalOpen(true);
        setSelectedEmployee(employee)
    }

    function deleteClick(employee) {
        const confirmed = window.confirm("Are you sure you want to deletre this employee?");

        if (confirmed) {
            setEmployees(prevEmployees =>
                prevEmployees.filter(emp => emp.id !== employee.id)
            );
        }
    }

    function closeEditModal() {
        setIsEditModalOpen(false);
        setSelectedEmployee(null);
    }

    function deleteSelectedEmployees() {
        const confirmed = window.confirm("Are you sure you want to delete the employees?");

        if (confirmed) {
            setEmployees(prevEmployees =>
                prevEmployees.filter(emp => !selectedEmployees.includes(emp.id))
            )
        }
    }


    return (
        <div className="container">
            <div className="table-wrapper">
                <Header
                    onOpenAddModal={() => setIsAddModalOpen(true)}
                    onDeleteSelected={deleteSelectedEmployees}
                />
                <EmployeeList
                    employees={employees}
                    onEditClick={editClick}
                    onDeleteClick={deleteClick}
                    selectedEmployees = {selectedEmployees}
                    setSelectedEmployees = {setSelectedEmployees}
                />
                <AddEmployeeModal isOpen={isAddModalOpen} onCloseAddModal={() => setIsAddModalOpen(false)} onAddEmployee={addEmployee} />
                <EditEmployeeModal
                    isOpen={isEditModalOpen}
                    employee={selectedEmployee}
                    onCloseEditModal={closeEditModal}
                    onEditEmployee={editEmployee}
                />
            </div>
        </div>
    )

}

export default App;