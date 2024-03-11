let theDonut = document.querySelectorAll(".drag-zone img"),
    dropZone = document.querySelectorAll(".drop-zone"),
    draggedDonut;

//Drag and Drop function://

    function handleStartDrag() {
        console.log('start drag this!', this);
        draggedDonut = this;
    }

    function handleDragOver(event) {
        event.preventDefault();
        console.log('dragged over a zone!!!');
    }

    function handleDrop(event) {

        if (this.firstElementChild === null) {
            event.preventDefault();
            console.log('dropped on the Zone');
            this.appendChild(draggedDonut);
        }

        else {
            return draggedDonut;
        }
    }


theDonut.forEach(donut => donut.addEventListener("dragstart", handleStartDrag));
dropZone.forEach(donut => donut.addEventListener("dragover", handleDragOver));
dropZone.forEach(donut => donut.addEventListener("drop", handleDrop));