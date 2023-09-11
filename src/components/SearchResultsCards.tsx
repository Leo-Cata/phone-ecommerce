import { searchDataProps } from "../types/types";
import CustomCard from "./CustomCard";
import { Grid } from "@mui/material";

const SearchResultsCards = ({ searchResults }: searchDataProps) => {
  console.log(searchResults);
  return (
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
  );
};

export default SearchResultsCards;
