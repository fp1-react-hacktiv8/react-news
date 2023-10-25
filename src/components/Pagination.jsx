import PropTypes from "prop-types";
import { useEffect } from "react";
const Pagination = ({ currentPage, maxPages, onPageChange }) => {
  Pagination.propTypes = {
    currentPage: PropTypes.number,
    maxPages: PropTypes.number,
    onPageChange: PropTypes.func,
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="join">
      <button
        className="join-item btn"
        disabled={currentPage === 1}
        onClick={handlePreviousClick}
      >
        « Previous
      </button>
      <span className="join-item btn">{currentPage}</span>
      <button
        className="join-item btn"
        disabled={currentPage === Math.ceil(maxPages / 9)}
        onClick={handleNextClick}
      >
        Next »
      </button>
    </div>
  );
};

export default Pagination;
