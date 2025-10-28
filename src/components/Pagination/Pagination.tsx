import "./Pagination.scss";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="pagination-btn">
        <ArrowLeft size={16} />
        <span>Previous</span>
      </button>

      <div className="pagination-pages">
        <span className="page active">1</span>
        <span className="page">2</span>
        <span className="page">3</span>
        <span className="dots">...</span>
        <span className="page">8</span>
        <span className="page">9</span>
        <span className="page">10</span>
      </div>

      <button className="pagination-btn">
        <span>Next</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
