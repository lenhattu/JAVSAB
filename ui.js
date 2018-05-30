window.onload = function () {
    function updateStatus() {
        var enabled = chrome.extension.getBackgroundPage().enabled;
        document.getElementById('toggle_button').value = enabled ? "Disable" : "Enable";
    }
    document.getElementById('toggle_button').onclick = function () {
        var background = chrome.extension.getBackgroundPage();
        background.enabled = !background.enabled;
        updateStatus();
    };
    updateStatus();
}
