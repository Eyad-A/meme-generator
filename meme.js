document.addEventListener("DOMContentLoaded", function() {
    let memeForm = document.getElementById("memeForm");
    let gallery = document.querySelector(".gallery");

    memeForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let imageLink = document.getElementById("imageLink").value;
        let upperText = document.getElementById("upperText").value;
        let lowerText = document.getElementById("lowerText").value;
        src = imageLink;
        let newImage = document.createElement("img");
        newImage.src = src;
        let memeLi = document.createElement("li");
        memeLi.classList.add("memeImg")
        memeForm.reset();

        let upperTextDiv = document.createElement("div");
        upperTextDiv.classList.add("text", "top");
        upperTextDiv.innerText = upperText;

        let lowerTextDiv = document.createElement("div");
        lowerTextDiv.classList.add("text", "lower");
        lowerTextDiv.innerText = lowerText;

        let removeDiv = document.createElement("div");
        removeDiv.classList.add("remove");

        gallery.appendChild(memeLi);
        memeLi.appendChild(newImage);
        memeLi.appendChild(upperTextDiv);
        memeLi.appendChild(lowerTextDiv);
        memeLi.appendChild(removeDiv);
    })

    function remove(event) {
        event.target.parentNode.remove();
    }

    gallery.addEventListener("click", remove, false);


});