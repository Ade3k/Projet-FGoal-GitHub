var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

// Couleurs dans le canevas 
document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');

// Coouleurs terrain 
    ctx.fillStyle = 'rgba(34, 139, 34, 0.7)'
    ctx.fillRect(0, 83, 800, 517);

    // Ciel droit 
    ctx.fillStyle = 'rgb(100, 220, 255)';
    ctx.fillRect(501, 0, 300, 78);

    // Ciel gauche 
    ctx.fillStyle = 'rgb(100, 220, 255)';
    ctx.fillRect(0, 0, 299, 78);

    // Utiliser l'id pour appliquer les styles
    var lescouleurCanvas = document.getElementById('game');
    lescouleurCanvas.forEach(function(canvas) {
        canvas.style.border = '2px solid green';
    });
});

// Propriétés des personnages et accessoires 
var gardien = { 
    x: 360,
    y: 360,
    width: 5,
    height: 5,
    speed: 5,
    frameIndex: 0,
    frameCount: 4, // Nombre de frames dans le sprite sheet
    dx: 2, // Vitesse du gardien
    tickCount: 0,
    ticksPerFrame: 10
};

var ballon = {
    x: canvas.width / 1, // position horizontale 1
    y: canvas.height / 2, // position verticale 2
    radius: 20, // rayon du ballon 
    color: 'black',
    dx: 2, // Vitesse du ballon 
    dy: 2 // Vitesse
};

var but = { // Ne pass toucher aux code 
    x: canvas.width / 2 - 400, // Position x du coin inférieur gauche du but
    y: canvas.height - 466.6,    // Position y du coin supérieur gauche du but
    width: 400,                // Largeur du but
    height: 133.33,               // Hauteur du but
    postWidth: 10,             // Largeur des poteaux du but
    color: 'white',            // Couleur du but
    filetColor: 'white'           // Couleur du filet
};
// creer arbitre si temps
                                                  
// Initialisation des événements click
document.addEventListener('DOMContentLoaded', function() {
    var canevas = document.getElementById('game'); // Sélectionner le canevas
    var ctx = canevas.getContext('2d');    

    var But = { // ne pas toucher au code 
        x: 300,
        y: 0,
        width: 200,
        height: 80,
        color: 'white'
    };

    function drawZone() { // Dessin de la zone de but
        ctx.fillStyle = But.color;
        ctx.fillRect(But.x, But.y, But.width, But.height);
    };

    function dansBut(x, y) { // Vérification que la zone à bien été dessinée 
        return x > But.x && x < But.x + But.width &&
               y > But.y && y < But.y + But.height;
    };

    function handleCanvasClick(event) { // Fonction pour gérer les clics sur le canevas
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        if (dansBut(x, y)) {
            alert('Goooal ! \nFélicitations vous avez acquis une nouvelle compétence !');
        } else {
            alert('Vous avez échoué ...');
          }
    };

    canvas.addEventListener('click', handleCanvasClick); 
    
    drawZone();
});

// Création du but et du terrain 
document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');

    // Définir les dimensions de la zone de penalty
    var zoneDePenalty1 = {
        x: 150,  // Position horizontale de X de la zone de penalty
        y: 80,  // Position verticale de Y de la zone de penalty
        width: 500,  // Largeur de la zone de penalty
        height: 150  // Hauteur de la zone de penalty
    };

    var zoneDePenalty2 = {
        x: 0, 
        y: 80, 
        width: 800, 
        height: 0  
    };

       var zoneDePenalty3 = {
        x: 0, 
        y: 500, 
        width: 800, 
        height: 0 
    };

    // Définir les dimensions du point de penalty et de l'arc de cercle
    var pointDePenalty = {
        x: 400,
        y: 360,
        radius: 3
    };

    // l'arc de la zone de penalty 
    var penaltyArc = {
        x: 400,
        y: 500,
        radius: 180
    };

    // Dessin du terrain
    function drawPenaltyBox() {
        // dessin du rectangle de la zone de penalty
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 3;
        ctx.strokeRect(zoneDePenalty1.x, zoneDePenalty1.y, zoneDePenalty1.width, zoneDePenalty1.height);

        // dessin du trait du haut du 2ème rectangle de la zone de penalty (extérieur) 
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 3;
        ctx.strokeRect(zoneDePenalty2.x, zoneDePenalty2.y, zoneDePenalty2.width, zoneDePenalty2.height);

        // dessin du trait du bas du 2ème rectangle de la zone de penalty (extérieur) 
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 3;
        ctx.strokeRect(zoneDePenalty3.x, zoneDePenalty3.y, zoneDePenalty3.width, zoneDePenalty3.height);

        // Dessin du point de penalty
        ctx.beginPath();
        ctx.arc(pointDePenalty.x, pointDePenalty.y, pointDePenalty.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();

        // Dessin de l'arc de cercle
        ctx.beginPath();
        ctx.arc(penaltyArc.x, penaltyArc.y, penaltyArc.radius, 0, Math.PI, false);
        ctx.stroke();
    }
    drawPenaltyBox();
});

