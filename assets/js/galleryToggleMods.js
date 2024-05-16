document.addEventListener("DOMContentLoaded", function() {
    // Get references to necessary elements
    const imagesContainer = document.querySelector(".IBMSMSMBSSShots");
    const images = document.querySelectorAll(".IBMSMSMBSSShotsImg");
    const popup = document.getElementById("PopUpMainGallery");
    const popupImage = document.querySelector(".popUpMainGalleryInsideMid");
    const closeButton = document.getElementById("popUpMainGalleryTopBtnClose");
    const leftButton = document.getElementById("popUpMainGalleryInsideBtnLeft");
    const rightButton = document.getElementById("popUpMainGalleryInsideBtnRight");

    let currentImageIndex = 0;
    let initialX = null;
    let initialScrollLeft = null;

    // Function to open the popup and display the clicked image
    function openPopup(imageSrc) {
        popupImage.src = imageSrc;
        popup.style.display = "flex";
    }

    // Event listeners for each image
    images.forEach(function(image, index) {
        image.addEventListener("click", function() {
            currentImageIndex = index;
            openPopup(image.src);
        });

        // Prevent dragging the image itself
        image.addEventListener("mousedown", function(event) {
            event.preventDefault();
        });
    });

    // Event listener for close button
    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
    });

    // Event listener for left button
    leftButton.addEventListener("click", function() {
        currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        popupImage.src = images[currentImageIndex].src;
    });

    // Event listener for right button
    rightButton.addEventListener("click", function() {
        currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
        popupImage.src = images[currentImageIndex].src;
    });

    // Drag functionality
    imagesContainer.addEventListener("mousedown", function(event) {
        initialX = event.clientX;
        initialScrollLeft = imagesContainer.scrollLeft;
        imagesContainer.style.cursor = "grabbing";
        imagesContainer.style.userSelect = "none";
    });

    document.addEventListener("mouseup", function() {
        initialX = null;
        imagesContainer.style.cursor = "grab";
        imagesContainer.style.userSelect = "auto";
    });

    document.addEventListener("mousemove", function(event) {
        if (initialX !== null) {
            const deltaX = event.clientX - initialX;
            imagesContainer.scrollLeft = initialScrollLeft - deltaX;
        }
    });

    document.addEventListener("mouseleave", function() {
        initialX = null;
        imagesContainer.style.cursor = "grab";
        imagesContainer.style.userSelect = "auto";
    });
});
