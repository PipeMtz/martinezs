const btnSidebar = document.querySelector(".toggleSidebar");
const sidebar = document.querySelector(".sidebar");

btnSidebar.addEventListener("click", () =>{
    console.log("Hide")
    sidebar.classList.toggle("hideSidebar");

})