// dessin des filets et des poteaux 
document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');

    ctx.strokeStyle = 'black'; // la couleur du trait 
    ctx.lineWidth = 1; // l'épaisseur du trait
    
    // dessin des poteaux 
    ctx.beginPath(); // tracer une ligne 
    ctx.moveTo(500, 83); // Dessin d'une ligne de (500, 83) à (500, 0) (longeur, hauteur)
    ctx.lineTo(500, 0);
    ctx.stroke(); // valider le tracé de la ligne 

    ctx.beginPath(); 
    ctx.moveTo(490, 83); 
    ctx.lineTo(490, 10);
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(310, 10); 
    ctx.lineTo(490, 10);
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(310, 83); 
    ctx.lineTo(310, 10);
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(300, 83); 
    ctx.lineTo(300, 0);
    ctx.stroke();

    // filet horizontale 
    ctx.beginPath(); 
    ctx.moveTo(310, 83); // point à gauche 
    ctx.lineTo(490, 83); // point à droite 
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(310, 73); 
    ctx.lineTo(490, 73);
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(310, 63); 
    ctx.lineTo(490, 63);
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(310, 53); 
    ctx.lineTo(490, 53);
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(310, 43); 
    ctx.lineTo(490, 43);
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(310, 33); 
    ctx.lineTo(490, 33);
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(310, 23); 
    ctx.lineTo(490, 23);
    ctx.stroke();

    // filet vertical
    ctx.beginPath(); 
    ctx.moveTo(480, 83); // point du bas 
    ctx.lineTo(480, 10); // point du haut 
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(470, 83); 
    ctx.lineTo(470, 10); 
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(460, 83); 
    ctx.lineTo(460, 10); 
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(450, 83); 
    ctx.lineTo(450, 10); 
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(440, 83); 
    ctx.lineTo(440, 10); 
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(430, 83); 
    ctx.lineTo(430, 10); 
    ctx.stroke();
    
    ctx.beginPath(); 
    ctx.moveTo(420, 83); 
    ctx.lineTo(420, 10); 
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(410, 83); 
    ctx.lineTo(410, 10); 
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(400, 83); 
    ctx.lineTo(400, 10); 
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(390, 83); 
    ctx.lineTo(390, 10); 
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(380, 83); 
    ctx.lineTo(380, 10); 
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(370, 83); 
    ctx.lineTo(370, 10); 
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(360, 83); 
    ctx.lineTo(360, 10); 
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(350, 83); 
    ctx.lineTo(350, 10); 
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(340, 83); 
    ctx.lineTo(340, 10); 
    ctx.stroke();
    
    ctx.beginPath(); 
    ctx.moveTo(330, 83); 
    ctx.lineTo(330, 10); 
    ctx.stroke();

    ctx.beginPath(); 
    ctx.moveTo(320, 83); 
    ctx.lineTo(320, 10); 
    ctx.stroke();
});

