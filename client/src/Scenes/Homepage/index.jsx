import React from "react";
import Navbar from "../navbar";
import { Box } from "@mui/system";
import UserWidget from "../widgets/UserWidgets";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
const Homepage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, pitcurePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} pitcurePath={pitcurePath} />
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
