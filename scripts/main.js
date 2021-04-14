
const addBook = () => {
  let ul = document.getElementById("bookList");
  let input = document.getElementById("userInput");
  let li = document.createElement("li");
  let delButton = document.createElement('button');
  delButton.addEventListener('click', () => {
    removeBook(delButton)
  });

  li.appendChild(delButton);
  li.setAttribute('book', userInput.value); // i don't fully understand the necessity of 2 arguments here, but I get an error if not; i guess it's (name, value), but why do I need a name in this case?
  li.appendChild(document.createTextNode(userInput.value));
  ul.appendChild(li)

}
document.getElementById("addButton").addEventListener("click", addBook);

const removeBook = (button) => {

  button.parentElement.remove();

}

