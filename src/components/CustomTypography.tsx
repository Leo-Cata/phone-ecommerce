import { Box, Typography } from "@mui/material";
import { CustomTypographyProps } from "../types/types";

const CustomTypography = ({ displayedText }: CustomTypographyProps) => {
  return (
    <Box justifyContent={"center"} display={"flex"}>
      <Typography variant="h3" className="my-10 text-center">
        {displayedText}
      </Typography>
    </Box>
  );
};

export default CustomTypography;
