chrome.runtime.onInstalled.addListener(function () {
    //default values
    chrome.storage.sync.set({clickvfxON : true });
    chrome.storage.sync.set({clickvfxOFF : false });      
    chrome.storage.sync.set({centervfxON : true });
    chrome.storage.sync.set({centervfxOFF : false });    
    console.log('Tenhou3UI+ extension installed');    
});