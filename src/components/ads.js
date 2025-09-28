export function createAds(position) {
  // Replace 'ca-pub-XXXXXXXXXXXXXXXXX' with your actual AdSense publisher ID
  // Replace 'XXXXXXXXXX' with your actual ad slot IDs
  
  const adConfigs = {
    top: {
      slot: 'XXXXXXXXXX',
      format: 'auto',
      style: 'display:block; width:100%; height:90px;'
    },
    middle: {
      slot: 'YYYYYYYYYY',
      format: 'auto',
      style: 'display:block; width:100%; height:250px;'
    },
    sidebar: {
      slot: 'ZZZZZZZZZZ',
      format: 'auto',
      style: 'display:block; width:300px; height:600px;'
    }
  };

  const config = adConfigs[position] || adConfigs.middle;

  return `
    <div class="ad-container">
      <!-- Google AdSense Ad -->
      <ins class="adsbygoogle"
           style="${config.style}"
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
           data-ad-slot="${config.slot}"
           data-ad-format="${config.format}"
           data-full-width-responsive="true"></ins>
      
      <!-- Fallback for development/testing -->
      <div class="ad-placeholder" style="display: none;">
        <p>Advertisement Space (${position})</p>
        <p>Replace with your AdSense code</p>
      </div>
      
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
  `;
}

// Alternative simple ad placeholder for testing
export function createAdPlaceholder(position) {
  return `
    <div class="ad-container">
      <div class="ad-placeholder">
        <p>📺 Advertisement Space (${position.toUpperCase()})</p>
        <p>Google AdSense integration ready</p>
        <small>Replace publisher ID in ads.js with your AdSense ID</small>
      </div>
    </div>
  `;
}