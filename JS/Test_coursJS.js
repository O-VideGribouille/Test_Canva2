function test1()
{
	var canvas = document.getElementById("Test1");
	var ctx = canvas.getContext("2d");

	ctx.fillStyle = "#FF0000";
	ctx.fillRect(60, 1, 150, 10);

	ctx.fillStyle = "#00FF00";
	ctx.fillRect(50, 150, 50, 150);




}

function test2()
{

	var canvas=document.getElementById("Test2");
	var ctx = canvas.getContext("2d");

	ctx.moveTo(5, 110);
	ctx.lineTo(10, 200);
	ctx.stroke();

	ctx.moveTo(0, 300);
	ctx.lineTo(220, 0);
	ctx.stroke();

	ctx.moveTo(0, canvas.height/6);
	ctx.lineTo(canvas.width/6, canvas.height);
	ctx.stroke();

	ctx.moveTo(canvas.width/3, 100);
	ctx.lineTo(canvas.width/3, canvas.height);
	ctx.stroke();

}

function test3()
{

	var canvas=document.getElementById("Test3");
	var ctx = canvas.getContext("2d");

	ctx.beginPath();
	ctx.arc(canvas.width/6, canvas/6, canvas.height*5.4, 5, 2 * Math.PI);
	ctx.strokeStyle= "#green";

	ctx.lineWidth=6;
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(canvas.width/3, canvas.height/3, canvas.height*0.2, 0, 2 * Math.PI);
	ctx.strokeStyle= "#red";
	ctx.fillStyle= "darkblue";
	ctx.fill();


}

function test4() 
{
	var canvas = document.getElementById("Test4");
	var ctx = canvas.getContext("2d");

	var grd = ctx.createLinearGradient(10, 88, 195, 5);
	grd.addColorStop(0, "pink");
	grd.addColorStop(0.4, "violet");
	grd.addColorStop(1, "blue");

	ctx.fillStyle = grd;
	ctx.fillRect(20, 20, 250, 80);
}

function test5() 
{
	var canvas = document.getElementById("Test5");
	var ctx = canvas.getContext("2d");

	var grd = ctx.createLinearGradient(190, 80, 10, 190, 150, 50);
	grd.addColorStop(0, "magenta");
	grd.addColorStop(1, "cyan");
	ctx.fillStyle = grd;
	ctx.fillRect(10, 10, 280, 180);
}

function test6() //problème avec l'appartion de la fonction.
{
	var canva = document.getElementById("Test6");
	var ctx = canva.getContext("2d");

	ctx.font = "50px Arial";
	ctx.fillText("Allons-y !", 20, 70);

	ctx.strokeText("Géronimo !", 20, 120);

	ctx.font = "20px Algerian";
	ctx.fillStyle = "purple";
	ctx.fillText("Largeur du canvas : " + canvas.width, 20, 170);
}
