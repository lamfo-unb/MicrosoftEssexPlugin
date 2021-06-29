//alert("Grrrr.")
chrome.runtime.onMessage.addListener(function(request) {
    alert(request)
})