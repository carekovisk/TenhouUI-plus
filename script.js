//click effect trigger
chrome.storage.sync.get('clickvfxON', function(data) {
  if (data.clickvfxON == true)
  {

    var a = new Audio('https://github.com/carekovisk/TenhouUI-plus/raw/main/sounds/click.mp3');    
    document.addEventListener("click", function(event) {

      a.play()    
    
      // create dot
      var dot = document.createElement('label');
      dot.className = 'click-dot';
      dot.style.top = event.clientY + 'px';
      dot.style.left = event.clientX + 'px';
    
      document.body.appendChild(dot);
    
        // Remove after .25 sec
      setTimeout(function() {
        dot.parentNode.removeChild(dot);
      }, 250);
    
    });

  };
});


document.addEventListener('readystatechange', event => {

    switch (document.readyState) {
      case "loading":
        break;
      case "interactive":
        break;
      case "complete":        
        
        InitVars();
        
        break;
    }

});

async function InitVars()
{

    var maindiv_element;
    var maindiv_bg;

    var btndiv_element;
    var auxdiv_element;

    var centralvfx_element;
 
    while (true) {

        maindiv_element = document.querySelector("body > div > div:nth-child(1)");  
        btndiv_element = document.querySelector("body > div > div:nth-child(2)");  
        auxdiv_element = document.querySelector("body > div > div:nth-child(3)");  
        
        maindiv_bg = window.getComputedStyle(maindiv_element).getPropertyValue('background-image');
        if ((maindiv_bg != undefined) && (maindiv_bg != "none")) 
        {

            document.body.classList.add("new-background");
            maindiv_element.classList.add("old-background");

            document.documentElement.style.setProperty("--new-bg", maindiv_bg);            
            document.documentElement.style.setProperty("--old-bg", "none");

            chrome.storage.sync.get('radialvfx', function(data) {
              var radial_value = data.radialvfx;
              if (radial_value == 1) document.documentElement.style.setProperty("--radial-bg", "#00000000"); 
              if (radial_value == 2) document.documentElement.style.setProperty("--radial-bg", "#0000004d"); 
              if (radial_value == 3) document.documentElement.style.setProperty("--radial-bg", "#00000080"); 
              if (radial_value == 4) document.documentElement.style.setProperty("--radial-bg", "#000000b8"); 
              if (radial_value == 5)  document.documentElement.style.setProperty("--radial-bg", "#000000"); 
            });

            //--
            maindiv_element.classList.add("maindiv");
            btndiv_element.classList.add("btndiv");
            auxdiv_element.classList.add("auxdiv");
            //--

            chrome.storage.sync.get('centervfxON', function(data) {
              if (data.centervfxON == true)
                {
                  centralvfx_element = document.querySelector(".maindiv > canvas:nth-child(7)");  
                  centralvfx_element.classList.add("centralvfx");
                }
            });

            console.log("LOADED");
            
            break;
        
        }
        
        await new Promise(resolve => setTimeout(resolve, 100));

    }

}

