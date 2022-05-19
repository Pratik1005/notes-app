import {useState} from "react";
import {useNotes} from "../../context";

const allPriority = ["Low", "Medium", "High"];

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

  const handleLabelFilter = (label) => {
    setFilterData((prev) => ({...prev, currentLabel: label}));
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
            <span className="cursor-pointer">Clear all</span>
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
            <span>Labels:</span>
            {notesState.labels.map((item) => (
              <span
                key={item.id}
                className={`fs-14 cursor-pointer filter-label ${isFilterActive(
                  item.label,
                  filterData.currentLabel
                )}`}
                onClick={() => handleLabelFilter(item.label)}
              >
                {item.label}
              </span>
            ))}
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
