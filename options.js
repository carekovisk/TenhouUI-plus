document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get('clickvfxON', function(data) {
        document.getElementById('clickvfxON').checked = data.clickvfxON;
    });
    chrome.storage.sync.get('clickvfxOFF', function(data) {
        document.getElementById('clickvfxOFF').checked = data.clickvfxOFF;
    });
    chrome.storage.sync.get('centervfxON', function(data) {
        document.getElementById('centervfxON').checked = data.centervfxON;
    });
    chrome.storage.sync.get('centervfxOFF', function(data) {
        document.getElementById('centervfxOFF').checked = data.centervfxOFF;
    });
});

document.getElementById('clickvfxON').addEventListener('change', function(event) {
    chrome.storage.sync.set({clickvfxON : event.target.checked });
    chrome.storage.sync.set({clickvfxOFF : !event.target.checked });
});
document.getElementById('clickvfxOFF').addEventListener('change', function(event) {
    chrome.storage.sync.set({clickvfxON : !event.target.checked });
    chrome.storage.sync.set({clickvfxOFF : event.target.checked });
});

document.getElementById('centervfxON').addEventListener('change', function(event) {
    chrome.storage.sync.set({centervfxON : event.target.checked });
    chrome.storage.sync.set({centervfxOFF : !event.target.checked });

});
document.getElementById('centervfxOFF').addEventListener('change', function(event) {
    chrome.storage.sync.set({centervfxON : !event.target.checked });
    chrome.storage.sync.set({centervfxOFF : event.target.checked });
});
