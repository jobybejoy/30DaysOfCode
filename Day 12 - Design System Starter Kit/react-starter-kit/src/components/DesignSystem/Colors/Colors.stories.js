import React from "react";
import Grid from "../../UIContainers/Grid";
import "./Colors.story.css";

import { getCSSCustomPropIndexForColors } from "../../../utils/colors";

export default { title: "Colors" };

const AppContainer = (props) => (
  <div className="App">
    <div className="storybook__page__container storybook__start">
      <h1 style={{ padding: "32px 0" }}>Colors</h1>
      {props.children}
    </div>
  </div>
);

const ColorElement = (props) => {
  const { name, color } = props;
  return (
    <div className="color__container">
      <div className="color__item" style={{ backgroundColor: color }}></div>
      <h5 className="color__label">{name}</h5>
    </div>
  );
};

export const projectColors = () => {
  const colors = getCSSCustomPropIndexForColors();

  return (
    <AppContainer>
      <Grid
        col_template="1fr 1fr 1fr"
        gap="16px"
        customStyles={{ width: "100%" }}
      >
        {colors.map(([property, value]) => {
          const propertyName = property
            .slice(property.indexOf("--page-") + 7, property.length)
            .split("-")
            .map((word) => {
              if (word === "cta") return "CTA";
              else return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(" ");
          return <ColorElement name={propertyName} color={value} />;
        })}
      </Grid>
    </AppContainer>
  );
};

// export const Paragraph = () => (
//   <div className="App">
//     <div className="storybook__page__container storybook__start solo">
//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
//         consequuntur inventore minima repellat eum ullam ab rem distinctio,
//         animi atque id reprehenderit veniam delectus illum saepe. Reprehenderit
//         officiis quo non!
//       </p>
//     </div>
//   </div>
// );
