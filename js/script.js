const themeButton = document.getElementById("toggle");
const themeIcon = document.getElementById("icon");
function handleToggleTheam() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    document.documentElement.classList.remove("dark");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}

themeButton.addEventListener("click", () => {
  if (
    localStorage.theme === "light" ||
    (localStorage.getItem("theme") === null && !document.documentElement.classList.contains("dark"))
  ) {
    localStorage.theme = "dark";

    handleToggleTheam();
  } else {
    localStorage.theme = "light";

    handleToggleTheam();
  }
});

handleToggleTheam();
