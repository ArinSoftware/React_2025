export default function Pagination({currentPage, totalPages}) {

    console.log("currentPage", currentPage);
    console.log("totalPages", totalPages);

  return (
    <ul className="pagination">
    <li className="page-item disabled"><a href="#">Previous</a></li>
    <li className="page-item"><a href="#" className="page-link">1</a></li>
    <li className="page-item"><a href="#" className="page-link">2</a></li>
    <li className="page-item active"><a href="#" className="page-link">3</a></li>
    <li className="page-item"><a href="#" className="page-link">4</a></li>
    <li className="page-item"><a href="#" className="page-link">5</a></li>
    <li className="page-item"><a href="#" className="page-link">Next</a></li>
</ul>
  )
}