// Dessin des nuages
document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'white'; // Couleur de remplissage du cercle
    ctx.strokeStyle = 'white'; // Couleur du contour du cercle
    ctx.lineWidth = 5; // Épaisseur du contour

    // Dessin du 1er cercle
    var x = 0; // Coordonnée x du centre du cercle
    var y = 0; // Coordonnée y du centre du cercle
    var radius = 50; // Rayon du cercle
    var startAngle = 0; // Angle de départ en radians
    var endAngle = Math.PI * 2; // Angle de fin en radians (2 * PI est un cercle complet)
    
    ctx.beginPath(); 
    ctx.arc(x, y, radius, startAngle, endAngle); 
    ctx.fill(); // Remplir le cercle 
    ctx.stroke(); // Tracer le contour du cercle

    // Dessin du 2ème cercle 
    var x = 50; 
    var y = -5; 
    var radius = 50; 
    var startAngle = 0; 
    var endAngle = Math.PI * 2; 
    
    ctx.beginPath(); 
    ctx.arc(x, y, radius, startAngle, endAngle); 
    ctx.fill();  
    ctx.stroke(); 

    // Dessin du 3ème cercle 
    var x = 90; 
    var y = -30; 
    var radius = 50; 
    var startAngle = 0; 
    var endAngle = Math.PI * 2; 
    
    ctx.beginPath(); 
    ctx.arc(x, y, radius, startAngle, endAngle); 
    ctx.fill(); 
    ctx.stroke(); 

    // Dessin du 4ème cercle 
    var x = 650; 
    var y = -30; 
    var radius = 50; 
    var startAngle = 0; 
    var endAngle = Math.PI * 2; 
    
    ctx.beginPath(); 
    ctx.arc(x, y, radius, startAngle, endAngle); 
    ctx.fill(); 
    ctx.stroke(); 

    // Dessin du 5ème cercle 
    var x = 600; 
    var y = -20; 
    var radius = 50; 
    var startAngle = 0; 
    var endAngle = Math.PI * 2; 
    
    ctx.beginPath(); 
    ctx.arc(x, y, radius, startAngle, endAngle); 
    ctx.fill();  
    ctx.stroke(); 

    // Dessin du 6ème cercle 
    var x = 730; 
    var y = -5; 
    var radius = 50; 
    var startAngle = 0; 
    var endAngle = Math.PI * 2; 
    
    ctx.beginPath(); 
    ctx.arc(x, y, radius, startAngle, endAngle); 
    ctx.fill();  
    ctx.stroke(); 

    // Dessin du 7ème cercle 
    var x = 800; 
    var y = -5; 
    var radius = 50; 
    var startAngle = 0; 
    var endAngle = Math.PI * 2; 
    
    ctx.beginPath(); 
    ctx.arc(x, y, radius, startAngle, endAngle); 
    ctx.fill();  
    ctx.stroke(); 
});
/*
// Dessin ballon 
let rect = {
    x: 380,
    y: 360,
    width: 20,
    height: 20
}

function drawRect() {
    ctx.clearRect (0, 0, game.width, game.height);
    ctx.fillStyle ='blue';
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height); // Pour dessiner le rectangle en utilisant les propriétés déclarées précedament 
}

drawRect()
/*
// Mouvements du carré 
 window.addEventListener ("keydown", function(e){ // penser a changer les constante si trop lent de 10 en 10 
    switch(e.key){
        case 'ArrowUp': 
            if(rect.y - 15 >= 0){ // supérieur ou égale à la hauteur de mon canvas alors on peut monter sinon non  
                rect.y -= 15;
            };
            break; 
        case 'ArrowDown':
                if(rect.y + rect.height + 15 <= game.height){
                    rect.y += 15;
                };
            break;
        case 'ArrowLeft':
                if(rect.x - 15 >= 0){
                    rect.x -= 15;
                };
            break;
        case 'ArrowRight':
            if(rect.x + rect.width + 15 <= game.width){
                rect.x += 15;
            };
            break;
    }  
    drawRect();
 })
 */








































 





class Ball {
    constructor(){
        this.x=380;
        this.y=360;
        this.ballWidth =20;
        this.ballHeight =20;
        this.offsetX=80; // ??? 
        this.offsetY=80;
        this.width = 50;
        this.height = 50;
        this.speedX=5;
        this.speedY=5;
        this.image = document.getElementById('ball');
    }

    draw(context){
        context.drawImage(this.image,this.offsetX,this.offsetY,this.ballWidth,this.ballHeight, this.x, this.y, this.width, this.width);
    }

    update(){
      
        this.x += this.speedX;
        this.y -= this.speedY;
        if(this.x < 550 || this.x > 950){
            this.speedX =0;
            this.speedY=0;
            this.y =450
        }else{
            this.speedX = Math.floor(Math.random()*5 -1);
            this.speedY = (this.speedX * this.speedX/2) 
        }

    }
};

window.addEventListener('load',function(){
    console.log('charge')
    const canvas = document.getElementById('canvas1');
    const ctx= canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
   
    const ball = new Ball()
    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ball.update();
        ball.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate()  
});















let ball = {
    x: 380,
    y: 360,
    width: 20,
    height: 20
};
let player = 0;
let tirBallon = 0;

// Dessin du score 
function drawScoreBox() {
    ctx.fillStyle = "blue";
    ctx.fillRect(640, 500, 160, 100);
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText(`Player: ${playerScore}`, 20, 30); // text temporaire
    ctx.fillText(`Goalkeeper: ${tirBallonScore}`, 20, 50);
};

// Repositiionnement du ballon 
function updateBall() {
    ball.x += ballon.dx;
    ball.y += ballon.dy; 

   // Collision 
    if (ballon.x + ballon.dx > canvas.width - ballon.radius || ballon.x + ballon.dx < ballon.radius) {
        ballon.dx = -ballon.dx;
    }
    if (ballon.y + ballon.dy > canvas.height - ballon.radius || ballon.y + ballon.dy < ballon.radius) {
        ballon.dy = -ballon.dy;
    }
};

// Check for a goal (this is a simple example, you'll need to adjust for your game logic)
function checkGoal() {
    if (ballon.y + ballon.dy < ballon.radius) {
        gardienScore++; //inverser
        resetBall();
    } else if (ballon.y + ballon.dy > canvas.height - ballon.radius) {
        tirBallonScore++;
        resetBall();
    }
}

