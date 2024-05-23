document.addEventListener('DOMContentLoaded', function() {
  const triggerElements = document.querySelectorAll('.IBMSMSMBSSDownloadsElementInsideAltText');

  triggerElements.forEach(function(triggerElement) {
    const targetElement = triggerElement.nextElementSibling; // Assuming the target element is the next sibling

    let stylesDisabled = false;

    triggerElement.addEventListener('click', function() {
      if (!stylesDisabled) {
        targetElement.style.height = '';
        targetElement.style.border = '';
        stylesDisabled = true;
      } else {
        targetElement.style.height = '0';
        targetElement.style.border = 'unset';
        stylesDisabled = false;
      }
    });
  });
});
