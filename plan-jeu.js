const ballon = {
    x: 400,
        y: 360,
        radius: 3, 
        width: 6, 
        height: 6,
}

const but = {
        x: 300,
        y: 0,
        width: 200,
        height: 80,
        color: 'white'
}

const isGoal = (but, ballon) => {
    return (
        ballon.x > but.x &&
        ballon.x + ballon.width < but.x + but.width &&
        ballon.y > but.y && 
        ballon.y + ballon.height > but.y + but.height    
        )
}


 .masque {
            /* gardien - position face au ballon */
            top: 100px;
            right: 710px;
            /*left:0px;*/
            width: 62px;
            /* pour changer la taille en longeur du masque dans le sprite */
            /*46px*/
            height: 83px;
            /*73px*/
            overflow: hidden;
            border: solid blueviolet;
            position: absolute;
        }



 .masque-2 {  // coordonnées masque et ballon au point de penalty
            /* ballon */
            top: 420px;
            right: 712px;
            /*left:0px;*/
            width: 40px;
            /* pour changer la taille en longeur du masque dans le sprite */
            /*46px*/
            height: 35px;
            /*73px*/
            overflow: hidden;
            border: solid blueviolet;
            position: absolute;
        }