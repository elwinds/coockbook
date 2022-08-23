import * as React from "react";
import classes from "./Pagination.module.css";

type Props = {
  activePage: number;
  countPages: number;
  changePage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: React.FC<Props> = (props) => {
  const { activePage, countPages, changePage } = props;

  const pageNumber = [];

  for(let i = 1; i <= countPages; i++){
    pageNumber.push(i)
  };


  return (
    <div className={classes.pagination_container}>
      {pageNumber.map((item) => {
        return (
          <button key={item} className={item === activePage ? classes.activeButton : ""} onClick={() => changePage(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
