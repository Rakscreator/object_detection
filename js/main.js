img = "";
status = "";
objects = [];
function preload(){}
function setup(){
    canvas = createCanvas(640,470);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(640,470);
    video.hide();

    document.getElementById("no_of_objects").style = "display: none";
}
function draw(){
    image(video,0,0,640,470);
    if(status != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video,gotResults);
        for (i = 0; i < objects.length; i++) {
            percent = floor(objects[i].confidence * 100);
            document.getElementById("status").innerHTML = "Status : Object(s) Detected";
            document.getElementById("no_of_objects").style = "display: inline";
            document.getElementById("no_of_objects").innerHTML = "No. of object(s) Dectected : " + objects.length;
            fill(r,g,b);
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x-10,objects[i].y-20,objects[i].width,objects[i].height);
            
        }
    }
}
function start(){
    objectDetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}
function modelloaded(){
    console.log("cocossd loaded");
    status = true;
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}