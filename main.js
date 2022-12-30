

var canvas = new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;

block_image_width=150
block_image_heigth=150

block_image_object="";

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
  block_image_object=Img;
  block_image_object.scaleToWidth(block_image_width);  
  block_image_object.scaleToHeight(block_image_heigth);  
  block_image_object.set({
    top:block_y,
    left:block_x
  });
  canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=='65'){
        new_image('twice.png');
    }
    if(keyPressed=='66'){
        new_image('BP.png');
    }
    if(keyPressed=='67'){
        new_image('itzy.png');
    }
    if(keyPressed=='68'){
        new_image('gidle.jpg');
    }
    if(keyPressed=='69'){
        new_image('skz.png');
    }
    
}