function DrawBoat()
{
	
	var canvas = document.getElementById("boat");
	var ctx = canvas.getContext("2d");

	//fond :
	// ciel
    ctx.beginPath(); 
 	ctx.fillStyle = "lightblue";
	ctx.fillRect(0, 0, 500, 250);


	//mer
 	ctx.beginPath(); 
 	ctx.fillStyle = "blue";
	ctx.fillRect(0, 170, 500, 200); 

	//Le mat
	ctx.beginPath();
	ctx.moveTo(250, 15);
	ctx.lineTo(250, 200);
	ctx.lineWidth = 10;
    ctx.strokeStyle= "beige";
	ctx.stroke();

	//arrondi du mât

	   ctx.beginPath(); 
	ctx.arc(250, 16, 3, 0, 2 * Math.PI);  
	ctx.strokeStyle= "beige";
	ctx.lineWidth = 4;
	ctx.stroke();

	//la coque du bateau
	
	    ctx.beginPath();
    ctx.fillStyle= "#A69A97";
    ctx.moveTo(150, 205);
    ctx.lineTo(230, 125);
    ctx.lineTo(95, 125);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(230, 125);
    ctx.lineTo(321, 205);
    ctx.lineTo(150, 205);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(350, 125);
    ctx.lineTo(320, 205);
    ctx.lineTo(225, 124);
    ctx.fill();
    

    //petit drapeau

	ctx.beginPath();
    ctx.fillStyle= "brown";
    ctx.moveTo(250, 20);
    ctx.lineTo(250, 40);
    ctx.lineTo(305, 40);
    ctx.fill();

	//La voile
	    ctx.beginPath();
    ctx.fillStyle= "grey";
    ctx.moveTo(250, 40);
    ctx.lineTo(250, 120);
    ctx.lineTo(350, 90);
    ctx.fill();
    
        ctx.beginPath();
    ctx.fillStyle= "white";
    ctx.moveTo(240, 40);
    ctx.lineTo(240, 115);
    ctx.lineTo(320, 87);
    ctx.fill();

    //bouée

    ctx.beginPath(); 
	ctx.arc(280, 160, 20, 0, 2 * Math.PI);  
	ctx.strokeStyle= "beige";
	ctx.lineWidth = 15;
	ctx.stroke(); 


	//vaguelette 
	ctx.beginPath(); 
	ctx.arc(160, 217, 18, 0, 2 * Math.PI);  
	ctx.strokeStyle= "blue";
	ctx.lineWidth = 20;
	ctx.stroke(); 
    
        	ctx.beginPath(); 
	ctx.arc(190, 225, 18, 0, 2 * Math.PI);  
	ctx.strokeStyle= "blue";
	ctx.lineWidth = 20;
	ctx.stroke();    
    
    ctx.beginPath(); 
	ctx.arc(220, 218, 18, 0, 2 * Math.PI);  
	ctx.strokeStyle= "blue";
	ctx.lineWidth = 20;
	ctx.stroke();
    
        	ctx.beginPath(); 
	ctx.arc(245, 222, 18, 0, 2 * Math.PI);  
	ctx.strokeStyle= "blue";
	ctx.lineWidth = 20;
	ctx.stroke();
    
        	ctx.beginPath(); 
	ctx.arc(270, 217, 18, 0, 2 * Math.PI);  
	ctx.strokeStyle= "blue";
	ctx.lineWidth = 20;
	ctx.stroke();
    
        	ctx.beginPath(); 
	ctx.arc(290, 225, 18, 0, 2 * Math.PI);  
	ctx.strokeStyle= "blue";
	ctx.lineWidth = 20;
	ctx.stroke();
    
        	ctx.beginPath(); 
	ctx.arc(325, 220, 18, 0, 2 * Math.PI);  
	ctx.strokeStyle= "blue";
	ctx.lineWidth = 20;
	ctx.stroke();

}