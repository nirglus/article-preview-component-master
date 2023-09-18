const SHARE_POPUP = document.querySelector(".share-popup");
const SHARE_ICON = document.getElementById("share-icon");
SHARE_ICON.addEventListener("click", () => {
    SHARE_POPUP.classList.toggle("hidden");
})