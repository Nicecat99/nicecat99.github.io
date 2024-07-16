// Edit html code
import { keyPress, key, control } from './control.js';
let player = {
    x: innerWidth/2-150,
    y: inner height/2-150,
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