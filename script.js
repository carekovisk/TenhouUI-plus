document.addEventListener("click", function(event) {
    
    let url = chrome.runtime.getURL('sounds/click.mp3')
    let a = new Audio(url)
    a.play()

    // create dot
    var dot = document.createElement('div');
    dot.className = 'click-dot';
    dot.style.top = event.clientY + 'px';
    dot.style.left = event.clientX + 'px';
    document.body.appendChild(dot);

    // Remove after .25 sec
    setTimeout(function() {
        dot.parentNode.removeChild(dot);
    }, 250);

});


// Place in header (do not use async or defer)
document.addEventListener('readystatechange', event => {

    switch (document.readyState) {
      case "loading":
        console.log("document.readyState: ", document.readyState,
         `- The document is still loading.`
         );
        break;
      case "interactive":
        console.log("document.readyState: ", document.readyState, 
          `- The document has finished loading DOM. `,
          `- "DOMContentLoaded" event`
          );
          
        break;
      case "complete":
        
        console.log("document.readyState: ", document.readyState, 
          `- The page DOM with Sub-resources are now fully loaded. `,
          `- "load" event`
          );

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
 
    while (true) {

        maindiv_element = document.querySelector("body > div > div:nth-child(1)");  
        btndiv_element = document.querySelector("body > div > div:nth-child(2)");  
        auxdiv_element = document.querySelector("body > div > div:nth-child(3)");  
        
        maindiv_bg = window.getComputedStyle(maindiv_element).getPropertyValue('background-image');
        if ((maindiv_bg != undefined) && (maindiv_bg != "none")) 
        {

            console.log("LOADED");
            
            document.body.classList.add("new-background");
            maindiv_element.classList.add("old-background");

            document.documentElement.style.setProperty("--new-bg", maindiv_bg);            
            document.documentElement.style.setProperty("--old-bg", "none");

            //--
            maindiv_element.classList.add("maindiv");
            btndiv_element.classList.add("btndiv");
            auxdiv_element.classList.add("auxdiv");
            //--

            break;
        
        }
        
        await new Promise(resolve => setTimeout(resolve, 100));

    }

}

