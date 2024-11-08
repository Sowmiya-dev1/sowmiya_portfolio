// Display the Home tab by default on page load
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('home').style.display = 'block';
  });
  
  function showTab(tabId) {
    // Hide all tab content sections
    const navTabs = document.querySelectorAll('.tab-content');
    navTabs.forEach(content => content.style.display = 'none');
  
    // Show the selected tab content, hide 'Home' when any other tab is selected
    if (tabId !== 'home') {
      document.getElementById('home').style.display = 'none';
    }
  
    document.getElementById(tabId).style.display = 'block';
  }
//   function showTab(tabId){
// if (tabId == 'home'){
//   document.getElementById('home').style.overflowY = 'unset';
// } else {
//   document.getElementById(tabId).style.overflowY = 'auto';
// }
//   }