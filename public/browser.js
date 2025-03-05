//function we pass in inserting html
function addTemplate(item) {
  return `<li class="list-group-item list-group-item-indo d-flex align-items-center justify-content-between ">${item.item}
            <div>
              <button data-id="${item._id}" class="edit btn btn-dark btn-md">Edit</button>
              <button data-id="${item._id}" class=" delete btn btn-dark btn-md">Delete</button>
            </div>
          </li>`;
}
//
document.getElementById("create-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let create_input = document.getElementById("create-field");
  // axiosda post qilish
  axios
    .post("/create-item", { item: create_input.value })
    .then((response) => {
      document
        .getElementById("item_ul")
        .insertAdjacentHTML("beforeend", addTemplate(response.data));
      create_input.value = "";
      create_input.focus();
    })
    .catch((error) =>
      console.log(`something went wrong in axios.post-then with ${error}`)
    );
});

document.addEventListener("click", (e) => {
  data_id = e.target.getAttribute("data-id");
  //delete
  if (e.target.classList.contains("delete")) {
    if (confirm("Sure to delete?")) {
      axios
        .post("delete-item", { id: data_id })
        .then((response) => {
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => err);
    }
  }

  //clear_all
  if (e.target.classList.contains("clear_all")) {
    axios
      .post("clear_all", { clear_all: true })
      .then((response) => {
        location.reload();
      })
      .catch((err) => err);
  }

  //update_item
  if (e.target.classList.contains("edit")) {
    let input = prompt(
      "edit plan",
      e.target.parentElement.parentElement.querySelector(".text").innerHTML
    );
    if (input) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: input,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".text"
          ).innerHTML = input;
        })
        .catch((err) => err);
    }
  }
});
