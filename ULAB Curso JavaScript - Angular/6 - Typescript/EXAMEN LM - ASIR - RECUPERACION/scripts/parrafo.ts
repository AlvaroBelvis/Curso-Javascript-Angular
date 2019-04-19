			
			function addParrafo():void
			{
					let divRespuesta=document.getElementById("respuesta");
					let numeroParrafos=divRespuesta.children.length;
					let p=document.createElement("p");
					let texto=document.createTextNode("Este es el párrafo "+(numeroParrafos-1));
					p.appendChild(texto);
					p.addEventListener("click",eliminar);
					let boton = document.getElementById("boton");
					divRespuesta.insertBefore(p, boton);
			}
			
			function eliminar()
			{
				let elemento=this;
				let divRespuesta=document.getElementById("respuesta");
				
                divRespuesta.removeChild(elemento);
                
                
				
				let numeroParrafos=divRespuesta.children.length;
				if(numeroParrafos==2)
				{
					let h1 = divRespuesta.getElementsByTagName("h1")[0];
					divRespuesta.removeChild(h1);

					let boton = document.getElementById("boton");
					divRespuesta.removeChild(boton);
					
					document.forms['miFormulario'].titulo.disabled=false;
					document.forms['miFormulario'].numero.disabled=false;

					document.forms['miFormulario'].titulo.value="";
					document.forms['miFormulario'].numero.value="";					
					
				}
				
			}
            

			function lanzar():void
			{
				document.forms['miFormulario'].btn_lanzar.style.display="none";
				let divRespuesta:HTMLElement=document.getElementById("respuesta");
				let numero:number = document.forms['miFormulario'].numero.value;
				let titulo:string = document.forms['miFormulario'].titulo.value;			
				let p:HTMLElement;
				let texto:Node;
				let h1:HTMLElement=document.createElement("h1");
				texto=document.createTextNode(titulo);
				h1.appendChild(texto);
				divRespuesta.appendChild(h1);

				for (let i:number=1; i<=numero;i++)
				{
					p=document.createElement("p");
					texto=document.createTextNode("Este es el párrafo "+i);
					p.appendChild(texto);
					divRespuesta.appendChild(p);
					p.addEventListener("click",eliminar);
				}
				let btnMas:HTMLElement = document.createElement("input");
				btnMas.setAttribute("value","Añadir");
				btnMas.setAttribute("type", "button");
				btnMas.setAttribute("id", "boton");
				btnMas.addEventListener('click', addParrafo);		
				divRespuesta.appendChild(btnMas);				
			}


			function validar()
			{
				let numero = document.forms['miFormulario'].numero.value;
				let titulo = document.forms['miFormulario'].titulo.value;

				
				if(numero=="" ||numero==null || /^\s+$/.test(numero))
					return false;
				
				if(!(/^([1-9]|10)$/.test(numero)))
				{
					alert("El campo número debe ser un número de 1 a 10");
					document.forms['miFormulario'].numero.style.backgroundColor="red";
					document.forms['miFormulario'].numero.focus();
					return false;
				}
				
				if(!/^[A-Z]{5,20}$/.test(titulo))
				{
					alert("El título solo puede tener letras mayúsculas y un mínimo de 5 y un máximo de 20 caracteres");
					document.forms['miFormulario'].titulo.style.backgroundColor="red";
					document.forms['miFormulario'].titulo.focus();
					return false;
				}
					
				document.forms['miFormulario'].numero.style.backgroundColor="white";
				document.forms['miFormulario'].titulo.style.backgroundColor="white";
				document.forms['miFormulario'].titulo.disabled=true;
				document.forms['miFormulario'].numero.disabled=true;

				document.forms['miFormulario'].btn_lanzar.style.display="block";
				document.forms['miFormulario'].btn_lanzar.onclick=lanzar;

				
				
			}
			
			
            window.onload = function() {
				
				document.forms['miFormulario'].titulo.onblur=validar;
				document.forms['miFormulario'].numero.onblur=validar;
				
			};			