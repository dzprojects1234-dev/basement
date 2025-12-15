const CONFIG = {
  apiUrl: "https://withered-star-d658alamak.dz-projects1234.workers.dev/api",
  mode: "online"
};

// Force the connection IMMEDIATELY
console.log('🚀 Config loaded, forcing connection...');

// Override the website's connection logic
window.SUPABASE_URL = '';  // Block direct Supabase connection
window.SUPABASE_ANON_KEY = '';  // Block direct Supabase connection

// Create global function to connect via Worker
window.connectViaWorker = async function() {
  console.log('🔗 Connecting via Worker...');
  try {
    const response = await fetch(CONFIG.apiUrl + '/health');
    const data = await response.json();
    console.log('✅ Worker connection successful:', data);
    
    // Hide login modal and show app
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('appContainer').style.display = 'flex';
    document.getElementById('statusText').textContent = 'Connected to Cloud';
    document.getElementById('cloudStatus').classList.add('status-connected');
    document.getElementById('dataMode').textContent = 'Online Mode';
    
    // Load inventory data
    const inventoryResponse = await fetch(CONFIG.apiUrl + '/inventory');
    const inventoryData = await inventoryResponse.json();
    console.log('📦 Inventory loaded:', inventoryData);
    
    return true;
  } catch (error) {
    console.log('❌ Worker connection failed:', error);
    return false;
  }
};

// Auto-execute when page loads
window.addEventListener('load', function() {
  console.log('📄 Page loaded, attempting connection...');
  setTimeout(() => {
    window.connectViaWorker().then(success => {
      if (!success) {
        console.log('⚠️ Falling back to offline mode');
        // Trigger offline mode
        if (document.getElementById('localBtn')) {
          document.getElementById('localBtn').click();
        }
      }
    });
  }, 500);
});
