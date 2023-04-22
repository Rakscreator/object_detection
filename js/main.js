img = "";
status = "";
objects = [];
function preload(){
    img = loadImage("img/dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}
function draw(){
image(img,0,0,640,420);
if(status != ""){
    for (i = 0; i < objects.length; i++) {
        percent = floor(objects[i].confidence * 100);
        document.getElementById("status").innerHTML = "Status : Object(s) Detected"
        fill("#FF0000");
        text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x-10,objects[i].y-20,objects[i].width,objects[i].height);
        
    }
}
}
function modelloaded(){
    console.log("cocossd loaded");
    objectDetector.detect(img,gotResults);
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