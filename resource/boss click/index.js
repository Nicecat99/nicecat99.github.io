// Edit html code
import { tap, test } from './control.js';
let i = 0;
document.all[0].innerHTML = `
<head>
<link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Coming Soon...</h1>
</body>
`;

test();
function draw(){
if(tap){
i++;}
document.body.innerHTML=i;
requestAnimationFrame(draw);
}

draw();