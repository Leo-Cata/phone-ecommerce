import { searchDataProps } from "../types/types";
import CustomCard from "./CustomCard";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import CustomPageButtonGroup from "./CustomPageButtonGroup";

const SearchResultsCards = ({ searchResults }: searchDataProps) => {
  //keep track of the current page
  const [currentPage, setCurrentPage] = useState<number>(1);
  //set the number of items to be displayed per page
  const itemsPerPage = 20;

  //calculate the start and end index of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  //slice the data fetched to display the itemsPerPage number of items
  const currentItems = searchResults.slice(startIndex, endIndex);

  //gets pageNumber from the CustomPageButtonGroup and sets the current page to that button clicked
  const handlePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Typography></Typography>
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
      <CustomPageButtonGroup
        handlePage={handlePage}
        numberOfPages={searchResults.length / 20}
        page={currentPage}
      />
    </>
  );
};

export default SearchResultsCards;
