import { Divider, Link, Stack, Typography } from "@mui/material";
import { RatingsProps } from "../types/types";
import { Link as RouterLink } from "react-router-dom";

const PhonesAndRatings = ({
  firstText,
  SecondText,
  slug,
  customKey,
}: RatingsProps) => {
  return (
    // modular component to display links for phones liked by fans/interest
    <>
      <Link underline="none" className="cursor-pointer" key={customKey}>
        <RouterLink to={`/${slug}`}>
          <Stack
            direction={"row"}
            className="w-[350px] transform duration-100 hover:scale-105"
            justifyContent={"space-between"}
          >
            <Typography variant="h6">{firstText}</Typography>
            <Typography variant="h6">{SecondText}</Typography>
          </Stack>
        </RouterLink>
      </Link>
      <Divider />
    </>
  );
};

export default PhonesAndRatings;
