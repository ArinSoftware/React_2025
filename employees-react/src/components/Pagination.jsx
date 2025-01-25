export default function Pagination({ currentPage, totalPages, onPageChange }) {

    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }
    
    return (
        <ul className="pagination">

            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <a
                    className="page-link"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    style={{cursor: currentPage === 1 ? '' : 'pointer'}}
                >
                    Previous
                </a>
            </li>

            {
                pageNumbers.map(number => (
                    <li
                        key={number}
                        className={`page-item ${currentPage === number ? 'active' : ''}`}
                    >
                        <a
                            className="page-link"
                            onClick={() => onPageChange(number)}
                            style={{cursor: 'pointer'}}
                        >
                            {number}
                        </a>

                    </li>
                ))
            }

            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <a
                    className="page-link"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    style={{cursor: currentPage === totalPages ? '' : 'pointer'}}
                >
                    Next
                </a>
            </li>
        </ul>
    )
}

