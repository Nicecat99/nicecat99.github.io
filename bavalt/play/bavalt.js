
try {
var options;
var that;
that = document.createElement('head');
document.querySelector('html').appendChild(that);
that = document.createElement('meta');
that.charset = 'utf-8';
document.querySelector('head').appendChild(that);
that = document.createElement('body');
document.querySelector('html').appendChild(that);
that = document;
function define(option){
    options = option;
}

define(that);
that = undefined;
define = undefined;
options.title = 'Bavalt';
      
    options.body.style.background = 'black';
    options.body.innerHTML = '<h1 style = "color:white;cursor:default;font-family:sans-serif;position:fixed;top:120px;left:140px;font-size:70px;">Nicecat99</h1><div id = "logo"></div><div id = "invis"></div>';

        var logoX = -100;
        var speed = 0.1;
        var logo = options.getElementById('logo');
        options.body.style.cursor = 'wait';
        var cursor = options.getElementById('invis');
        cursor.title = 'Loading Screen';
        cursor.style.position = 'fixed';
        cursor.style.left = '-20px';
        cursor.style.top = '-20px';
        cursor.style.width = '9999px';
        cursor.style.height = '9999px';
        
        logo.style.background = 'yellow';
        logo.style.width = '100px';
        logo.style.height = '100px';
        logo.style.borderRadius = '100px';
        logo.style.border = '3.5pt solid white';
        logo.style.position = 'fixed';
        logo.style.top = '150px';
        logo.style.left = '-100px';
        
        var draw3 = setInterval(function(){
            logo.style.left = logoX + 'px'; 
            logoX+=speed;
            speed+=0.01;
            
        });
        
        setTimeout(function() {
      clearInterval(draw3);
        Play();
    }, 10000);
      
      options.body.style.fontFamily = 'sans-serif';
      var draw4;
      var $ = 0;
      var challenge = false;
      var limit = 1;
      var time = 30000;
      function Play() {
        options.body.style.cursor = 'default';
        function Start() {
        options.body.title = 'Menu';
        if(challenge){
          time = 30000;
          challenge = false;
        }
          
          options.body.style.color = 'white';
          options.body.style.background = 'black';
          options.body.innerHTML = '<button id = "challenge">Challenge 2</button><button id = "car">Buy Car</button><h1 id = "level">Level ' + limit + '</h1><h1 id = "money">$' + $ + '</h1><button id = "cash">Challenge 1</button><button id = "htp">How To Play</button><h1 id = "menu">Select</h1><button id = "bb">Challenge 3</button>';

          options.getElementById('bb').style.position = 'fixed';
          options.getElementById('bb').style.top = '280px';
          options.getElementById('bb').style.left = '450px';
          options.getElementById('bb').style.width = '100px';
          options.getElementById('bb').style.height = '100px';
          options.getElementById('bb').style.borderRadius = '100px';
          options.getElementById('bb').style.border = '3.5pt solid white';
          options.getElementById('bb').style.background = 'yellow';
          options.getElementById('bb').style.color = 'white';
          options.getElementById('bb').style.fontSize = '18px';
          options.getElementById('bb').style.cursor = 'pointer';
          
          options.getElementById('menu').style.position = 'fixed';
          options.getElementById('menu').style.left = '220px';
          options.getElementById('menu').style.top = '100px';
          options.getElementById('menu').style.fontSize = '50px';

        options.getElementById('bb').addEventListener('click',function(){
        if($ > limit){
            alert('Money Limit');
        } else if(limit <= 4){
            alert('Be on level 5');
        } else if(limit >= 5 && $ >= 9){
            alert('You need $10s');
        } else {
            BallBar();
        }
        });

          options.getElementById('challenge').style.background = 'yellow';
          options.getElementById('challenge').style.color = 'white';
          options.getElementById('challenge').style.border = '3.5pt solid white';
          options.getElementById('challenge').style.width = '100px';
          options.getElementById('challenge').style.height = '100px';
          options.getElementById('challenge').style.borderRadius = '100px';
          options.getElementById('challenge').style.fontSize = '17px';
          options.getElementById('challenge').style.cursor = 'pointer';
          options.getElementById('car').style.background = 'yellow';
          options.getElementById('car').style.border = '3.5pt solid white';
          options.getElementById('challenge').style.position = 'fixed';
          options.getElementById('challenge').style.top = '280px';
          options.getElementById('challenge').style.left = '340px';
          
          options.getElementById('challenge').addEventListener('click', function() {
              
            if(limit === 1){
                alert('Be on level 2+');
            }
            
            if(limit !== 1 && $ <= 2){
                alert('You need $3s');
            }
            if ($ >= 3) {
              $ -= 2;
              challenge = true;
              Car();
            }
            
          });
            
          options.getElementById('car').style.width = '100px';
          options.getElementById('car').style.height = '100px';
          options.getElementById('car').style.position = 'fixed';
          options.getElementById('car').style.left = '120px';
          options.getElementById('car').style.top = '280px';
          options.getElementById('car').style.color = 'white';
          options.getElementById('car').style.borderRadius = '100px';
          options.getElementById('car').style.fontSize = '20px';
          options.getElementById('car').style.cursor = 'pointer';
          options.getElementById('car').addEventListener('click', function() {
              
            if ($ >= 2) {
              $ -= 2;
              Car();
            } else {
                alert('You need $2s');
            }

          });
         
          options.getElementById('money').style.position = 'fixed';
          options.getElementById('money').style.top = '-5px';
          options.getElementById('money').style.left = '10px';
          options.getElementById('level').style.position = 'fixed';
          options.getElementById('level').style.top = '-5px';
          options.getElementById('level').style.right = '10px';
          options.getElementById('htp').style.position = 'fixed';
          options.getElementById('htp').style.background = 'yellow';
          options.getElementById('htp').style.color = 'white';
          options.getElementById('htp').style.fontSize = '20px';
          options.getElementById('htp').style.width = '100px';
          options.getElementById('htp').style.height = '100px';
          options.getElementById('htp').style.borderRadius = '100px';
          options.getElementById('htp').style.border = '3.5pt solid white';
          options.getElementById('htp').style.cursor = 'pointer';
          options.getElementById('htp').style.left = '230px';
          options.getElementById('htp').style.top = '280px';
          options.getElementById('htp').addEventListener('click', function() {
              
            alert('How To Play:\n\nClick Challenge 1 button to start playing the Ball game. Then, go to the green bar to get score. If you get 1000+ score, you get a dollar. Get $2s to unlock the Car, go somewhere around the green sqaure. If you did it, then the level increases. Be on level two to start the another challenge. It\'s much like a car game, but there is a timer for 30secs. If you win, your level increases. If you are on level 5, you can unlock ball bar mode which is chalenge 3. You should always start with 3pts. Hit the bar to get more points or else you lose the point. You can lose the game if you get 0 or less points. You win if you get 50 or more points. If you win the Ball Bar, you get a dollar. The level is also your score good luck!');
            
          });
          
          options.getElementById('cash').style.width = '100px';
          options.getElementById('cash').style.height = '100px';
          options.getElementById('cash').style.color = 'white';
          options.getElementById('cash').style.background = 'yellow';
          options.getElementById('cash').style.fontSize = '18px';
          options.getElementById('cash').style.borderRadius = '100px';
          options.getElementById('cash').style.border = '3.5pt solid white';
          options.getElementById('cash').style.cursor = 'pointer';
          options.getElementById('cash').style.position = 'fixed';
          options.getElementById('cash').style.top = '280px';
          options.getElementById('cash').style.left = '10px';
          options.getElementById('cash').addEventListener('click', function() {
              
            if ($ > limit) {
              alert('You\'ve Reached the money limit');
              
            } else {
              Ball();
            }
            
          });
          
          options.getElementById('cash').addEventListener('mousedown',function(){
              options.getElementById('cash').style.background = 'rgb(174, 212, 51)';
          });
          
          options.getElementById('bb').addEventListener('mousedown',function(){
              options.getElementById('bb').style.background = 'rgb(174, 212, 51)';
          });
          
          options.getElementById('car').addEventListener('mousedown',function(){
              options.getElementById('car').style.background = 'rgb(174, 212, 51)';
          });
          
          options.getElementById('htp').addEventListener('mousedown',function(){
              options.getElementById('htp').style.background = 'rgb(174, 212, 51)';
          });
          
          options.getElementById('challenge').addEventListener('mousedown',function(){
              options.getElementById('challenge').style.background = 'rgb(174, 212, 51)';
          });
          
          addEventListener('mouseup',function(){
              if(typeof options.getElementById('cash') !== 'undefined'){
              options.getElementById('cash').style.background = 'yellow';
              options.getElementById('htp').style.background = 'yellow';
              options.getElementById('bb').style.background = 'yellow';
              options.getElementById('car').style.background = 'yellow';
              options.getElementById('challenge').style.background = 'yellow';
              
              }
          });
          
          
         draw4 = setInterval(function() {
            options.getElementById('money').textContent = '$' + $;
            
          });
        }

        function Car() {
            clearInterval(draw4);
            options.body.title = 'Car Game';
          var randomY = Math.floor(Math.random() * 200);
          var randomX = Math.floor(Math.random() * 300);
          var PlayerX = 600;
          var PlayerY = 600;
          
          options.body.innerHTML = '<div id = "curpos"></div><h1 id = "coord"></h1><div id = "player"></div><button id = "cleft">Left</button><button id = "cright">Right</button><button id = "cup">Up</button><button id = "cdown">Down</button>';
          
          options.getElementById('player').style.background = 'yellow';
          options.getElementById('player').style.width = '100px';
          options.getElementById('player').style.height = '100px';
          options.getElementById('player').style.borderRadius = '100px';
          options.getElementById('player').style.border = '3.5pt solid white';
          options.getElementById('player').style.position = 'fixed';
          options.getElementById('player').style.top = '600px';
          options.getElementById('player').style.left = '600px';
     
          var kl = false;
          var ku = false;
          var kr = false;
          var kd = false;

          addEventListener('keydown', function(k) {
            if (k.key === 'w' | k.key === 'ArrowUp') {
              ku = true;
            }

            if (k.key === 'a' | k.key === 'ArrowLeft') {
              kl = true;
            }

            if (k.key === 's' | k.key === 'ArrowDown') {
              kd = true;
            }

            if (k.key === 'd' | k.key === 'ArrowRight') {
              kr = true;
            }


          });
          
          addEventListener('keyup', function() {
            kl = false;
            ku = false;
            kr = false;
            kd = false;
          });

          var win = options.getElementById('curpos');
          var CarBtn = {
              'Left': options.getElementById('cleft'),
              'Right': options.getElementById('cright'),
              'Up': options.getElementById('cup'),
              'Down': options.getElementById('cdown'),
          };
          
          CarBtn['Left'].addEventListener('mousedown',function(){
              kl = true;
              CarBtn['Left'].style.background = 'rgb(47, 38, 204)';
          });
          
          CarBtn['Right'].addEventListener('mousedown',function(){
              kr = true;
              CarBtn['Right'].style.background = 'rgb(47, 38, 204)';
          });
          
          CarBtn['Up'].addEventListener('mousedown',function(){
              ku = true;
              CarBtn['Up'].style.background = 'rgb(47, 38, 204)';
          });
          
          CarBtn['Down'].addEventListener('mousedown',function(){
              kd = true;
              CarBtn['Down'].style.background = 'rgb(47, 38, 204)';
          });
          
          win.style.background = 'green';
          win.style.position = 'fixed';
          win.style.border = '5pt solid white';
          win.style.width = '10px';
          win.style.height = '10px';
          
          CarBtn['Up'].style.cursor = 'pointer';
          CarBtn['Up'].style.borderRadius = '200px';
          CarBtn['Up'].style.width = '125px';
          CarBtn['Up'].style.height = '125px';
          CarBtn['Up'].style.border = '3.5pt solid white';
          CarBtn['Up'].style.background = 'blue';
          CarBtn['Up'].style.color = 'white';
          CarBtn['Up'].style.fontSize = '40px';
          CarBtn['Up'].style.position = 'fixed';
          CarBtn['Up'].style.left = '170px';
          CarBtn['Up'].style.top = '260px';
          
          CarBtn['Down'].style.cursor = 'pointer';
          CarBtn['Down'].style.borderRadius = '200px';
          CarBtn['Down'].style.width = '125px';
          CarBtn['Down'].style.height = '125px';
          CarBtn['Down'].style.border = '3.5pt solid white';
          CarBtn['Down'].style.background = 'blue';
          CarBtn['Down'].style.color = 'white';
          CarBtn['Down'].style.fontSize = '40px';
          CarBtn['Down'].style.position = 'fixed';
          CarBtn['Down'].style.left = '310px';
          CarBtn['Down'].style.top = '260px';
          
          CarBtn['Left'].style.cursor = 'pointer';
          CarBtn['Left'].style.borderRadius = '200px';
          CarBtn['Left'].style.width = '125px';
          CarBtn['Left'].style.height = '125px';
          CarBtn['Left'].style.border = '3.5pt solid white';
          CarBtn['Left'].style.background = 'blue';
          CarBtn['Left'].style.color = 'white';
          CarBtn['Left'].style.fontSize = '40px';
          CarBtn['Left'].style.position = 'fixed';
          CarBtn['Left'].style.left = '30px';
          CarBtn['Left'].style.top = '260px';
          
          CarBtn['Right'].style.cursor = 'pointer';
          CarBtn['Right'].style.borderRadius = '200px';
          CarBtn['Right'].style.width = '125px';
          CarBtn['Right'].style.height = '125px';
          CarBtn['Right'].style.border = '3.5pt solid white';
          CarBtn['Right'].style.background = 'blue';
          CarBtn['Right'].style.color = 'white';
          CarBtn['Right'].style.fontSize = '40px';
          CarBtn['Right'].style.position = 'fixed';
          CarBtn['Right'].style.left = '450px';
          CarBtn['Right'].style.top = '260px';
          
          addEventListener('mouseup',function(){
              ku = false;
              kd = false;
              kl = false;
              kr = false;
              
              if(typeof options.getElementById('cup') !== 'undefined'){
                  CarBtn['Left'].style.background = 'blue';
                  CarBtn['Right'].style.background = 'blue';
                  CarBtn['Up'].style.background = 'blue';
                  CarBtn['Down'].style.background = 'blue';
              }
          });
          
          
          var draw2 = setInterval(function() {
            options.getElementById('coord').textContent = PlayerX + ', ' + PlayerY;
            options.getElementById('player').style.left = PlayerX + 'px';
            options.getElementById('player').style.top = PlayerY + 'px';
            if (challenge) {
              time -= 1;
            }

            if (time < 0) {
              $ -= 1;
              clearInterval(draw2);
              Start();
            }

            if (PlayerX < 0) {
              PlayerX = 0;
            }

            if (PlayerY < 0) {
              PlayerY = 0;
            }

            if (PlayerX > 500) {
              PlayerX = 500;
            }

            if (PlayerY > 150) {
              PlayerY = 150;
            }

            if (kl) {
              PlayerX -= 1;
            }

            if (ku) {
              PlayerY -= 1;
            }

            if (kr) {
              PlayerX += 1;
            }

            if (kd) {
              PlayerY += 1;
            }

            win.style.left = (randomX + 30) + 'px';
            win.style.top = (randomY + 30) + 'px';
            
            if (PlayerX > randomX && PlayerX < (randomX + 50) && PlayerY > randomY && PlayerY < (randomY + 50)) {
              if (challenge) {
                clearInterval(draw2);
                time = 0;
                Start();
              }

              clearInterval(draw2);
              limit += 1;
              Start();

            }
          }, 5);
          
        }

        function Ball() {
          clearInterval(draw4);
          options.body.innerHTML = '<div id = "ball"></div><button id = "left">Left</button><button id = "right">Right</button><div id = "ob"></div><h1 id = "ballpt"></h1>';
          options.body.title = 'Ball Obstacle';
          var ob = options.getElementById('ob');
          ob.style.background = 'green';
          ob.style.width = '70px';
          ob.style.height = '10px';
          ob.style.border = '3.5pt solid white';
          ob.style.position = 'fixed';
          ob.style.top = '-20px';
          
          var obY = -20;
          var obX = Math.floor(Math.random() * 400);
          var LeftBtn = options.getElementById('left');
          var RightBtn = options.getElementById('right');
          var getBall = options.getElementById('ball');
          var ballX = 0;
          var ballLeft = false;
          var ballRight = false;
          
          getBall.style.borderRadius = '200px';
          getBall.style.width = '100px';
          getBall.style.height = '100px';
          getBall.style.border = '3.5pt solid white';
          getBall.style.background = 'yellow';
          getBall.style.position = 'fixed';
          getBall.style.left = '0px';
          getBall.style.top = '140px';
          
          LeftBtn.addEventListener('mousedown', function() {
            ballLeft = true;
            LeftBtn.style.background = 'rgb(47, 38, 204)';
          });

          RightBtn.addEventListener('mousedown', function() {
            ballRight = true;
            RightBtn.style.background = 'rgb(47, 38, 204)';
          });

          LeftBtn.style.cursor = 'pointer';
          LeftBtn.style.borderRadius = '200px';
          LeftBtn.style.width = '125px';
          LeftBtn.style.height = '125px';
          LeftBtn.style.border = '3.5pt solid white';
          LeftBtn.style.background = 'blue';
          LeftBtn.style.color = 'white';
          LeftBtn.style.fontSize = '40px';
          LeftBtn.style.position = 'fixed';
          LeftBtn.style.left = '30px';
          LeftBtn.style.top = '260px';
          
          RightBtn.style.cursor = 'pointer';
          RightBtn.style.borderRadius = '200px';
          RightBtn.style.width = '125px';
          RightBtn.style.height = '125px';
          RightBtn.style.border = '3.5pt solid white';
          RightBtn.style.background = 'blue';
          RightBtn.style.color = 'white';
          RightBtn.style.fontSize = '40px';
          RightBtn.style.position = 'fixed';
          RightBtn.style.left = '450px';
          RightBtn.style.top = '260px';

          addEventListener('mouseup', function() {
            ballLeft = false;
            ballRight = false;
            if(typeof LeftBtn !== undefined){
                LeftBtn.style.background = 'blue';
                RightBtn.style.background = 'blue';
            }
          });
          
          addEventListener('keydown', function(k) {
            if (k.keyCode === 37 | k.keyCode === 65) {
              ballLeft = true;
            }

            if (k.keyCode === 39 | k.keyCode === 68) {
              ballRight = true;
            }
            
          });
          
          addEventListener('keyup', function(k) {
            ballLeft = false;
            ballRight = false;
          });
          
          var Score = 0;
          var draw = setInterval(function() {
            options.getElementById('ballpt').textContent = Score;
            getBall.style.left = ballX + 'px';
            if (ballLeft && ballX > 0) {
              ballX = ballX - 2;
            }

            if (ballRight && ballX < 495) {
              ballX = ballX + 2;
            }

            ob.style.left = (obX + 100) + 'px';
            ob.style.top = obY + 'px';
            obY = obY + 0.5;
            
            if (obY > 400) {
              obY = -50;
              obX = Math.floor(Math.random() * 400);
            }

            if (obX < ballX && obY < 170 && obY > 140 && obX > (ballX - 200)) {
              Score += 1;
            }

            if (Score > 999) {
              $ += 1;
              Score = 0;
              clearInterval(draw);
              Start();
            }
            
          });
          
        }
        
        function BallBar() {
            options.body.innerHTML = '<button id = "bbl">Left</button><button id = "bbr">Right</button><div id = "bar"></div><div id = "ball-player"></div><h1 style = "color:white" id = "pt">'+Pt+'</h1>';
            
            options.body.title = 'Ball Bar';
            
            var BarBreak = 0;
            var bpX = 260;
            var bpY = 140;
            var bpYinvert = .45;
            var bpl = false
            var bpr = false;
            var Pt = 3;
            var BarX = Math.floor(Math.random() * 500);
            
            var Bar = options.getElementById('bar');
            var Ball = options.getElementById('ball-player');
            var PtEl = options.getElementById('pt');
            
            var bbBtn = {
                'left':options.getElementById('bbl'),
                'right':options.getElementById('bbr'),
            };
            
          bbBtn['left'].style.cursor = 'pointer';
          bbBtn['left'].style.borderRadius = '200px';
          bbBtn['left'].style.width = '125px';
          bbBtn['left'].style.height = '125px';
          bbBtn['left'].style.border = '3.5pt solid white';
          bbBtn['left'].style.background = 'blue';
          bbBtn['left'].style.color = 'white';
          bbBtn['left'].style.fontSize = '40px';
          bbBtn['left'].style.position = 'fixed';
          bbBtn['left'].style.left = '30px';
          bbBtn['left'].style.top = '260px';
          
          bbBtn['right'].style.cursor = 'pointer';
          bbBtn['right'].style.borderRadius = '200px';
          bbBtn['right'].style.width = '125px';
          bbBtn['right'].style.height = '125px';
          bbBtn['right'].style.border = '3.5pt solid white';
          bbBtn['right'].style.background = 'blue';
          bbBtn['right'].style.color = 'white';
          bbBtn['right'].style.fontSize = '40px';
          bbBtn['right'].style.position = 'fixed';
          bbBtn['right'].style.left = '450px';
          bbBtn['right'].style.top = '260px';
          
            Bar.style.width = '100px';
            Bar.style.height = '20px';
            Bar.style.background = 'cyan';
            Bar.style.border = '3.5pt solid white';
            Bar.style.position = 'fixed';
            
            Ball.style.width = '50px';
            Ball.style.height = '50px';
            Ball.style.background = 'yellow';
            Ball.style.borderRadius = '100px';
            Ball.style.border = '3.5pt solid white';
            Ball.style.position = 'fixed';
            Ball.style.left = '260px';
            Ball.style.top = '140px';
            
            
            bbBtn['left'].addEventListener('mousedown',function(){
                bpl = true;
                bbBtn['left'].style.background = 'rgb(47, 38, 204)';
            });
            
            bbBtn['right'].addEventListener('mousedown',function(){
                bpr = true;
                bbBtn['right'].style.background = 'rgb(47, 38, 204)';
            });
            
            addEventListener('mouseup',function(){
                bpl = false;
                bpr = false;
                
                if(typeof bbBtn['left'] !== 'undefined'){
                    bbBtn['left'].style.background = 'blue';
                    bbBtn['right'].style.background = 'blue';
                }
            });
            
            addEventListener('keydown',function(k){
                if(k.key === 'ArrowLeft' | k.key === 'a'){
                    bpl = true;
                }
                
                if(k.key === 'ArrowRight' | k.key === 'd'){
                    bpr = true;
                }
                
            });
            
            addEventListener('keyup',function(){
                bpl = false;
                bpr = false;
            });
            
            var draw5 = setInterval(function(){
                PtEl.textContent = Pt;
                
                if(bpX >= 520){
                    bpX = 520;
                }
                
                if(bpX <= 0){
                    bpX = 0;
                }
                
                if(bpl){
                    bpX--;
                }
                
                if(bpr){
                    bpX++;
                }
                
                BarBreak += 1;
                
                if(BarBreak >= 1000){
                BarX = Math.floor(Math.random() * 500);
                BarBreak = 0;
                }
                
                if(bpY <= 50 && bpX >= (BarX - 10)){
                    Pt++;
                } 
                
                else
                
                if(bpY <= 50 && bpX <= (BarX + 100)){
                    Pt--;
                }
                
                if(bpY <= 50 && bpX >= (BarX + 100)){
                    Pt-=2;
                }
                
                if(bpY <= 50){
                    bpYinvert = -.45;
                }
                
                if(bpY >= 205){
                    bpYinvert = .45;
                }
                
                bpY -= bpYinvert;
                
                if(Pt <= 0){
                    clearInterval(draw5);
                    Start();
                }
                
                if(Pt >= 50){
                    clearInterval(draw5);
                    $ += 30;
                    Start();
                }
                
                Ball.style.top = bpY + 'px';
                Ball.style.left = bpX + 'px';
                
                Bar.style.left = BarX + 'px';
            });
        }
        
        document.body.innerHTML = '<span style = "color:white;">v0.1.2 Alpha</span><h1 style = "position:fixed;color:white;font-size:75px;left:190px;top:70px;">Bavalt</h1><h3 style = "color:white;font-size:35px;position:fixed;left:200px;top:170px;cursor:pointer;" id = "start">Click to start</h3>';
    
        document.getElementById('start').addEventListener('click', Start);
        
      }
}

catch(error){
    document.body.style = 'background:black;color:white;font-family:sans-serif;';
    document.body.innerHTML = '<h1>Something Went Wrong:</h1><h2>' + error + '</h2>';
}
