(function(){            
    var player = document.querySelector("#player");
    var myAudio = document.querySelector("#myAudio");
    var iconBtn = document.querySelector("#myAudio > span");            
    myAudio.addEventListener('click', function(){
        if (player.paused) {
            player.play();                    
            iconBtn.innerHTML = '<i class="fas fa-pause-circle"></i>';
        } else {
            player.pause();                    
            iconBtn.innerHTML = '<i class="far fa-play-circle"></i>';
        }
    });
    player.onended = function(){
        iconBtn.innerHTML = '<i class="far fa-play-circle"></i>';
    },

    player.onpause = function(){
        iconBtn.innerHTML = '<i class="far fa-play-circle"></i>';
    },

    player.onplay = function(){        
        iconBtn.innerHTML = '<i class="fas fa-pause-circle"></i>';
    }            
})();