const keyboard__container = document.querySelector(".keyboard__container");

const keyboard = [
  [
    { label: "`", code: "Backquote" },
    { label: "1", code: "Digit1" },
    { label: "2", code: "Digit2" },
    { label: "3", code: "Digit3" },
    { label: "4", code: "Digit4" },
    { label: "5", code: "Digit5" },
    { label: "6", code: "Digit6" },
    { label: "7", code: "Digit7" },
    { label: "8", code: "Digit8" },
    { label: "9", code: "Digit9" },
    { label: "0", code: "Digit0" },
    { label: "-", code: "Minus" },
    { label: "=", code: "Equal" },
    {
      label: "Backspace",
      code: "Backspace",
      class: ["width--3", "right--end"],
    },
  ],
  [
    { label: "Tab", code: "Tab", class: ["width--3", "left--end"] },
    { label: "Q", code: "KeyQ" },
    { label: "W", code: "KeyW" },
    { label: "E", code: "KeyE" },
    { label: "R", code: "KeyR" },
    { label: "T", code: "KeyT" },
    { label: "Y", code: "KeyY" },
    { label: "U", code: "KeyU" },
    { label: "I", code: "KeyI" },
    { label: "O", code: "KeyO" },
    { label: "P", code: "KeyP" },
    { label: "[", secondaryLabel: "{", code: "BracketLeft" },
    { label: `]`, secondaryLabel: "}", code: "BracketRight" },
    {
      label: `\\`,
      secondaryLabel: "|",
      code: "Backslash",
    },
  ],
  [
    { label: "CapsLk", code: "CapsLock", class: ["width--4", "left--end"] },
    { label: "A", code: "KeyA" },
    { label: "S", code: "KeyS" },
    { label: "D", code: "KeyD" },
    { label: "F", code: "KeyF" },
    { label: "G", code: "KeyG" },
    { label: "H", code: "KeyH" },
    { label: "J", code: "KeyJ" },
    { label: "K", code: "KeyK" },
    { label: "L", code: "KeyL" },
    { label: ";", secondaryLabel: ":", code: "Semicolon" },
    { label: `'`, secondaryLabel: `"`, code: "Quote" },
    { label: `Enter`, code: "Enter", class: ["width--4", "right--end"] },
  ],
  [
    { label: "Shift", code: "ShiftLeft", class: ["width--5", "left--end"] },
    { label: "Z", code: "KeyZ" },
    { label: "X", code: "KeyX" },
    { label: "C", code: "KeyC" },
    { label: "V", code: "KeyV" },
    { label: "B", code: "KeyB" },
    { label: "N", code: "KeyN" },
    { label: "M", code: "KeyM" },
    { label: ",", secondaryLabel: "<", code: "Comma" },
    { label: `.`, secondaryLabel: ">", code: "Period" },
    { label: `/`, secondaryLabel: "?", code: "Slash" },
    { label: `Shift`, code: "ShiftRight", class: ["width--5", "right--end"] },
  ],
  [
    { label: "Ctrl", code: "ControlLeft", class: ["width--2", "left--end"] },
    { label: "Fn", code: "", class: ["normal"] },
    { label: "Win", code: "MetaLeft", class: ["normal"] },
    { label: "Alt", code: "AltLeft", class: ["normal"] },
    { label: "Space", code: "Space", class: ["normal", "space"] },
    { label: "Alt", code: "AltRight", class: ["normal"] },
    { label: "Ctrl", code: "ControlRight", class: ["normal"] },
    { label: "←", code: "ArrowLeft", class: ["normal"] },
    { label: "↑", code: "ArrowUp", class: ["half", "normal"] },
    { label: "↓", code: "ArrowDown", class: ["half", "normal"] },
    { label: "→", code: "ArrowRight", class: ["normal"] },
  ],
];

// const allKeys = keyboard.map(function (row) {

// });

// console.log(allKeys);

const key__row = keyboard.map(generateKeyboardRow);

key__row.forEach(function (row) {
  keyboard__container.appendChild(row);
});

function generateKeyboardKey(key) {
  const keyboard__key = document.createElement("div");
  keyboard__key.classList.add("keyboard__key");
  keyboard__key.dataset.code = key.code;
  if (key.class) {
    key.class.forEach(function (cls) {
      keyboard__key.classList.add(cls);
    });
  }
  if (key.secondaryLabel) {
    keyboard__key.innerHTML = `<div class="label">${key.secondaryLabel}</div><div class="label">${key.label}</div>`;
  } else {
    keyboard__key.textContent = key.label;
  }
  return keyboard__key;
}

function generateKeyboardRow(row) {
  const keyboard__row = document.createElement("div");
  keyboard__row.classList.add("keyboard__row");

  const keyboard__row__map = row.map(generateKeyboardKey);

  keyboard__row__map.forEach((element) => {
    keyboard__row.appendChild(element);
  });
  return keyboard__row;
}

// Listeners

keyboard__container.addEventListener("click", function (event) {
  const el = event.target;
  // console.log(el.dataset.code);
  setKeyActive(el.dataset.code);
  setTimeout(function () {
    setKeyDeactive(el.dataset.code);
  }, 200);
});

window.addEventListener("keydown", (e) => setKeyActive(e.code));

window.addEventListener("keyup", (e) => setKeyDeactive(e.code));

function setKeyActive(code) {
  const el = document.querySelector(`[data-code="${code}"]`);
  el.classList.add("active");
}

function setKeyDeactive(code) {
  const el = document.querySelector(`[data-code="${code}"]`);
  el.classList.remove("active");
}
