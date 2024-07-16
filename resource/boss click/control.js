let tap = false;
function test(){
    addEventListener('touchstart', function(){
tap = true;
});

    addEventListener('touchend', function(){
tap = false;
});
};

export { tap, test }