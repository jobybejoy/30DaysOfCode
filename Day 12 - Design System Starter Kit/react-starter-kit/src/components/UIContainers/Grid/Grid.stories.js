import React from "react";
import Grid from "../Grid";
import { GridEl } from "../Grid";

export default { title: "Grid" };

const AppContainer = (props) => (
  <div className="App">
    <div className="storybook__page__container storybook__center solo">
      {props.children}
    </div>
  </div>
);

export const defaultGrid = () => (
  <AppContainer>
    <Grid
      gap="10px"
      nofCols="4"
      nofRows="3"
      customStyles={{ backgroundColor: "blue" }}
    >
      {["1", "2", "3", "4", "5", "6", "7"].map((el) => (
        <GridEl></GridEl>
      ))}
    </Grid>
  </AppContainer>
);

// export const primaryButton = () => (
//   <AppContainer>
//     <Button className="btn--primary">Primary Button</Button>
//   </AppContainer>
// );
