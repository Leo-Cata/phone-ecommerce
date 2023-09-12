import { searchDataProps } from "../types/types";
import CustomCard from "./CustomCard";
import { Grid } from "@mui/material";
import { useState } from "react";
import CustomPagination from "./CustomPagination";
import CustomTypography from "./CustomTypography";

const SearchResultsCards = ({ searchResults }: searchDataProps) => {
  //keep track of the current page
  const [currentPage, setCurrentPage] = useState<number>(1);
  //set the number of items to be displayed per page
  const itemsPerPage = 20;

  //calculates the number of pages, then rounds up to the next integer with Math.ceil
  const numbSearchPages = Math.ceil(searchResults.length / itemsPerPage);

  //calculate the start and end index of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  //slice the data fetched to display the itemsPerPage number of items
  const currentItems = searchResults.slice(startIndex, endIndex);

  //gets pageNumber from the CustomPageButtonGroup and sets the current page to that button clicked
  const handlePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const textVariant = "h4";
  const displayedText = `${
    searchResults.length >= 100
      ? `${searchResults.length} number of matches, try a more specific search.`
      : `${searchResults.length} number of matches.`
  }`;
  return (
    <>
      <CustomTypography
        textVariant={textVariant}
        displayedText={displayedText}
      />
      <Grid container>
        {currentItems.map((phone) => (
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
      <CustomPagination
        numberOfPages={numbSearchPages}
        currentPage={currentPage}
        handlePage={handlePage}
      />
    </>
  );
};

export default SearchResultsCards;
