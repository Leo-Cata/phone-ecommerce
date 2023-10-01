import { Box, Typography } from "@mui/material";
import { BasicInfoProps } from "../../types/types";

const BasicInfo = ({ os, storage, dimension, release }: BasicInfoProps) => {
  // receive various basic information about the phone through props

  // delete the word "Release" from the release prop so it only displays date
  const onlyReleaseDate: string = release.replace(/Released /i, "");

  return (
    <Box>
      <Typography
        variant="h4"
        textAlign={"center"}
        className="pb-2 font-montserrat"
      >
        Basic Information
      </Typography>
      <Typography variant="subtitle1" className="font-hyperlegible">
        <span className="font-montserrat font-semibold">OS:</span>{" "}
        {os ? os : "Not Available"}
      </Typography>
      <Typography variant="subtitle1" className="font-hyperlegible">
        <span className="font-montserrat font-semibold">Storage:</span>{" "}
        {storage ? storage : "Not Available"}
      </Typography>
      <Typography variant="subtitle1" className="font-hyperlegible">
        <span className="font-montserrat font-semibold">Dimensions:</span>{" "}
        {dimension ? dimension : "Not Available"}
      </Typography>
      <Typography variant="subtitle1" className="font-hyperlegible">
        <span className="font-montserrat font-semibold">Release Date:</span>{" "}
        {onlyReleaseDate ? onlyReleaseDate : "Not Available"}
      </Typography>
    </Box>
  );
};

export default BasicInfo;
