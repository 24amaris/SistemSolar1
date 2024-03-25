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

    //razele
        triangle(530, 272, 560, 220 , 585 , 275);
        triangle(590, 280, 640, 254 , 621 , 310);
        triangle(625, 315, 680, 330 , 629 , 355);
        triangle(630, 360, 670, 395 , 613 , 400);
        triangle(575, 425, 620, 455 , 610 , 405);
        triangle(520, 425, 550, 475 , 570 , 430);
        triangle(480, 390, 464, 450 , 513 , 425);
        triangle(470, 340, 430, 380 , 480 , 385);
        triangle(487, 300, 429, 290 , 472 , 335);
        triangle(490, 297, 479, 233 , 525 , 275);
    }
