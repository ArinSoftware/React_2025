import { useEffect, useState, useMemo } from "react";

import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import EmployeeModal from "./components/EmployeeModal";
import Pagination from "./components/Pagination";

function App() {

    const [employees, setEmployees] = useState(() => {
        const savedEmployees = localStorage.getItem("employees");
        return savedEmployees ? JSON.parse(savedEmployees) : [];
    });
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    const currentEmployees = useMemo(() => {
        const indexOfLastEmployee = currentPage * itemsPerPage;
        const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
        return employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    }, [employees, currentPage])


    useEffect(() => {
        localStorage.setItem("employees", JSON.stringify(employees));
    }, [employees])

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
            setSelectedEmployees([]);
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
            );
            setSelectedEmployees([]);
        }
    }

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
    }


    return (
        <div className="container">
            <div className="table-wrapper">
                <Header
                    onOpenAddModal={() => setIsAddModalOpen(true)}
                    onDeleteSelected={deleteSelectedEmployees}
                />
                <EmployeeList
                    employees={currentEmployees}
                    onEditClick={editClick}
                    onDeleteClick={deleteClick}
                    selectedEmployees = {selectedEmployees}
                    setSelectedEmployees = {setSelectedEmployees}
                />
                <EmployeeModal 
                    mode="add"
                    isOpen={isAddModalOpen}
                    onClose={() => setIsAddModalOpen(false)}
                    onSubmit={addEmployee}
                />
                <EmployeeModal
                    mode="edit" 
                    isOpen={isEditModalOpen}
                    employee={selectedEmployee}
                    onClose={closeEditModal}
                    onSubmit={editEmployee}
                />
                <div className="clearfix">
                    <div className="hint-text">Showing <b>{currentEmployees.length}</b> out of <b>{employees.length}</b> entries</div>
                    <Pagination 
                        currentPage={currentPage}
                        totalPages={Math.ceil(employees.length / itemsPerPage)}
                        onPageChange={handlePageChange}
                    />
                </div>

            </div>
        </div>
    )

}

export default App;