const openModel = document.querySelector(".modal-open");
const modal = document.querySelector(".modal-overlay");
const closeModal = document.querySelector(".modal-close");

openModel.addEventListener("click", () => {
  modal.classList.add("display-modal");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("display-modal");
});
