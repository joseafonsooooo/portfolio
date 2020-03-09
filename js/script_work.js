function startJs(){
    /* Elements that I need */
    var body = document.getElementById("body");
    var menu = document.getElementById("menu");

    /* Clear Blur on start */
    body.style.filter = "blur(0)";  
    body.style.transform = "scale3d(1,1,1)";
    menu.style.background = "#000"; 

    /* Calculate Vertical Align Menu */
    var bodyHeight = body.offsetHeight;
    var menuHeight = menu.offsetHeight;
    var menuPosition;
    menuPosition = (bodyHeight - menuHeight) / 2;
    menu.style.top = menuPosition + "px";

    /* Go to pages... with fade */
    var backButton = document.getElementById("_back");
    backButton.onclick = function(){
        body.style.filter = "blur(40px)";
        body.style.transform = "scale3d(1,0,1)"; 
        menu.style.background = "#00ff00";
        setTimeout("window.location.href = 'index.html'", 1000);
    };
};
