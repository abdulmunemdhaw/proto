(async()=>{
    const path = "file:///home/dhaw/Projects/proto/";
    const ham = document.querySelector("#nav .container .nav-mobile .ham");
    const nav = document.querySelector("#nav .container .nav-mobile .nav-bar");
    const nav_items_desktop = document.querySelectorAll("#nav .container .nav-desktop .nav-bar .nav-bar-items .nav-bar-item")
    const nav_items_mobile = document.querySelectorAll("#nav .container .nav-mobile .nav-bar .nav-bar-items .nav-bar-item");
    var isActive = false;
    ham.addEventListener("click",()=>{
        if (isActive){
            ham.classList.remove("active-ham");
            nav.classList.remove("active-nav");
        } else {
            ham.classList.add("active-ham");
            nav.classList.add("active-nav");
        }
        isActive = !isActive;
    })
    for(let nav_item_desktop of nav_items_desktop){
        nav_item_desktop.addEventListener("click",(event)=>{
            location.href = path + event.target.dataset.url;
        })
    }
    for(let nav_item_mobile of nav_items_mobile){
        nav_item_mobile.addEventListener("click",(event)=>{
            location.href = path + event.target.dataset.url;
        })
    }
})();