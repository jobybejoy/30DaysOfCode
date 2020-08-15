import React from "react";
import Button from "../Button";

export default { title: "Button" };

const AppContainer = (props) => (
  <div className="App">
    <div className="storybook__page__container storybook__center solo">
      {props.children}
    </div>
  </div>
);

export const defaultButton = () => (
  <AppContainer>
    <Button>Default Button</Button>
  </AppContainer>
);

export const primaryButton = () => (
  <AppContainer>
    <Button className="btn--primary">Primary Button</Button>
  </AppContainer>
);

export const roundedButton = () => (
  <AppContainer>
    <Button className="btn--primary btn--rounded">
      Primary Rounded Button
    </Button>
  </AppContainer>
);

export const outlinedButton = () => (
  <AppContainer>
    <Button className="btn--outline">Outline Button</Button>
  </AppContainer>
);

export const disabledButton = () => (
  <AppContainer>
    <Button className="btn--outline btn--primary" disabled>
      Disabled Button
    </Button>
  </AppContainer>
);
