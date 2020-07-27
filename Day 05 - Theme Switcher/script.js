let currentTheme = {
  id: "light",
};

const themes = [
  {
    id: "light",
    name: "Light Theme",
    colors: [
      {
        property: "background-color",
        value: "#eee",
        label: "Background Primary",
      },
      { property: "color", value: "#333", label: "Font Primary" },
    ],
  },
  {
    id: "dark",
    name: "Dark Theme",
    colors: [
      {
        property: "background-color",
        value: "#333",
        label: "Background Primary",
      },
      { property: "color", value: "#eee", label: "Font Primary" },
    ],
  },
  {
    id: "red",
    name: "Red Theme",
    colors: [
      {
        property: "background-color",
        value: "#fe9f9f",
        label: "Background Primary",
      },
      { property: "color", value: "red", label: "Font Primary" },
    ],
  },
  {
    id: "blue",
    name: "Blue Theme",
    colors: [
      {
        property: "background-color",
        value: "#071383",
        label: "Background Primary",
      },
      { property: "color", value: "#b0aad6", label: "Font Primary" },
    ],
  },
];

function displayThemes(themes) {
  const html = themes
    .map((theme) => {
      const { colors } = theme;

      const swatchHTML = generateSwatchHTML(colors);
      const swatchCSS = generateSwatchCSS(colors);

      return `<div class="grid__item card" style="${swatchCSS}" id="${theme.id}">
              <h2 class="card__title">${theme.name}</h2>
              <div class="card__colors__container">
              ${swatchHTML}
              </div>
            </div>`;
    })
    .join("");

  const container = document.querySelector(".grid__container");
  container.insertAdjacentHTML("beforeend", html);
}

function generateSwatchHTML(colors) {
  return colors
    .map((color) => {
      return `<div class="card__colors__item">
                <div class="card__colors__swatch" style="background-color:${color.value}"></div>
               <div class="card__colors__label">${color.label}</div>
             </div>`;
    })
    .join("");
}

function generateSwatchCSS(colors) {
  return colors
    .map((color) => {
      return `${color.property}:${color.value}`;
    })
    .join(";");
}

function findThemeById(id, themes) {
  return themes.find((el) => el.id == id);
}

function switchThemeTo(newTheme) {
  console.log(newTheme);
  const { colors } = newTheme;
  colors.map((color) => {
    document.documentElement.style.setProperty(
      `--page-${color.property}`,
      color.value
    );
  });
}

function cardClickCallback(event) {
  const id = event.currentTarget.id;
  console.log(id);
  const newTheme = findThemeById(id, themes);
  switchThemeTo(newTheme);
  currentTheme.id = id;
  setActive();
}

displayThemes(themes);
setActive();
const cards = document.querySelectorAll(".card");
cards.forEach((el) => {
  el.addEventListener("click", cardClickCallback);
});

function setActive() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((el) => {
    console.log(el);
    if (el.id == currentTheme.id) {
      el.classList.add("selected");
    } else {
      if (el.classList.contains("selected")) {
        el.classList.remove("selected");
      }
    }
  });
}
