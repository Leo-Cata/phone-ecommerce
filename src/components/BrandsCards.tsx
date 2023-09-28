import { Grid, TextField } from "@mui/material";
import { BrandsImages, PhoneBrands } from "../types/types";
import { useEffect, useState } from "react";
import { getBrandBySlug } from "../services/phoneApi";
import CustomCard from "./CustomCard";
import CustomCardsSkeleton from "./Skeletons/CustomCardsSkeleton";

const BrandsCards = ({ phoneBrands }: { phoneBrands: PhoneBrands[] }) => {
  const [phoneImages, setPhoneImages] = useState<string[]>();

  useEffect(() => {
    //from phoneBrands map through them and then save each brand slug in a new array
    const extractBrandSlugs = (Array: PhoneBrands[]): string[] =>
      Array.map((brand) => brand.brand_slug);
    const extractedSlugs = extractBrandSlugs(phoneBrands);

    //map through those brand slugs and for each one, fetch them, then return the image of the first element of each brand slug
    const fetchBrandsImgBySlug = async () => {
      try {
        const brandDataPromises = extractedSlugs.map(async (brandSlug) => {
          const response = await getBrandBySlug(brandSlug);
          return response.data.data.phones[0].image;
        });
        //wait for it to complete all the fetching and then save it in a state
        const phoneData = await Promise.all(brandDataPromises);
        setPhoneImages(phoneData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBrandsImgBySlug();
  }, [phoneBrands]);

  // code to manage searching for specific brands

  //state to save the word to search for
  const [searchQuery, setSearchQuery] = useState<string>("");

  //filters the phones brands returning only matches
  const filteredBrands = phoneBrands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //empty array to save imgs to keys that are equal to the brands names
  const brandsImages: BrandsImages = {};

  //if there are imgs, saves a key equal to the brand name and an img according to the index
  if (phoneImages) {
    phoneBrands.forEach((brand, index) => {
      brandsImages[brand.brand_name] = phoneImages[index];
    });
  }

  // code to manage searching for specific brands ends
  return (
    <>
      <div className="w-full pl-2">
        <TextField
          id="filled-Search-Input"
          variant="filled"
          label="Search for a brand"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Grid container>
        {/* if there are images, map through each of phone brands, else display a simple skeleton
      when the user types in the search box, it will filter and render only the matches, if the query becomes empty it will show all brands
      */}
        {phoneImages ? (
          searchQuery === "" ? (
            phoneBrands.map((brand) => (
              <CustomCard
                key={brand.brand_slug}
                customKey={brand.brand_slug}
                linkTo={`/brands/${brand.brand_slug}`}
                image={brandsImages[brand.brand_name]}
                alt={`${brand.brand_name}`}
                title={brand.brand_name}
                text={`Available Devices ${brand.device_count}`}
              />
            ))
          ) : (
            filteredBrands.map((brand) => (
              <CustomCard
                key={brand.brand_slug}
                customKey={brand.brand_slug}
                linkTo={`/brands/${brand.brand_slug}`}
                image={brandsImages[brand.brand_name]}
                alt={`${brand.brand_name}`}
                title={brand.brand_name}
                text={`Available Devices ${brand.device_count}`}
              />
            ))
          )
        ) : (
          <CustomCardsSkeleton />
        )}
      </Grid>
    </>
  );
};

export default BrandsCards;
