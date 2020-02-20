function toggleDropDown() {
  const dropDown = document.getElementById("js-toggle_block");
  let styleDisplay = dropDown.style.display;
  if (styleDisplay === "block") {
    styleDisplay = "none";
  } else {
    styleDisplay = "block";
  }
  dropDown.style.display = styleDisplay;
}
