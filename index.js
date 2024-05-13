const praise_button = document.getElementById("praise")
praise_button.addEventListener("click", boom)

function boom() {
    for (let i = 0; i < 5; i++) {
        console.log("boom")
    }
}