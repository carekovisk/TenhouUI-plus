document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get('clickvfx', function(data) {
        document.getElementById('clickvfx').checked = data.clickvfx;
    });
});

document.getElementById('clickvfx').addEventListener('change', function(event) {
    chrome.storage.sync.set({clickvfx : event.target.checked });
});
