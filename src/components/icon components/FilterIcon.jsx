import {useState} from "react";

const FilterIcon = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  return (
    <>
      <span
        className="material-icons filter-icon icon-hover pd-xs br-full cursor-pointer"
        onClick={() => setIsFilterVisible((prev) => !prev)}
      >
        tune
      </span>
      {isFilterVisible && (
        <div className="filter-ctn br-md pd-sm">
          <div className="flex-align-center just-con-sp-bt">
            <h4>Filter by</h4>
            <span className="cursor-pointer">Clear all</span>
          </div>
          <div className="filter-section flex-align-center">
            <span>Priority:</span>
            <span className="fs-14 cursor-pointer filter-label">Low</span>
            <span className="fs-14 cursor-pointer filter-label">Medium</span>
            <span className="fs-14 cursor-pointer filter-label">High</span>
          </div>
          <div className="filter-section flex-align-center">
            <span>Labels:</span>
            <span className="fs-14 cursor-pointer filter-label">React</span>
            <span className="fs-14 cursor-pointer filter-label">Node</span>
          </div>
          <div className="filter-section flex-align-center">
            <p>Sor by date</p>
            <span className="fs-14 cursor-pointer filter-label">Newest</span>
            <span className="fs-14 cursor-pointer filter-label">Oldest</span>
          </div>
        </div>
      )}
    </>
  );
};

export {FilterIcon};
