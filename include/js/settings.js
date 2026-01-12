// Gestion de l'option full-screen
document.getElementById('fullscreen-btn').addEventListener('click', function (e) {
  e.preventDefault(); 
  
  if (!document.fullscreenElement &&  
      !document.webkitFullscreenElement && 
      !document.mozFullScreenElement && 
      !document.msFullscreenElement) {

    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { 
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { 
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.msRequestFullscreen) { 
      document.documentElement.msRequestFullscreen();
    }
  } else {
    
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { 
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) { 
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) { 
      document.msExitFullscreen();
    }
  }
});




// Gestion de l'option share
document.getElementById('share-btn').addEventListener('click', function (e) {
  e.preventDefault(); 
  
  const currentUrl = window.location.href;

  navigator.clipboard.writeText(currentUrl).then(function() {
    alert("URL copiée dans le presse-papiers !"); 
  }).catch(function(error) {
    console.error("Erreur lors de la copie de l'URL: ", error);
  });
});