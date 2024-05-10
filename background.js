chrome.runtime.onInstalled.addListener(function () {
    //default values

    chrome.storage.sync.get('clickvfxON', function(data) {
        console.log('data.clickvfxON ', data.clickvfxON);
        if (data.clickvfxON == undefined) chrome.storage.sync.set({clickvfxON : true });
    });
    chrome.storage.sync.get('clickvfxOFF', function(data) {
        console.log('data.clickvfxOFF ', data.clickvfxOFF);
        if (data.clickvfxOFF == undefined) chrome.storage.sync.set({clickvfxOFF : false });
    });
    chrome.storage.sync.get('centervfxON', function(data) {
        console.log('data.centervfxON ', data.centervfxON);
        if (data.centervfxON == undefined) chrome.storage.sync.set({centervfxON : true });
    }); 
    chrome.storage.sync.get('centervfxOFF', function(data) {
        console.log('data.centervfxOFF ', data.centervfxOFF);
        if (data.centervfxOFF == undefined) chrome.storage.sync.set({centervfxOFF : false });
    });
    chrome.storage.sync.get('radialvfx', function(data) {
        console.log('data.radialvfx ', data.radialvfx);
        if (data.radialvfx == undefined) chrome.storage.sync.set({radialvfx : 4 });
    });
    console.log('Tenhou3UI+ extension installed');    
});