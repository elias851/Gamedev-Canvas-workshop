const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 120, 120);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 40, 0, Math.PI*2, false);
ctx.fillStyle = "brown";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
