(() => {
let theDonut = document.querySelectorAll(".drag-zone img"),
    dropZone = document.querySelectorAll(".drop-zone"),
    theAudio = document.querySelector("#audioA1"),
    donutAudio = document.querySelectorAll("#donut-audio"),
    close = document.querySelectorAll(".close"),
    audioElements = [],
    draggedDonut;

//Drag and Drop function://

    function handleStartDrag() {
        console.log('start drag this!', this);
        draggedDonut = this;

        let newSrc = `assets/audio/${this.dataset.trackref}.mp3`;
        theAudio.src = newSrc; 
        theAudio.load();
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
            theAudio.currentTime = 0;
            // theAudio.loop = true;
            // theAudio.classList.remove('.hidden');
            theAudio.play();
            
        }

        else {
            return draggedDonut;
        }
    }

    function resetDonut() {
        // If the donut was dropped into a drop zone, remove it and return it to its original position
        if (draggedDonut.parentElement.classList.contains('drop-zone')) {
            draggedDonut.parentElement.removeChild(draggedDonut);
            document.querySelector('.drag-zone').appendChild(draggedDonut); 
            theAudio.pause();
            // Assuming there's only one .drag-zone element
        }
    }



theDonut.forEach(donut => donut.addEventListener("dragstart", handleStartDrag));
dropZone.forEach(donut => donut.addEventListener("dragover", handleDragOver));
dropZone.forEach(donut => donut.addEventListener("drop", handleDrop));
close.forEach(close => close.addEventListener("click", resetDonut));

})();

