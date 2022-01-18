var x = 0;
var y = 0;
var draw_circle = "";
var draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}
    recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognized as: " +content;
    if(content == "circle")
    {
        x = Math.floor(Math.random() * 800);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Started drawing circle";
        draw_circle = 'set';
    }
    if(content == "rectangle")
    {
        x = Math.floor(Math.random() * 800);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_rect = 'set';
    }
}

    function setup(){
        canvas = createCanvas(900,600);
    }

    function draw(){
        if(draw_circle == 'set'){
            radius = Math.floor(Math.random()*150);
            circle(x,y,radius);
            document.getElementById("status").innerHTML = "Circle has been drawn.";
            draw_circle = "";
        }
        if(draw_rect == 'set'){
            rect(x,y,90,60);
            document.getElementById("status").innerHTML = "Rectangle has been drawn.";
            draw_rect = "";
        }
    }