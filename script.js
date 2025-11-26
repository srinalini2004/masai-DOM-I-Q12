const ul = document.querySelector("#item-list");
const button = document.querySelector("#add-btn");

button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "New Item";
    ul.appendChild(li);

    const lis = ul.getElementsByTagName("li");
    for (let i = 0; i < lis.length; i++) {
        if ((i + 1) % 2 === 1) {
            lis[i].style.fontWeight = "bold";
            lis[i].style.color = "blue";
            lis[i].style.fontStyle = "normal";
        } else {
            lis[i].style.fontStyle = "italic";
            lis[i].style.color = "red";
            lis[i].style.fontWeight = "normal";
        }
    }
});
