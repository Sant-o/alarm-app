// script.js

// Function to switch between app sections
function showSection(sectionId) {
  // First, hide all sections that are considered 'app-section'
  const sections = document.querySelectorAll('.app-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  // Then, show the requested section
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'block';
  } else {
    console.error('Section with ID ' + sectionId + ' not found.');
  }
}

// By default, show the 'clock-section' (or any other default you prefer)
// We'll call this function explicitly once the DOM is loaded,
// or after adding event listeners. For now, this is a placeholder.
// document.addEventListener('DOMContentLoaded', () => {
//   showSection('clock-section');
// });
// Add event listeners after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Define button and section mappings
  const buttonMappings = [
    { buttonId: 'alarm-button', sectionId: 'alarm-section' },
    { buttonId: 'clock-button', sectionId: 'clock-section' },
    { buttonId: 'timer-button', sectionId: 'timer-section' },
    { buttonId: 'stopwatch-button', sectionId: 'stopwatch-section' }
  ];

  buttonMappings.forEach(mapping => {
    const button = document.getElementById(mapping.buttonId);
    if (button) {
      button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior if buttons are <a> tags
        showSection(mapping.sectionId);
      });
    } else {
      console.warn('Button with ID ' + mapping.buttonId + ' not found.');
    }
  });

  // Set the default section to be visible when the page loads
  // For example, show the clock section by default.
  // Adjust 'clock-section' if another default is preferred.
  showSection('clock-section');
});
