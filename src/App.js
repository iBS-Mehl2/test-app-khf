import { Button, Typography } from "@mui/material";
import Component from "./components/Component";

function App() {
  const notATroll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  return (
    <>
      <Typography variant="h1" gutterBottom>
        Das ist ein Test! :)
      </Typography>
      <Component></Component>
      <Button href={notATroll}>klick me</Button>
    </>
  );
}

export default App;
