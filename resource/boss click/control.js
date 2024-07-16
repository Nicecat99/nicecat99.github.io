let keyPress = false;
let key;
function control(){
onkeydown = function(e){
    keyPress = true;
    key = e;
};

onkeyup = function(){
    keyPress = false;
};
};

export { keyPress, key, control }