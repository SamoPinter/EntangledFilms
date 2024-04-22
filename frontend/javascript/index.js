import "$styles/index.css"
import "$styles/syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")



  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('sl-dropdown');
  dropdown.addEventListener('sl-select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });

  function onLoadDrawer(){
    const drawer = document.querySelector('.drawer-overview');
    const openButton = drawer.nextElementSibling;
    const closeButton = drawer.querySelector('sl-button[variant="primary"]');
    openButton.addEventListener('click', () => drawer.show());
    closeButton.addEventListener('click', () => drawer.hide());
  }