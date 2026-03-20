document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("nav a");
  const contents = document.querySelectorAll(".tab-content");

   function activateTab(index) {
   contents.forEach(content => content.classList.remove("active"));
     tabs.forEach(tab => tab.classList.remove("active"));

       contents[index].classList.add("active");
 tabs[index].classList.add("active");
   }
    tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      
      
      activateTab(index);
    });
  });

    activateTab(0);
});


