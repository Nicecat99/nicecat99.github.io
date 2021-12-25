
var that;
that = document.createElement('head');
document.querySelector('html').appendChild(that);
that = document.createElement('meta');
that.charset = 'utf-8';
document.querySelector('head').appendChild(that);
that = document.createElement('body');
document.querySelector('html').appendChild(that);
document.title = 'Bavalt';
      
    document.body.style.background = 'black';
    document.body.innerHTML = '<h1 style = "color:white;cursor:default;font-family:sans-serif;position:fixed;top:120px;left:140px;font-size:70px;">Nicecat99</h1><div id = "logo"></div><div id = "invis"></div>';

        var logoX = -100;
        var speed = 0.1;
        var logo = document.getElementById('logo');
        document.body.style.cursor = 'wait';
        var cursor = document.getElementById('invis');
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
        logo.style.border = '5.5pt solid white';
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
      
      document.body.style.fontFamily = 'sans-serif';
      var draw4;
      var $ = 0;
      var challenge = false;
      var limit = 1;
      var time = 30000;
      function Play() {
        document.body.style.cursor = 'default';
        function Start() {
        document.body.title = 'Menu';
        if(challenge){
          time = 30000;
          challenge = false;
        }
          
          document.body.style.color = 'white';
          document.body.style.background = 'black';
          document.body.innerHTML = '<button id = "challenge">Challenge 2</button><button id = "Level-Up">Level Up</button><h1 id = "level">Level ' + limit + '</h1><h1 id = "money">$' + $ + '</h1><button id = "cash">Challenge 1</button><button id = "htp">How To Play</button><h1 id = "menu">Select</h1><button id = "bb">Challenge 3</button>';

          document.getElementById('bb').style.position = 'fixed';
          document.getElementById('bb').style.top = '280px';
          document.getElementById('bb').style.left = '450px';
          document.getElementById('bb').style.width = '100px';
          document.getElementById('bb').style.height = '100px';
          document.getElementById('bb').style.borderRadius = '100px';
          document.getElementById('bb').style.border = '5.5pt solid white';
          document.getElementById('bb').style.background = 'yellow';
          document.getElementById('bb').style.color = 'white';
          document.getElementById('bb').style.fontSize = '18px';
          document.getElementById('bb').style.cursor = 'pointer';
          
          document.getElementById('menu').style.position = 'fixed';
          document.getElementById('menu').style.left = '220px';
          document.getElementById('menu').style.top = '100px';
          document.getElementById('menu').style.fontSize = '50px';

        document.getElementById('bb').addEventListener('click',function(){
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

          document.getElementById('challenge').style.background = 'yellow';
          document.getElementById('challenge').style.color = 'white';
          document.getElementById('challenge').style.border = '5.5pt solid white';
          document.getElementById('challenge').style.width = '100px';
          document.getElementById('challenge').style.height = '100px';
          document.getElementById('challenge').style.borderRadius = '100px';
          document.getElementById('challenge').style.fontSize = '17px';
          document.getElementById('challenge').style.cursor = 'pointer';
          document.getElementById('Level-Up').style.background = 'yellow';
          document.getElementById('Level-Up').style.border = '5.5pt solid white';
          document.getElementById('challenge').style.position = 'fixed';
          document.getElementById('challenge').style.top = '280px';
          document.getElementById('challenge').style.left = '340px';
          
          document.getElementById('challenge').addEventListener('click', function() {
              
            if(limit === 1){
                alert('Be on level 2+');
            }
            
            if(limit !== 1 && $ <= 2){
                alert('You need $3s');
            }
            if ($ >= 3) {
              $ -= 2;
              challenge = true;
              LevelUp();
            }
            
          });
            
          document.getElementById('Level-Up').style.width = '100px';
          document.getElementById('Level-Up').style.height = '100px';
          document.getElementById('Level-Up').style.position = 'fixed';
          document.getElementById('Level-Up').style.left = '120px';
          document.getElementById('Level-Up').style.top = '280px';
          document.getElementById('Level-Up').style.color = 'white';
          document.getElementById('Level-Up').style.borderRadius = '100px';
          document.getElementById('Level-Up').style.fontSize = '20px';
          document.getElementById('Level-Up').style.cursor = 'pointer';
          document.getElementById('Level-Up').addEventListener('click', function() {
              
            if ($ >= 2) {
              $ -= 2;
              LevelUp();
            } else {
                alert('You need $2s');
            }

          });
         
          document.getElementById('money').style.position = 'fixed';
          document.getElementById('money').style.top = '-5px';
          document.getElementById('money').style.left = '10px';
          document.getElementById('level').style.position = 'fixed';
          document.getElementById('level').style.top = '-5px';
          document.getElementById('level').style.right = '10px';
          document.getElementById('htp').style.position = 'fixed';
          document.getElementById('htp').style.background = 'yellow';
          document.getElementById('htp').style.color = 'white';
          document.getElementById('htp').style.fontSize = '20px';
          document.getElementById('htp').style.width = '100px';
          document.getElementById('htp').style.height = '100px';
          document.getElementById('htp').style.borderRadius = '100px';
          document.getElementById('htp').style.border = '5.5pt solid white';
          document.getElementById('htp').style.cursor = 'pointer';
          document.getElementById('htp').style.left = '230px';
          document.getElementById('htp').style.top = '280px';
          document.getElementById('htp').addEventListener('click', function() {
              
            alert('How To Play:\n\nClick Challenge 1 button to start playing the Ball game. Then, go to the green bar to get score. If you get 1000+ score, you get a dollar. Get $2s to unlock the Level Up, go somewhere around the green sqaure. If you did it, then the level increases. Be on level two to start the another challenge. It\'s much like a Level Up game, but there is a timer for 30secs. If you win, your level increases. If you are on level 5, you can unlock ball bar mode which is chalenge 3. You should always start with 3pts. Hit the bar to get more points or else you lose the point. You can lose the game if you get 0 or less points. You win if you get 50 or more points. If you win the Ball Bar, you get a dollar. The level is also your score good luck!');
            
          });
          
          document.getElementById('cash').style.width = '100px';
          document.getElementById('cash').style.height = '100px';
          document.getElementById('cash').style.color = 'white';
          document.getElementById('cash').style.background = 'yellow';
          document.getElementById('cash').style.fontSize = '18px';
          document.getElementById('cash').style.borderRadius = '100px';
          document.getElementById('cash').style.border = '5.5pt solid white';
          document.getElementById('cash').style.cursor = 'pointer';
          document.getElementById('cash').style.position = 'fixed';
          document.getElementById('cash').style.top = '280px';
          document.getElementById('cash').style.left = '10px';
          document.getElementById('cash').addEventListener('click', function() {
              
            if ($ > limit) {
              alert('You\'ve Reached the money limit');
              
            } else {
              Ball();
            }
            
          });
          
          document.getElementById('cash').addEventListener('mousedown',function(){
              document.getElementById('cash').style.background = 'rgb(174, 212, 51)';
          });
          
          document.getElementById('bb').addEventListener('mousedown',function(){
              document.getElementById('bb').style.background = 'rgb(174, 212, 51)';
          });
          
          document.getElementById('Level-Up').addEventListener('mousedown',function(){
              document.getElementById('Level-Up').style.background = 'rgb(174, 212, 51)';
          });
          
          document.getElementById('htp').addEventListener('mousedown',function(){
              document.getElementById('htp').style.background = 'rgb(174, 212, 51)';
          });
          
          document.getElementById('challenge').addEventListener('mousedown',function(){
              document.getElementById('challenge').style.background = 'rgb(174, 212, 51)';
          });
          
          addEventListener('mouseup',function(){
              if(typeof document.getElementById('cash') !== 'undefined'){
              document.getElementById('cash').style.background = 'yellow';
              document.getElementById('htp').style.background = 'yellow';
              document.getElementById('bb').style.background = 'yellow';
              document.getElementById('Level-Up').style.background = 'yellow';
              document.getElementById('challenge').style.background = 'yellow';
              
              }
          });
          
          
         draw4 = setInterval(function() {
            document.getElementById('money').textContent = '$' + $;
            
          });
        }

        function LevelUp() {
            clearInterval(draw4);
            document.body.title = 'Level-Up Game';
          var randomY = Math.floor(Math.random() * 170);
          var randomX = Math.floor(Math.random() * 270);
          var PlayerX = 600;
          var PlayerY = 600;
          
          document.body.innerHTML = '<div id = "curpos"></div><h1 id = "coord"></h1><div id = "player"></div><button id = "cleft">Left</button><button id = "cright">Right</button><button id = "cup">Up</button><button id = "cdown">Down</button><button id = "cleave">Leave</button>';
          
          document.getElementById('player').style.background = 'yellow';
          document.getElementById('player').style.width = '100px';
          document.getElementById('player').style.height = '100px';
          document.getElementById('player').style.borderRadius = '100px';
          document.getElementById('player').style.border = '5.5pt solid white';
          document.getElementById('player').style.position = 'fixed';
          document.getElementById('player').style.top = '600px';
          document.getElementById('player').style.left = '600px';
     
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

          var win = document.getElementById('curpos');
          var luBtn = {
              'Left': document.getElementById('cleft'),
              'Right': document.getElementById('cright'),
              'Up': document.getElementById('cup'),
              'Down': document.getElementById('cdown'),
              'Leave': document.getElementById('cleave'),
          };
          
          luBtn['Leave'].style.position = 'fixed';
          luBtn['Leave'].style.left = '514px';
          luBtn['Leave'].style.top = '10px';
          luBtn['Leave'].style.width = '75px';
          luBtn['Leave'].style.height = '75px';
          luBtn['Leave'].style.borderRadius = '100px';
          luBtn['Leave'].style.fontSize = '12px';
          luBtn['Leave'].style.border = '5.5pt solid white';
          luBtn['Leave'].style.background = 'blue';
          luBtn['Leave'].style.color = 'white';
          luBtn['Leave'].style.cursor = 'pointer';
          
          luBtn['Leave'].addEventListener('mousedown', function(){
            luBtn['Leave'].style.background = 'rgb(47, 38, 204)';
        });
        
          luBtn['Leave'].addEventListener('click', function(){
              clearInterval(draw2);
              Start();
              });
        
          luBtn['Left'].addEventListener('mousedown',function(){
              kl = true;
              luBtn['Left'].style.background = 'rgb(47, 38, 204)';
          });
          
          luBtn['Right'].addEventListener('mousedown',function(){
              kr = true;
              luBtn['Right'].style.background = 'rgb(47, 38, 204)';
          });
          
          luBtn['Up'].addEventListener('mousedown',function(){
              ku = true;
              luBtn['Up'].style.background = 'rgb(47, 38, 204)';
          });
          
          luBtn['Down'].addEventListener('mousedown',function(){
              kd = true;
              luBtn['Down'].style.background = 'rgb(47, 38, 204)';
          });
          
          
          win.style.background = 'green';
          win.style.position = 'fixed';
          win.style.border = '5.5pt solid white';
          win.style.width = '10px';
          win.style.height = '10px';
          
          luBtn['Up'].style.cursor = 'pointer';
          luBtn['Up'].style.borderRadius = '200px';
          luBtn['Up'].style.width = '125px';
          luBtn['Up'].style.height = '125px';
          luBtn['Up'].style.border = '5.5pt solid white';
          luBtn['Up'].style.background = 'blue';
          luBtn['Up'].style.color = 'white';
          luBtn['Up'].style.fontSize = '40px';
          luBtn['Up'].style.position = 'fixed';
          luBtn['Up'].style.left = '170px';
          luBtn['Up'].style.top = '260px';
          
          luBtn['Down'].style.cursor = 'pointer';
          luBtn['Down'].style.borderRadius = '200px';
          luBtn['Down'].style.width = '125px';
          luBtn['Down'].style.height = '125px';
          luBtn['Down'].style.border = '5.5pt solid white';
          luBtn['Down'].style.background = 'blue';
          luBtn['Down'].style.color = 'white';
          luBtn['Down'].style.fontSize = '40px';
          luBtn['Down'].style.position = 'fixed';
          luBtn['Down'].style.left = '310px';
          luBtn['Down'].style.top = '260px';
          
          luBtn['Left'].style.cursor = 'pointer';
          luBtn['Left'].style.borderRadius = '200px';
          luBtn['Left'].style.width = '125px';
          luBtn['Left'].style.height = '125px';
          luBtn['Left'].style.border = '5.5pt solid white';
          luBtn['Left'].style.background = 'blue';
          luBtn['Left'].style.color = 'white';
          luBtn['Left'].style.fontSize = '40px';
          luBtn['Left'].style.position = 'fixed';
          luBtn['Left'].style.left = '30px';
          luBtn['Left'].style.top = '260px';
          
          luBtn['Right'].style.cursor = 'pointer';
          luBtn['Right'].style.borderRadius = '200px';
          luBtn['Right'].style.width = '125px';
          luBtn['Right'].style.height = '125px';
          luBtn['Right'].style.border = '5.5pt solid white';
          luBtn['Right'].style.background = 'blue';
          luBtn['Right'].style.color = 'white';
          luBtn['Right'].style.fontSize = '40px';
          luBtn['Right'].style.position = 'fixed';
          luBtn['Right'].style.left = '450px';
          luBtn['Right'].style.top = '260px';
          
          addEventListener('mouseup',function(){
              ku = false;
              kd = false;
              kl = false;
              kr = false;
              
              if(typeof document.getElementById('cup') !== 'undefined'){
                  luBtn['Left'].style.background = 'blue';
                  luBtn['Right'].style.background = 'blue';
                  luBtn['Up'].style.background = 'blue';
                  luBtn['Down'].style.background = 'blue';
                  luBtn['Leave'].style.background = 'blue';
              }
          });
          
          
          var draw2 = setInterval(function() {
            document.getElementById('coord').textContent = PlayerX + ', ' + PlayerY;
            document.getElementById('player').style.left = PlayerX + 'px';
            document.getElementById('player').style.top = PlayerY + 'px';
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
          document.body.innerHTML = '<div id = "ball"></div><button id = "left">Left</button><button id = "right">Right</button><div id = "ob"></div><h1 id = "ballpt"></h1><button id = "bl">Leave</button>';
          document.body.title = 'Ball Obstacle';
          var ob = document.getElementById('ob');
          ob.style.background = 'green';
          ob.style.width = '70px';
          ob.style.height = '10px';
          ob.style.border = '5.5pt solid white';
          ob.style.position = 'fixed';
          ob.style.top = '-20px';
          
          var obY = -20;
          var obX = Math.floor(Math.random() * 400);
          var LeftBtn = document.getElementById('left');
          var RightBtn = document.getElementById('right');
          var bl = document.getElementById('bl');
          var getBall = document.getElementById('ball');
          var ballX = 0;
          var ballLeft = false;
          var ballRight = false;
          
          bl.style.position = 'fixed';
          bl.style.left = '514px';
          bl.style.top = '10px';
          bl.style.width = '75px';
          bl.style.height = '75px';
          bl.style.borderRadius = '100px';
          bl.style.fontSize = '12px';
          bl.style.border = '5.5pt solid white';
          bl.style.background = 'blue';
          bl.style.color = 'white';
          bl.style.cursor = 'pointer';
          
          bl.addEventListener('mousedown', function(){
            bl.style.background = 'rgb(47, 38, 204)';
          });
        
          bl.addEventListener('click', function(){
            clearInterval(draw);
            Start();
          });
              
          getBall.style.borderRadius = '200px';
          getBall.style.width = '100px';
          getBall.style.height = '100px';
          getBall.style.border = '5.5pt solid white';
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
          LeftBtn.style.border = '5.5pt solid white';
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
          RightBtn.style.border = '5.5pt solid white';
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
                bl.style.background = 'blue';
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
          document.getElementById('ballpt').style.color = 'white';
          var draw = setInterval(function() {
            document.getElementById('ballpt').textContent = Score;
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
            document.body.innerHTML = '<button id = "bbe">Leave</button><button id = "bbl">Left</button><button id = "bbr">Right</button><div id = "bar"></div><div id = "ball-player"></div><h1 style = "color:white" id = "pt">'+Pt+'</h1>';
            
            document.body.title = 'Ball Bar';
            
            var BarBreak = 0;
            var bpX = 260;
            var bpY = 140;
            var bpYinvert = .45;
            var bpl = false
            var bpr = false;
            var Pt = 3;
            var BarX = Math.floor(Math.random() * 500);
            
            var Bar = document.getElementById('bar');
            var Ball = document.getElementById('ball-player');
            var PtEl = document.getElementById('pt');
            
            var bbBtn = {
                 'left':document.getElementById('bbl'),
                'right':document.getElementById('bbr'),
                'leave':document.getElementById('bbe'),
            };
            
          bbBtn['leave'].style.position = 'fixed';
          bbBtn['leave'].style.left = '514px';
          bbBtn['leave'].style.top = '10px';
          bbBtn['leave'].style.width = '75px';
          bbBtn['leave'].style.height = '75px';
          bbBtn['leave'].style.borderRadius = '100px';
          bbBtn['leave'].style.fontSize = '12px';
          bbBtn['leave'].style.border = '5.5pt solid white';
          bbBtn['leave'].style.background = 'blue';
          bbBtn['leave'].style.color = 'white';
          bbBtn['leave'].style.cursor = 'pointer';
          
          bbBtn['leave'].addEventListener('mousedown', function(){
            bbBtn['leave'].style.background = 'rgb(47, 38, 204)';
          });
        
          bbBtn['leave'].addEventListener('click', function(){
            clearInterval(draw5);
            Start();
          });
          
          bbBtn['left'].style.cursor = 'pointer';
          bbBtn['left'].style.borderRadius = '200px';
          bbBtn['left'].style.width = '125px';
          bbBtn['left'].style.height = '125px';
          bbBtn['left'].style.border = '5.5pt solid white';
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
          bbBtn['right'].style.border = '5.5pt solid white';
          bbBtn['right'].style.background = 'blue';
          bbBtn['right'].style.color = 'white';
          bbBtn['right'].style.fontSize = '40px';
          bbBtn['right'].style.position = 'fixed';
          bbBtn['right'].style.left = '450px';
          bbBtn['right'].style.top = '260px';
          
            Bar.style.width = '100px';
            Bar.style.height = '20px';
            Bar.style.background = 'cyan';
            Bar.style.border = '5.5pt solid white';
            Bar.style.position = 'fixed';
            
            Ball.style.width = '50px';
            Ball.style.height = '50px';
            Ball.style.background = 'yellow';
            Ball.style.borderRadius = '100px';
            Ball.style.border = '5.5pt solid white';
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
                    bbBtn['leave'].style.background = 'blue';
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
        
        document.body.innerHTML = '<span style = "color:white;">v1.0</span><h1 style = "position:fixed;color:white;font-size:75px;left:190px;top:70px;">Bavalt</h1><h3 style = "color:white;font-size:35px;position:fixed;left:200px;top:170px;cursor:pointer;" id = "start">Click to start</h3>';
    
        document.getElementById('start').addEventListener('click', Start);
        
      }
