const CONFIG = {
  apiUrl: "https://withered-star-d658alamak.dz-projects1234.workers.dev/api",
  mode: "online"
};

// Auto-test connection
console.log('🔧 Config loaded:', CONFIG);

// Test Worker immediately
fetch(CONFIG.apiUrl + '/health')
  .then(response => response.json())
  .then(data => console.log('✅ Worker test:', data))
  .catch(error => console.log('❌ Worker test failed:', error));
