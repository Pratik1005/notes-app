import {useState} from "react";
import {useNotes} from "../../context";

const allPriority = ["Low", "Medium", "High"];
const sortBy = ["Newest", "Oldest"];

const FilterIcon = ({filterData, setFilterData}) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const {notesState} = useNotes();

  const isFilterActive = (item, currentCategory) => {
    if (currentCategory === item) {
      return "filter-select";
    }
  };

  const handlePriorityFilter = (priority) => {
    setFilterData((prev) => ({...prev, currentPriority: priority}));
  };

  const handleSortFilter = (sort) => {
    setFilterData((prev) => ({...prev, sortBy: sort}));
  };

  const handleClearFilter = () => {
    setFilterData(() => ({
      currentPriority: "",
      sortBy: "",
    }));
  };
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
            <span className="cursor-pointer" onClick={handleClearFilter}>
              Clear all
            </span>
          </div>
          <div className="filter-section flex-align-center">
            <span>Priority:</span>
            {allPriority.map((item, index) => (
              <span
                key={index}
                className={`fs-14 cursor-pointer filter-label ${isFilterActive(
                  item,
                  filterData.currentPriority
                )}`}
                onClick={() => handlePriorityFilter(item)}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="filter-section flex-align-center">
            <p>Sor by date:</p>
            {sortBy.map((item, index) => (
              <span
                key={index}
                className={`fs-14 cursor-pointer filter-label ${isFilterActive(
                  item,
                  filterData.sortBy
                )}`}
                onClick={() => handleSortFilter(item)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export {FilterIcon};
