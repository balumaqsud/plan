//
//

function addTemplate(item) {
  return `<li class="list-group-item list-group-item-indo d-flex align-items-center justify-content-between ">${item.item}
            <div>
              <button data-id="${item._id}" class="edit btn btn-dark btn-md">Edit</button>
              <button data-id="${item._id}" class=" delete btn btn-dark btn-md">Delete</button>
            </div>
          </li>`;
}

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
