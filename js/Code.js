const accessCode1 = "VARIABLE";
const accessCode2 = "FUNCTION";
const accessCode3 = "DATABASE";
var font1, font2;

 function preload(){
    font1 = loadFont("Font1.ttf");
    font2 = loadFont("Font2.ttf");
 }
function clues() {
    
    fill("white")
    textSize(15)
    text("R E V B A I L A", 110,150)
    //textFont("font2");
    fill("lightblue")
    text("Hint: Always changing, not constant !!", 110,170)
    
    fill("white")
    textSize(15)
    //textFont("font2");
    text("C U T N I F O N", 660,150)
    fill("lightblue")
    text("Hint: What are 'draw', 'setup', 'preload' called as?", 660, 170)

    fill("white")
    textSize(15)
    //textFont("font2");
    text("A T A D A S B A", 400,270)
    fill("lightblue")
    text("Hint: A place from which you can instantly get data in realtime", 400,290)
    
    

}