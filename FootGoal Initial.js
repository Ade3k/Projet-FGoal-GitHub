// Création d'un canevas
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

// couleur dans le canevas 
document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');

// coouleur terrain 
    ctx.fillStyle = 'rgba(34, 139, 34, 0.7)'
    ctx.fillRect(0, 83, 800, 517);

    // ciel droit 
    ctx.fillStyle = 'rgb(100, 220, 255)';
    ctx.fillRect(501, 0, 300, 78);

    // ciel gauche 
    ctx.fillStyle = 'rgb(100, 220, 255)';
    ctx.fillRect(0, 0, 299, 78);

    // RGBA
    ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
    ctx.fillRect(500, 50, 100, 100);

    // HSL
    ctx.fillStyle = 'hsl(120, 100%, 50%)';
    ctx.fillRect(50, 200, 100, 100);

    // HSLA
    ctx.fillStyle = 'hsla(240, 100%, 50%, 0.5)';
    ctx.fillRect(200, 200, 100, 100);

    // Utiliser l'id pour appliquer les styles
    var lescouleurCanvas = document.getElementById('game');
    lescouleurCanvas.forEach(function(canvas) {
        canvas.style.border = '2px solid green';
    });
});

// Propriétés des personnages et accessoires 
var player1 = {
    x: 30,
    y: 30,
    width: 5,
    height: 5,
    color: 'gray',
    speed: 5
};

var gardien = { 
    x: 60,
    y: 60,
    width: 5,
    height: 5,
    color: 'yellowgreen',
    speed: 5,
    frameIndex: 0,
    frameCount: 4, // Nombre de frames dans le sprite sheet
    dx: 2, // Vitesse du gardien
    tickCount: 0,
    ticksPerFrame: 10
}

var ballon = {
    x: canvas.width / 4, // position horizontale 1
    y: canvas.height / 8, // position verticale 2
    radius: 20, // rayon du ballon 
    color: 'black',
    dx: 2, // Vitesse du ballon 
    dy: 2 // Vitesse
};

var but = {
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

    var But = {
        x: 300,
        y: 0,
        width: 200,
        height: 80,
        color: 'white'
    };

    function drawZone() { // dessin de la zone de but
        ctx.fillStyle = But.color;
        ctx.fillRect(But.x, But.y, But.width, But.height);
    };

    function dansBut(x, y) { // vérification que la zone à bien été dessinée 
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

// création du but et du terrain 
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
        x: 0,  // Position horizontale de X de la zone de penalty
        y: 80,  // Position verticale de Y de la zone de penalty
        width: 800,  // Largeur de la zone de penalty
        height: 0  // Hauteur de la zone de penalty
    };

       var zoneDePenalty3 = {
        x: 0,  // Position horizontale de X de la zone de penalty
        y: 500,  // Position verticale de Y de la zone de penalty
        width: 800,  // Largeur de la zone de penalty
        height: 0  // Hauteur de la zone de penalty
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
    var startAngle = 0; // Angle de départ, en radians
    var endAngle = Math.PI * 2; // Angle de fin, en radians (2 * PI est un cercle complet)
    
    ctx.beginPath(); 
    ctx.arc(x, y, radius, startAngle, endAngle); 
    ctx.fill(); // Remplir le cercle 
    ctx.stroke(); // Tracer le contour du cercle

    // Dessin du 2ème cercle 
    var x = 50; // Coordonnée x du centre du cercle
    var y = -5; // Coordonnée y du centre du cercle
    var radius = 50; // Rayon du cercle
    var startAngle = 0; // Angle de départ, en radians
    var endAngle = Math.PI * 2; // Angle de fin, en radians (2 * PI est un cercle complet)
    
    ctx.beginPath(); 
    ctx.arc(x, y, radius, startAngle, endAngle); 
    ctx.fill(); // Remplir le cercle 
    ctx.stroke(); // Tracer le contour du cercle

    // Dessin du 2ème cercle 
    var x = 90; // Coordonnée x du centre du cercle
    var y = -30; // Coordonnée y du centre du cercle
    var radius = 50; // Rayon du cercle
    var startAngle = 0; // Angle de départ, en radians
    var endAngle = Math.PI * 2; // Angle de fin, en radians (2 * PI est un cercle complet)
    
    ctx.beginPath(); 
    ctx.arc(x, y, radius, startAngle, endAngle); 
    ctx.fill(); // Remplir le cercle 
    ctx.stroke(); // Tracer le contour du cercle

    // Dessin du 2ème cercle 
    var x = 650; // Coordonnée x du centre du cercle
    var y = -30; // Coordonnée y du centre du cercle
    var radius = 50; // Rayon du cercle
    var startAngle = 0; // Angle de départ, en radians
    var endAngle = Math.PI * 2; // Angle de fin, en radians (2 * PI est un cercle complet)
    
    ctx.beginPath(); 
    ctx.arc(x, y, radius, startAngle, endAngle); 
    ctx.fill(); // Remplir le cercle 
    ctx.stroke(); // Tracer le contour du cercle

    // Dessin du 2ème cercle 
    var x = 600; // Coordonnée x du centre du cercle
    var y = -20; // Coordonnée y du centre du cercle
    var radius = 50; // Rayon du cercle
    var startAngle = 0; // Angle de départ, en radians
    var endAngle = Math.PI * 2; // Angle de fin, en radians (2 * PI est un cercle complet)
    
    ctx.beginPath(); 
    ctx.arc(x, y, radius, startAngle, endAngle); 
    ctx.fill(); // Remplir le cercle 
    ctx.stroke(); // Tracer le contour du cercle

    // Dessin du 2ème cercle 
    var x = 730; // Coordonnée x du centre du cercle
    var y = -5; // Coordonnée y du centre du cercle
    var radius = 50; // Rayon du cercle
    var startAngle = 0; // Angle de départ, en radians
    var endAngle = Math.PI * 2; // Angle de fin, en radians (2 * PI est un cercle complet)
    
    ctx.beginPath(); 
    ctx.arc(x, y, radius, startAngle, endAngle); 
    ctx.fill(); // Remplir le cercle 
    ctx.stroke(); // Tracer le contour du cercle

    // Dessin du 2ème cercle 
    var x = 800; // Coordonnée x du centre du cercle
    var y = -5; // Coordonnée y du centre du cercle
    var radius = 50; // Rayon du cercle
    var startAngle = 0; // Angle de départ, en radians
    var endAngle = Math.PI * 2; // Angle de fin, en radians (2 * PI est un cercle complet)
    
    ctx.beginPath(); 
    ctx.arc(x, y, radius, startAngle, endAngle); 
    ctx.fill(); // Remplir le cercle 
    ctx.stroke(); // Tracer le contour du cercle
});


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










