import React from "react";
import Input from "../Input";
import { InputWithLabel } from "../Input";

export default { title: "Input" };

const AppContainer = (props) => (
  <div className="App">
    <div className="storybook__page__container storybook__center solo">
      {props.children}
    </div>
  </div>
);

export const defaultInput = () => (
  <AppContainer>
    <Input type="text" />
  </AppContainer>
);

export const inputWithLabel = () => (
  <AppContainer>
    <InputWithLabel type="text" label="First Name" name="first-name" />
  </AppContainer>
);
