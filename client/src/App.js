import React, { useEffect } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { themeSettings } from "./theme";
import LoginPage from "./Scenes/LoginPage";
import Homepage from "./Scenes/Homepage";
const App = () => {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/home" element={<Homepage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
