var contar=0;

function primo()
	{
		var valor=parseInt(document.getElementById("valor").value);
		var NumeroPrimo=true;
 
		for(i=1;i<valor;i++)
		{
			// If factor
			if(valor/i == Math.round(valor/i) && i!=1 && i!=valor)
			{
				NumeroPrimo=false;
				break;
			};
		};
 
		if(NumeroPrimo){
			contar++;
			document.getElementById("resultado").innerHTML="El numero "+valor+" es Primo has obtenido un punto";
		}
		else
			document.getElementById("resultado").innerHTML="El numero "+valor+" NO es Primo has obtenido "+contar+" puntos";
	}