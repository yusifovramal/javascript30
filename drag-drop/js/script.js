const item = document.getElementById("item");

item.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add("hide");
    }, 0);
});

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener("dragenter", function (e) {
        e.preventDefault();
        e.target.classList.add("drag-over");
    });

    box.addEventListener("dragleave", function (e) {
        e.target.classList.remove("drag-over");
    });

    box.addEventListener("dragover", function (e) {
        e.preventDefault();
        e.target.classList.add("drag-over");

        // Set the desired dropEffect
        e.dataTransfer.dropEffect = "link";
    });

    box.addEventListener("drop", function (e) {
        e.target.classList.remove('drag-over');

        // Get the draggable element
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);

        // Add it to the drop target
        e.target.appendChild(draggable);

        // Display the draggable element
        draggable.classList.remove('hide');
    });
});