var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var ballon = {
    x: canvas.width / 4, // position horizontale 1
    y: canvas.height / 8, // position verticale 2
    radius: 20, // rayon du ballon 
    color: 'black',
    dx: 2, // Vitesse du ballon 
    dy: 2 // Vitesse
};

var imgGardien = new Image(); // Charger le sprite du gardien 
imgGardien.src = 'sprite gardien.png';

var gardien = { 
    x: 60,
    y: 60,
    width: 5,
    height: 5,
    color: 'yellowgreen',
    speed: 5,
    frameIndex: 0,
    frameCount: 4, // Nombre de frames dans le sprite sheet
    dx: 2, // Vitesse du gardien
    tickCount: 0,
    ticksPerFrame: 10
}

imgGardienmg.onload = function() {
    draw();
};

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballon.x, ballon.y, ballon.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#FF4500';
    ctx.fill();
    ctx.closePath();
}

function drawgardien() {
    const frameX = gardien.frameIndex * gardien.width;
    ctx.drawImage(imgGardien, frameX, 0, gardien.width, gardien.height, gardien.x, gardien.y, gardien.width, goalkeeper.height);
}

function updateBallPosition() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.dy < 5) {
        ball.dy += 0.1; // gravité
    }
    ball.dx *= 0.99; // friction
    ball.dy *= 0.99;

    // Collision avec les murs du canvas
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
    }
}

function updateGoalkeeperPosition() {
    goalkeeper.x += goalkeeper.dx;

    // Collision avec les murs du but
    if (goalkeeper.x + goalkeeper.width > canvas.width * 3 / 4 || goalkeeper.x < canvas.width / 4) {
        goalkeeper.dx = -goalkeeper.dx;
    }

    // Mettre à jour l'animation du gardien
    goalkeeper.tickCount++;
    if (goalkeeper.tickCount > goalkeeper.ticksPerFrame) {
        goalkeeper.tickCount = 0;
        goalkeeper.frameIndex = (goalkeeper.frameIndex + 1) % goalkeeper.frameCount;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGoal();
    drawBall();
    drawGoalkeeper();
    updateBallPosition();
    updateGoalkeeperPosition();
    requestAnimationFrame(draw);
}

draw();

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Calcul de la direction et de la force du tir
    const angle = Math.atan2(mouseY - ball.y, mouseX - ball.x);
    const power = 5;

    ball.dx = power * Math.cos(angle);
    ball.dy = power * Math.sin(angle);
});






























































// afficher aléatoirement une compétence 
// point de départ lee point de pénalty et mouvement 

// faire un ballon sur le point de pénalty 

// parramettrer le mouvement du ballon du point de pénalty au but (ou en dehors) avec un mouvement parabolique 
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