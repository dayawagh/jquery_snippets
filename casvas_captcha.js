var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.font="30px Arial";
ctx.fillText("ASDFG54",10,50);

// save img
Canvas2Image.saveAsImage(c, 100, 100, 'jpeg');
