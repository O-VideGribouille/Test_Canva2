function JOFlag() 
{

	var canvas = document.getElementById("JOflag");
	var ctx = canvas.getContext("2d");

	//rectangle blanc
	ctx.beginPath();
	ctx.rect(0, 0, 500, 300);
	ctx.fillStyle = "#FFFFFF";
	ctx.fill();

		//cercle jaune part 2
	ctx.beginPath(); 
	ctx.arc(187, 180, 60, 0, 2 * Math.PI);  
	ctx.strokeStyle= "#FBB32E";
	ctx.lineWidth = 10;
	ctx.stroke(); 
	

	//cercle bleu
	ctx.beginPath(); //début dessin
	ctx.arc(120, 120, 60, 0, 2 * Math.PI); // rappel (x,y,rayon, start,angle *Math.PI)
	ctx.strokeStyle= "#0186C3"; //couleur
	ctx.lineWidth = 10; //épaisseur
	ctx.stroke(); //trassage dessin

	//cercle jaune part 1
	ctx.beginPath(); 
	ctx.arc(187, 180, 60, 4.7, 3.2 * Math.PI);  
	ctx.strokeStyle= "#FBB32E";
	ctx.lineWidth = 10;
	ctx.stroke(); 
 
		//cercle vert partie 2
	ctx.beginPath(); 
	ctx.arc(322, 180, 60, 0, 2 * Math.PI); 
	ctx.strokeStyle= "#158C39";
	ctx.lineWidth = 10;	
	ctx.stroke(); 
	//cercle noir
	ctx.beginPath(); 
	ctx.arc(255, 120, 60, 0, 2 * Math.PI);
	ctx.strokeStyle= "#000000";
	ctx.lineWidth = 10;
	ctx.stroke(); 
		//cercle jaune part 3
	ctx.beginPath(); 
	ctx.arc(187, 180, 60, 4.7, 1.9 * Math.PI);  
	ctx.strokeStyle= "#FBB32E";
	ctx.lineWidth = 10;
	ctx.stroke();


	//cercle vert part 1
	ctx.beginPath(); 
	ctx.arc(322, 180, 60, 4.7, 3.2 * Math.PI); 
	ctx.strokeStyle= "#158C39";
	ctx.lineWidth = 10;	
	ctx.stroke(); 

	//cercle rouge
	ctx.beginPath(); 
	ctx.arc(390, 120, 60, 0, 2 * Math.PI); 
	ctx.strokeStyle= "#EE304D";
	ctx.lineWidth = 10;	
	ctx.stroke(); 
		//cercle vert part 3
	ctx.beginPath(); 
	ctx.arc(322, 180, 60, 4.7, 1.9 * Math.PI); 
	ctx.strokeStyle= "#158C39";
	ctx.lineWidth = 10;	
	ctx.stroke();
}