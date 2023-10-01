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

    // cant have MUIs and React-routers Link because both are a tags, link will be rendered as a react-router Link maintaining the MUIs styles
    <>
      <Link
        underline="none"
        className="cursor-pointer"
        key={customKey}
        component={RouterLink}
        to={`/${slug}`}
      >
        <Stack
          direction={"row"}
          className="w-[350px] transform duration-100 hover:scale-105"
          justifyContent={"space-between"}
        >
          <Typography variant="h6" className="font-hyperlegible">
            {firstText}
          </Typography>
          <Typography variant="h6" className="font-hyperlegible">
            {SecondText}
          </Typography>
        </Stack>
      </Link>
      <Divider />
    </>
  );
};

export default PhonesAndRatings;
