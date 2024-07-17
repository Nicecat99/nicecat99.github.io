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
    <h1>Loading, please wait...</h1>
</body>
`;

control();
function Main(){
    


    requestAnimationFrame(Main);
}

Main();