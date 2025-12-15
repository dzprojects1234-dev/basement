const CONFIG = {
  apiUrl: "https://withered-star-d658alamak.dz-projects1234.workers.dev/api",
  mode: "online",
  forceConnect: true
};

// Auto-connect when page loads
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('connectBtn')?.click();
  }, 1000);
});
