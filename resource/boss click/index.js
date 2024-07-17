// import code from other code
import { keyPress, key, control } from './control.js';
let move = {
    left: false,
    right: false,
    up: false,
    down: false,
};
let player = {
    x: innerWidth/2-150,
    y: innerHeight/2-150,
};
document.all[0].innerHTML = `
<head>
<link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Coming Soon...</h1>
</body>
`;

control();
function draw(){
// using this function later
requestAnimationFrame(draw);
}

draw();