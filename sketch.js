function setup() {
    createCanvas(500, 500);
    background("blue");
  }
  
  function draw() {
    
  
    stroke("black");
    fill("white");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 25);
    }
  }
  