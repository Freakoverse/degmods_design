// Get all textarea elements with the class "postSocialTextarea"
const textareas = document.querySelectorAll('.postSocialTextarea');

// Function to adjust textarea height based on content
const adjustTextareaHeight = (textarea) => {
  textarea.style.height = 'auto'; // Reset height to auto
  textarea.style.height = `${textarea.scrollHeight}px`; // Set height based on content
};

// Add event listener to each textarea
textareas.forEach((textarea) => {
  textarea.addEventListener('input', () => {
    adjustTextareaHeight(textarea); // Adjust height when input is detected
  });

  // Adjust height initially (in case there's pre-filled content)
  adjustTextareaHeight(textarea);
});
