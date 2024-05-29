// variaveisdabolinha
let xbolinha=300
let ybolinha=200
let diametro=30

// velocidadebolinha
let velocidadexbolinha=6
let velocidadeybolinha=6

// variaveisdaraquete
let xraquete=5
let yraquete=150
let baseraquete=10
let alturaraquete=90

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrabolinha()
  velocidadebolinha()
  colisaoborda()
  mostraraquete()
}
  
  function mostraraquete(){
  rect(xraquete,yraquete,baseraquete,alturaraquete)
}

  function movimentoraquete(){
 if (KeyIsDown(UP_ARROW))
   yRaquete -=10
 if (KeyIsDown(DOWN_ARROW))
      yRaquete +=10
}
   
  function mostrabolinha(){
  circle(xbolinha,ybolinha,diametro)
}

  function velocidadebolinha(){
  xbolinha += velocidadexbolinha
  ybolinha += velocidadeybolinha
}

  function colisaoborda(){
  if (xbolinha +15 > width || xbolinha -15 < 0 )
      velocidadexbolinha *= -1
  if (ybolinha +15 > height || ybolinha -15 <0)
    velocidadeybolinha *= -1 
}
