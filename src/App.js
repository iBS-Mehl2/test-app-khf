import { Button, Typography } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Component from "./components/Component";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainPage></MainPage>
      </BrowserRouter>
    </>
  );
}

export default App;
