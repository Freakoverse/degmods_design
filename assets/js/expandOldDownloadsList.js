  // Get the elements
  const viewOldLinksBtn = document.getElementById('viewOldLinks');
  const oldDownloadList = document.getElementById('oldDownloadList');

  // Add click event listener to the button
  viewOldLinksBtn.addEventListener('click', function() {
    // Toggle styles
    if (oldDownloadList.style.height === '0px') {
      // Enable styles
      oldDownloadList.style.padding = '';
      oldDownloadList.style.height = '';
      oldDownloadList.style.border = '';
    } else {
      // Disable styles
      oldDownloadList.style.padding = '0';
      oldDownloadList.style.height = '0';
      oldDownloadList.style.border = 'unset';
    }
  });