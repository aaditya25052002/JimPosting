import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../Components/FlexBetween";
import WidgetWrapper from "../../Components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://ifbb-academy.com/wp-content/uploads/2020/05/master-bb.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Whey Protien</Typography>
        <Typography color={medium}>Protein Powder</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
         Best supplements for body building.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;