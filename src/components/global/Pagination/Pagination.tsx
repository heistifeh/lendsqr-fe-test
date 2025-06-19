import React, { useState } from "react";
import { Button } from "../../interface";
import classnames from "classnames";
import { CaretLeft, CaretRight } from "../../icons";
import { getPageSizeOptions } from "../../../lib/data/getSelectOptions";
import Select from "../../interface/Select";
interface PaginationProps {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (pageNumber: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [numPages, setNumPages] = useState(Math.ceil(totalItems / pageSize));

  const handleClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= numPages) {
      onPageChange(pageNumber);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < numPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let dotsStart = false;
    let dotsEnd = false;

    for (let i = 1; i <= numPages; i++) {
      if (
        i === 1 ||
        i === numPages ||
        (i >= currentPage - 2 && i <= currentPage + 2)
      ) {
        pageNumbers.push(
          <li className="space" key={i}>
            <Button
              className={classnames("number", { current: i === currentPage })}
              onClick={() => handleClick(i)}
              variant="naked"
            >
              {i}
            </Button>
          </li>
        );
      } else if (i < currentPage - 2 && !dotsStart) {
        pageNumbers.push(
          <li className="space" key="dots-start">
            <span>...</span>
          </li>
        );
        dotsStart = true;
      } else if (i > currentPage + 2 && !dotsEnd) {
        pageNumbers.push(
          <li className="space" key="dots-end">
            <span>...</span>
          </li>
        );
        dotsEnd = true;
      }
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <div className="pagination-select">
        <span>Showing</span>
        <Select
          variant="pagination"
          options={getPageSizeOptions()}
          onChange={(e) => onPageSizeChange(e.target.value)}
        />
        <span>out of 100</span>
      </div>
      <ul>
        <li>
          <Button
            style={{ marginRight: "0.8rem" }}
            onClick={handlePrevClick}
            variant="pagination"
            disabled={currentPage === 1}
          >
            <CaretLeft />
          </Button>
        </li>
        {renderPageNumbers()}
        <li>
          <Button
            style={{ marginLeft: "0.8rem" }}
            onClick={handleNextClick}
            variant="pagination"
            disabled={currentPage === numPages}
          >
            <CaretRight />
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
