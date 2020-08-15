import React from "react";
// import Button from "../Button";
// import "../../../src/containers/App/App.css";
// import "../../../src/storybook.style.css";

export default { title: "Typography" };

const AppContainer = (props) => (
  <div className="App">
    <div className="storybook__page__container storybook__start solo">
      {props.children}
    </div>
  </div>
);

export const Headings = () => (
  <AppContainer>
    <h1>Heading 01</h1>
    <h2>Heading 02</h2>
    <h3>Heading 03</h3>
    <h4>Heading 04</h4>
    <h5>Heading 05</h5>
    <h6>Heading 06</h6>
  </AppContainer>
);

export const Paragraph = () => (
  <AppContainer>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
      consequuntur inventore minima repellat eum ullam ab rem distinctio, animi
      atque id reprehenderit veniam delectus illum saepe. Reprehenderit officiis
      quo non!
    </p>
  </AppContainer>
);
