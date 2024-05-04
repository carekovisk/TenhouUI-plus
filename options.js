document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get('clickvfxON', function(data) {
        document.getElementById('clickvfxON').checked = data.clickvfxON;
        console.log('data.clickvfxON: ', data.clickvfxON);
    });
    chrome.storage.sync.get('clickvfxOFF', function(data) {
        document.getElementById('clickvfxOFF').checked = data.clickvfxOFF;
        console.log('data.clickvfxOFF: ', data.clickvfxOFF);
    });

});

document.getElementById('clickvfxON').addEventListener('change', function(event) {
    chrome.storage.sync.set({clickvfxON : event.target.checked });
    chrome.storage.sync.set({clickvfxOFF : !event.target.checked });
    console.log('clickvfxON event.target.checked: ', event.target.checked);
    console.log('clickvfxOFF event.target.checked: ', !event.target.checked);
});
document.getElementById('clickvfxOFF').addEventListener('change', function(event) {
    chrome.storage.sync.set({clickvfxON : !event.target.checked });
    chrome.storage.sync.set({clickvfxOFF : event.target.checked });
    console.log('clickvfxON event.target.checked: ', !event.target.checked);
    console.log('clickvfxOFF event.target.checked: ', event.target.checked);
});
