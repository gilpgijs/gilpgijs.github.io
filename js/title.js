const app = "gilpgijs";
let h1 = document.querySelector("h1");
if (h1) {
  document.title = `${h1.textContent} - ${app}`;
}