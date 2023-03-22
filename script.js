 window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('modalOverlay').style.display = 'block';
    }, 3000);
    
    document.getElementById('close-btn').addEventListener('click', function() {
      document.getElementById('modalOverlay').style.display = 'none';
    });
  });
  