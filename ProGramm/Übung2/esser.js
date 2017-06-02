window.onload = function () {
    var right = 200;
    var top = 200;
    var box = document.getElementById('box');
    var t = setInterval(move, 1);
    
document.onkeyup = checkKey;

function checkKey() {

    var KeyID = event.keyCode;

    if (KeyID == '38') {
        // up arrow
        top -= 50;
        box.style.right = top + 'px';
    }
    else if (KeyID == '40') {
        // down arrow
        top += 50;
        box.style.right = top + 'px';
    }
    else if (KeyID == '37') {
       // left arrow
        right += 50;
        box.style.right = right + 'px';
    }
    else if (KeyID == '39') {
       // right arrow
        right -= 50;
        box.style.right = right + 'px';
    }

}
};

    
  /*  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            right += 50;
            box.style.right = right + 'px';
        case 38:
            right -= 50;
            box.style.right = top + 'px';
        case 39:
            right -= 50;
            box.style.right = right + 'px';
        case 40:
            right += 50;
            box.style.right = top + 'px';
    }
};
    
/* function move() {
        if(pos >= 1350){
            pos = 200;
        }
        else{
            pos += 1;
            box.style.left = pos+'px';
        }
    }
}; */
