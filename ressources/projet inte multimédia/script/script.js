

      // Variable globale contenant l'état du lecteur

      let etatLecteur;

      function lecteurPret(event) {
        // event.target = lecteur
        event.target.setVolume(50);
      }
      
      function changementLecteur(event) {
        // event.data = état du lecteur
        etatLecteur = event.data;
      }
      
      let lecteur;
      
      function onYouTubeIframeAPIReady() {
        lecteur = new YT.Player('video', {
          height: '390',
          width: '640',
          videoId: 'pswIExH61dw',
          playerVars: {
            color: 'white',
            enablejsapi: 1,
            modestbranding: 1,
            rel: 0,
          },
          events: {
            onReady: lecteurPret,
            onStateChange: changementLecteur,
          },
        });
      }
      
      // Hauteur de la vidéo
      const hauteurVideo = $('#video').height();
      // Position Y de la vidéo
      const posYVideo = $('#video').offset().top;
      // Valeur declenchant la modification de l'affichage (choix "esthétique")
      const seuil = posYVideo + 1 * hauteurVideo;
      
      // Gestion du défilement
      $(window).scroll(function() {
        // Récupération de la valeur du défilement vertical
        const scroll = $(window).scrollTop();
      
        // Classe permettant l'exécution du CSS
        $('#video').toggleClass(
            'scroll',
            etatLecteur === YT.PlayerState.PLAYING && scroll > seuil,
        );
      });

  // Localisation 
  function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    const result = document.querySelector('#result')
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.google.es/maps/place/dvd seller/@${latitude},${longitude},13z`;
      mapLink.textContent = `FIND A STORE ON GOOGLE MAPS`;
      result.textContent = `Latitude: ${latitude} ; Longitude: ${longitude}`;
     
    
      map.flyTo({ lat: position.coords.latitude, lng: position.coords.longitude }, 14);
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);

  //AFFICHAGE DE LA CARTE
  
  const map = L.map('mapid', {
    center: [47.2608333, 2.4188888888888886], // Centre de la France
    zoom: 5,
    minZoom: 4,
    maxZoom: 19,
  });
  
  // Ajout des tuiles (ici OpenStreetMap)
  // https://wiki.openstreetmap.org/wiki/Tiles#Servers
  L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
  }).addTo(map);
  
  // Ajout de l'échelle
  L.control.scale().addTo(carte);

  //LES PERSONNAGES


  function afficherTexte(texte)
		{
			if (!document.getElementById("div2").hasChildNodes())
				document.getElementById("div2").appendChild(document.createTextNode(texte));
			else
			{
				document.getElementById("div2").removeChild(document.getElementById("div2").firstChild); 
				document.getElementById("div2").appendChild(document.createTextNode(texte));
				}
		}


// CHARACTERS AFFICHAGE

