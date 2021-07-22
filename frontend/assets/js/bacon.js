const baconButton = document.querySelector("section:nth-child(1) > button");
const img = document.querySelector("section > img");
const section = document.querySelector("section:nth-child(2)");

if (section) {
  baconButton.addEventListener("click", () => {
    let cloneImg = img.cloneNode();
    section.appendChild(cloneImg);
  });
}
