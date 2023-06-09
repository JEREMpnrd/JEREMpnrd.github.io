$('.projects').click( function() {
    $(this).toggleClass('clicked');
});
$('.projects').click( function() {
    $('.titre').toggleClass('clicked');
});
$('.projects').click( function() {
    $('.body').toggleClass('clicked');
    });
$('.projects').click( function() {
    $('.box-content').toggleClass('clicked');
    });


        $('.about').click( function() {
            $(this).toggleClass('clickeddesign');
        });
        $('.about').click( function() {
            $('.titre-design').toggleClass('clickeddesign');
        });
        $('.about').click( function() {
            $('.body').toggleClass('clickeddesign');
            });
        $('.about').click( function() {
            $('.box-content-design').toggleClass('clickeddesign');
            });


            $('.contact').click( function() {
                $(this).toggleClass('clickedcontact');
            });
            $('.contact').click( function() {
                $('.titre-video').toggleClass('clickedcontact');
            });
            $('.contact').click( function() {
                $('.body').toggleClass('clickedcontact');
                });
            $('.contact').click( function() {
                $('.box-content-video').toggleClass('clickedcontact');
                });

                $('.web').click( function() {
                    $(this).toggleClass('clickedweb');
                });
                $('.web').click( function() {
                    $('.titre-web').toggleClass('clickedweb');
                });
                $('.web').click( function() {
                    $('.body').toggleClass('clickedweb');
                    });
                $('web').click( function() {
                    $('.box-content-web').toggleClass('clickedweb');
                    });
    

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
                  lecteur = new YT.Player('video1', {
                    height: '390',
                    width: '640',
                    videoId: 'mkRXGO5XHDk',
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
                  lecteur = new YT.Player('video2', {
                    height: '390',
                    width: '640',
                    videoId: 'y9bwS2ARcbs',
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
                  lecteur = new YT.Player('video3', {
                    height: '390',
                    width: '640',
                    videoId: 'mxnngBL_Gtc',
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
                  lecteur = new YT.Player('video4', {
                    height: '390',
                    width: '640',
                    videoId: 'nP1Vb5_zSa4',
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
                  lecteur = new YT.Player('video5', {
                    height: '390',
                    width: '400',
                    videoId: 'AUlQWtxVsvk',
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
                  lecteur = new YT.Player('video6', {
                    height: '390',
                    width: '400',
                    videoId: 'DfDic-kkEyc',
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
                  lecteur = new YT.Player('video7', {
                    height: '390',
                    width: '640',
                    videoId: '8sZFaCPD3eM',
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
                  lecteur = new YT.Player('video8', {
                    height: '390',
                    width: '640',
                    videoId: 'ni4c_nLCA38',
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
                  lecteur = new YT.Player('video9', {
                    height: '390',
                    width: '640',
                    videoId: 'WZHOJ7DV-ng',
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
                  lecteur = new YT.Player('video9', {
                    height: '390',
                    width: '640',
                    videoId: 'O40LDuHrt38',
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
                  lecteur = new YT.Player('video10', {
                    height: '390',
                    width: '640',
                    videoId: 'YwE0HHGkCY8',
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
                




                
