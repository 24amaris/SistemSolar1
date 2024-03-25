function setup() {
    createCanvas(1200, 700);
    }
    
    function draw() {
    background("gray");

    //cercurile linii
        fill("gray");
        ellipse(630, 350, 1100, 600);
        ellipse(600, 350, 850, 560);
        ellipse(580, 350, 700, 480);
        ellipse(560, 350, 500, 450);
        ellipse(550, 350, 390, 440);

    //planetele
        fill("green");
        circle(1100, 500, 100);
        fill("lightblue");
        circle(990, 245, 70);
        fill("red");
        circle(270, 235, 50);
        fill("orange");
        circle(330, 270, 35);
        fill("purple");
        circle(405, 205, 25);

    //soarele
         fill("yellow");
         circle(550, 350, 150);

    
 
    }
