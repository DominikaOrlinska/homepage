
{
  const toggleBackground = () => {
  const themeName = document.querySelector(".js-themeName");
  const body = document.querySelector(".js-body");
  body.classList.toggle("body--dark");
  themeName.innerText = body.classList.contains("body--dark")
    ? "jasny"
    : "ciemny";
};

const init = () => {
 const button = document.querySelector(".js-button");
 button.addEventListener("click", toggleBackground);
};
 

init();

}

