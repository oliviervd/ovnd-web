// initialise state array
int amount = 3;
int[][] state = new int[amount][amount];

PImage img1;

void setup(){
  size(900,900);

  for (int x = 0; x < amount; x++){
    for (int y = 0; y < amount; y++){
      state[x][y] = int(random(0,6));
    }
  }

  String url = "1.jpeg";
  img1 = loadImage(url,"jpeg");
  img1.resize(width,height);
}

void draw(){
  background(#f1f1f1);

  image(img1,0,0);
  float tileW = width/amount;
  float tileH = height/amount;

  fill(#ff0000);
  noStroke();
  translate(tileW/2, tileH/2);

   for (int x = 0; x < amount; x++){
    for (int y = 0; y < amount; y++){
      pushMatrix();
      translate(x*tileW, y*tileH);

      if (state[x][y] == 0){
        ellipse(0,0,tileW,tileH);
      }
      if (state[x][y] == 1){
        rect(0,0,tileW,tileH);
      }
      popMatrix();
    }
  }
}