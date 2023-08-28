import { Box, Typography } from "@mui/material";
import { CustomTypographyProps } from "../types/types";

const CustomTypography = ({
  displayedText,
  textVariant,
}: CustomTypographyProps) => {
  return (
    <Box justifyContent={"center"} display={"flex"}>
      <Typography variant={textVariant} className="my-10 text-center">
        {displayedText}
      </Typography>
    </Box>
  );
};

export default CustomTypography;
