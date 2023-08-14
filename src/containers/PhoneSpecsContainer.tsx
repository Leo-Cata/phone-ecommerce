import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getPhoneSpecs } from "../services/phoneApi";
import { PhoneSpecifications } from "../types/types";
import { Stack, Paper, Typography, Divider, IconButton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BasicInfo from "../components/PhoneSpecs/BasicInfo";
import PhoneSpecs from "../components/PhoneSpecs/PhoneSpecs";
import PhoneSpecsSkeleton from "../components/Skeletons/PhoneSpecsSkeleton";

const PhoneSpecsContainer = () => {
  //getting the slug from params
  const { phoneSlug } = useParams();

  //state to save the data fetched
  const [phoneSpecifications, setPhoneSpecifications] =
    useState<PhoneSpecifications | null>(null);
  console.log(
    "🚀 ~ file: PhoneSpecsContainer.tsx:16 ~ PhoneSpecsContainer ~ phoneSpecifications:",
    phoneSpecifications
  );

  //use effect to fetch
  useEffect(() => {
    const fetchPhoneSpecs = async () => {
      try {
        if (phoneSlug) {
          const response = await getPhoneSpecs(phoneSlug);
          //save as .data to avoid repeating in the rest of the code
          setPhoneSpecifications(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPhoneSpecs();
  }, [phoneSlug]);

  const [imageIndex, setImageIndex] = useState(0);
  const phoneImages = phoneSpecifications?.phone_images || [];

  const handleNextClick = () => {
    const newIndex = (imageIndex + 1) % phoneImages.length;
    setImageIndex(newIndex);
  };

  const handlePreviousClick = () => {
    const newIndex = (imageIndex - 1 + phoneImages.length) % phoneImages.length;
    setImageIndex(newIndex);
  };

  return (
    <>
      {phoneSpecifications ? (
        <Paper className="w-full bg-custom-secondary">
          <Stack spacing={2} className="p-4">
            <Typography variant="h3" textAlign={"center"}>
              {phoneSpecifications.brand} {""} {phoneSpecifications.phone_name}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={2}
            >
              <IconButton
                aria-label="previous"
                className="rotate-180 transform"
                onClick={handlePreviousClick}
              >
                <NavigateNextIcon />
              </IconButton>

              <img
                src={phoneSpecifications.phone_images[imageIndex]}
                alt={`${phoneSpecifications.phone_name} image`}
                className="h-[200px] w-full min-w-[220px] max-w-[500px] rounded-lg object-contain sm:h-[400px]"
              />
              <IconButton onClick={handleNextClick} aria-label="next">
                <NavigateNextIcon />
              </IconButton>
            </Stack>

            <Divider />

            {/* basic info component */}
            <BasicInfo
              // os is giving error when type is set to string so it is set to any in types.ts
              os={phoneSpecifications.os}
              storage={phoneSpecifications.storage}
              dimension={phoneSpecifications.dimension}
              release={phoneSpecifications.release_date}
            />
            <Divider />

            {/* specs component */}
            <PhoneSpecs specifications={phoneSpecifications.specifications} />
          </Stack>
        </Paper>
      ) : (
        <PhoneSpecsSkeleton />
      )}
    </>
  );
};

export default PhoneSpecsContainer;