drawScoreBox(); 
updateBall();  
checkGoal();
/*
// essin de tout
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawScoreBox();
}
*/

draw();

// relancer le jeu 
function update() {
    updateBall();
    checkGoal();
    draw();
    requestAnimationFrame(update);
}

update();































//fonction addEventListener 
//fonction event déplacement du ballon en y 
//sprite : utiliser les méthodes du canevas créer un ctx --> dessiner l'image ctx draw image



















// Configuration des trajectoires du ballon 
document.addEventListener('DOMContentLoaded', function updateBallPosition() {
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');

    var x = 200;
    var Y = 80;
    var poteaux = 16000; 

    ballon.x += ballon.dx;
    ballon.y += ballon.dy;

    // Gravité et friction
    if (ballon.dy < 5) {
        ballon.dy += 0.1; // gravité
    }
    ballon.dx *= 0.99; // friction
    ballon.dy *= 0.99;

    // Collision avec les poteaux du but 
    if (ballon.x + ballon.radius > poteaux.width || ballon.x - ballon.radius < 0) {
        ballon.dx = -ballon.dx;
    }
    if (ballon.y + ballon.radius > poteaux.height || ballon.y - ballon.radius < 0) {
        ballon.dy = -ballon.dy;
    }
});

function draw() {
    ctx.clearRect(0, 0, poteaux.width, poteaux.height);
    drawGoal();
    drawBall();
    updateBallPosition();
    requestAnimationFrame(draw);
};

draw();














/*
// Évenement du tir au but 
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Calcul de la direction et de la force du tir
    const angle = Math.atan2(mouseY - ball.y, mouseX - ballon.x);
    const power = 5;

    ball.dx = power * Math.cos(angle);
    ball.dy = power * Math.sin(angle);
});
*/










/*
function updategardienPosition() {
    gardien.x += gardien.dx;

    // Collision avec les murs du but
    if (gardien.x + gardien.width > poteaux.width * 3 / 4 || gardien.x < poteaux.width / 4) {
        gardien.dx = -gardien.dx;
    }

    // Mettre à jour l'animation du gardien
    gardien.tickCount++;
    if (gardien.tickCount > gardien.ticksPerFrame) {
        gardien.tickCount = 0;
        gardien.frameIndex = (gardien.frameIndex + 1) % gardien.frameCount;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawgardien();
    updateBallPosition();
    updategardienPosition();
    requestAnimationFrame(draw);
}

draw();
*/ 






























































// afficher aléatoirement une compétence 
// point de départ lee point de pénalty et mouvement 

// parramettrer le mouvement du ballon du point de pénalty au but (ou en dehors) 
// X du ballon > x rectzngle du but en & x de ballon + wi doit être inferieur de x de rectangle 


// Dessin du ballon 
//document.addEventListener('DOMContentLoaded', function() {
  //  var canevas = document.getElementById('game'); // Sélectionner le canevas
    //var ctx = canevas.getContext('2d');    

//    function drawBall() {
  //  ctx.beginPath();
    //ctx.arc(ballon.x, ballon.y, ballon.radius, 0, Math.PI * 2);
//    ctx.fillStyle = '#FF4500';
  //  ctx.fill();
    //ctx.closePath();
//    }
  //  drawBall()
//});



//coordonnée but 
/*function draw() {
  const canvas = document.getElementById("game");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.fillRect(300, 0, 200, 80);
    ctx.clearRect(310, 9, 180, 80);
   // ctx.strokeRect(50, 50, 50, 50);
  }draw();
};*/










    // Fonction pour mettre à jour la position du joueur
//    function updatePlayer() {
      //  if (keys['ArrowUp']) player.y -= player.speed;
    //    if (keys['ArrowDown']) player.y += player.speed;
  //      if (keys['ArrowLeft']) player.x -= player.speed;
//        if (keys['ArrowRight']) player.x += player.speed;

        // Empêcher le joueur de sortir du canevas
        //if (player.x < 0) player.x = 0;
      //  if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    //    if (player.y < 0) player.y = 0;
  //      if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
//    }

    // Fonction pour dessiner le joueur
    //function drawPlayer() {
    //    ctx.fillStyle = player.color;
  //      ctx.fillRect(player.x, player.y, player.width, player.height);
//    }

    // Fonction pour nettoyer le canevas
    //function clearCanvas() {
      //  ctx.clearRect(0, 0, canvas.width, canvas.height);
    //}

    // Boucle principale du jeu
    //function gameLoop() {
    //    clearCanvas();
  //      updatePlayer();
//        drawPlayer();
//        requestAnimationFrame(gameLoop);
   // }

    // Démarrer la boucle du jeu
//    gameLoop();
//});