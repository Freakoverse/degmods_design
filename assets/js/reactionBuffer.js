document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.IBMSMSMBSSCL_CAElement, .IBMSMSMBSSCC_BottomButton');

    elements.forEach(element => {
        let clicked = false;

        element.addEventListener('click', function() {
            const loadElement = this.querySelector('.IBMSMSMBSSCL_CAElementLoad');

            if (loadElement) {
                if (clicked) {
                    loadElement.style.transition = 'width 0s, opacity 1s';
                    loadElement.style.width = '0%';
                    setTimeout(() => {
                        loadElement.style.opacity = '0';
                    }, 1000); // Set opacity to 0 after 1 second
                    clicked = false;
                } else {
                    loadElement.style.transition = 'width 3s, opacity 1s';
                    loadElement.style.width = '100%';
                    setTimeout(() => {
                        loadElement.style.opacity = '0';
                    }, 3000); // Set opacity to 0 after 4 seconds (3s + 1s)
                    clicked = true;
                }
            }
        });
    });
});
