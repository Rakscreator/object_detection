img = "";
status = "";
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
    fill("#ff0000")
    text("dog",45,75)
    noFill();
    stroke("#ff0000");
    rect(30,60,450,350);
    fill("#ff0000");
    text("cat",310,105);
    noFill();
    stroke("#ff0000");
    rect(300,90,270,310);
}
function modelloaded(){
    console.log("cocossd loaded");
    objectDetector.detect(img,gotResults);
    status = true;
}
function gotResults(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
    }
}