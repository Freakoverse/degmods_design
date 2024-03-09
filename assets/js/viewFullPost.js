document.addEventListener('DOMContentLoaded', function() {
    var hideDiv = document.querySelector('.IBMSMSMBSSPostBodyHide');
    var showDiv = document.querySelector('.IBMSMSMBSSPostBody');

    hideDiv.addEventListener('click', function() {
        hideDiv.style.display = 'none';
        showDiv.style.maxHeight = 'unset';
        showDiv.style.padding = 'unset';
    });
});
