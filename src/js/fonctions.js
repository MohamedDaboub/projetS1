function carrousel5Images() {
    var image155 = document.querySelectorAll('.image155');
    let d = 2000;
    let delta = 1000;

    image155.forEach(function(img,indice) {
        img.style.zIndex = image155.length - indice;
    });

    let anim155 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim155.add({
        targets: image155,
        translateX: [{value: '500', duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (4*delta)+(3*d);
                         if (ind == 1) return (3*delta)+(2*d);
                         if (ind == 2) return (2*delta)+d;
                         if (ind == 3) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 4) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            if (ind == 3) return (4*delta)+(3*d);
            return (5*delta)+(4*d);
        }
    });
	
}
function monterLegende() {
    document.querySelector('.texte13').style.display = 'block';
    return anime({
        targets:'.texte13',
        translateY: '-3.7em',
        autoplay:false,
        easing:'linear',
        duration:200
    }).play

}

function descendreLegende() {   
    return anime({
        targets:'.texte13',
        translateY: '0em',
        autoplay:false,
        easing:'linear',
        duration:200
    }).play
	
}