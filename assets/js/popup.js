document.addEventListener('DOMContentLoaded', function () {
    // Click event for element with class "IBMSMSMBSSCL_CAEReply"
    var replyButton = document.querySelector('.IBMSMSMBSSCL_CAEReply');
    if (replyButton) {
        replyButton.addEventListener('click', function () {
            togglePopupDisplay('PopUpMainCommentReplies');
            disableScroll();
        });
    }

    // Click event for element with class "IBMSMSMBSSCL_CAEReplies"
    var repliesButton = document.querySelector('.IBMSMSMBSSCL_CAEReplies');
    if (repliesButton) {
        repliesButton.addEventListener('click', function () {
            togglePopupDisplay('PopUpMainCommentReplies');
            disableScroll();
        });
    }

    // Click event for element with class "IBMSMSMSSS_Author_Top_IconWrappedQR"
    var qrButton = document.querySelector('.IBMSMSMSSS_Author_Top_IconWrappedQR');
    if (qrButton) {
        qrButton.addEventListener('click', function () {
            togglePopupDisplay('PopUpMainQR');
            disableScroll();
        });
    }
    
    // Click event for element with class "NMTI_SI_LinkTip"
    var qrButton = document.querySelector('.NMTI_SI_LinkTip');
    if (qrButton) {
        qrButton.addEventListener('click', function () {
            togglePopupDisplay('PopUpMainZap');
            disableScroll();
        });
    }

    // Click event for element with class "popUpMainCardTopClose"
    var closeButtons = document.querySelectorAll('.popUpMainCardTopClose');
    closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener('click', function () {
            // Find the closest parent element with class "popUpMain" and set its display to "none"
            var popUpMain = closeButton.closest('.popUpMain');
            if (popUpMain) {
                popUpMain.style.display = 'none';
                enableScroll();
            }
        });
    });
});

function togglePopupDisplay(popupId) {
    // Swap display property for element with specified ID
    var popupElement = document.getElementById(popupId);
    if (popupElement) {
        if (popupElement.style.display === 'none') {
            popupElement.style.display = 'flex';
        } else {
            popupElement.style.display = 'none';
        }
    }
}




function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = 'auto';
}