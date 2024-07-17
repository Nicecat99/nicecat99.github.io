let keyPress = false;
let key;
function control(x){
onkeydown = function(e){
    keyPress = true;
    key = e;
 if(key.key=='ArrowLeft' | key.key=='a'){
        x.left=true;
    }

    if(key.key=='ArrowRight' | key.key=='d'){
        x.right=true;
    }

    if(key.key=='ArrowUp' | key.key=='w'){
        x.up=true;
    }

    if(key.key=='ArrowDown' | key.key=='s'){
        x.down=true;
    }
};

onkeyup = function(){
    keyPress = false;
    x.left = false;
    x.right = false;
    x.up = false;
    x.down = false;
};
};

export { keyPress, key, control }