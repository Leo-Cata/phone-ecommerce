import { Grid } from "@mui/material";
import { LatestPhonesCardsProps } from "../types/types";
import CustomCard from "./CustomCard";

const LatestPhonesCards = ({ latestPhones }: LatestPhonesCardsProps) => {
  // gets latest phones data and maps through them to display on cards
  return (
    <Grid container>
      {/* 
      index used because in the case of 2 phones being repeated, keys wont be an issue
      this error just ocurred
      */}
      {latestPhones.map((phone, index) => (
        <CustomCard
          key={phone.slug + index}
          customKey={phone.slug}
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

export default LatestPhonesCards;
