import { searchDataProps } from "../types/types";
import CustomCard from "./CustomCard";
import { Grid } from "@mui/material";
// import { useState } from "react";

const SearchResultsCards = ({ searchResults }: searchDataProps) => {
  // //TODO: display skeleton and error message if no phone was found
  // //keep track of the current page
  // const [currentPage, setCurrentPage] = useState(1);

  // //set the number of items to be displayed per page
  // const itemsPerPage = 20;

  // //calculate the start and end index of the current page
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  // //slice the data fetched to display the itemsPerPage number of items
  // const currentItems = searchResults.slice(startIndex, endIndex);

  // const loadNextPage = () => {
  //   setCurrentPage((prevPage) => prevPage + 1);
  // };
  // const loadPrevPage = () => {
  //   setCurrentPage((prevPage) => prevPage - 1);
  // };

  return (
    <>
      <h1>{searchResults.length} matching results</h1>
      <Grid container>
        {searchResults.map((phone) => (
          <CustomCard
            key={phone._id}
            customKey={phone._id}
            linkTo={`/${phone.slug}`}
            image={phone.image}
            alt={`${phone.phone_name}`}
            title={phone.phone_name}
            text={null}
          />
        ))}
      </Grid>
      {/* <button onClick={loadNextPage}>asd </button>
      <button onClick={loadPrevPage} className="text-red-800">
        asd
      </button> */}
    </>
  );
};

export default SearchResultsCards;
