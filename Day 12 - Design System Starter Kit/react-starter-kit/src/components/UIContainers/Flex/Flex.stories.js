import React from "react";
import Flex, { FlexEl } from "../Flex";

export default { title: "Flex" };

const AppContainer = (props) => (
  <div className="App">
    <div className="storybook__page__container storybook__center solo">
      {props.children}
    </div>
  </div>
);

export const defaultFlex = () => (
  <AppContainer>
    <Flex flexDirection="row">
      {["1", "2", "3", "4", "5", "6", "7"].map((el) => (
        <FlexEl style={{ width: "400px" }}></FlexEl>
      ))}
    </Flex>
  </AppContainer>
);
