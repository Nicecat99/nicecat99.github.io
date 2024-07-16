// Edit html code
import { keyPress, control } from './control.js';
let i = 0;
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