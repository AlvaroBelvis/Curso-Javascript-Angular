			let miFormulario:HTMLFormElement;

			function addParrafo()
			{

				let parrafos = document.getElementsByTagName("p");
				let divrespuesta = <HTMLElement>document.getElementById("respuesta");
				let p = document.createElement("p");
				let textop = document.createTextNode("Parrafo " + (parrafos.length+1));
				p.appendChild(textop);
				divrespuesta.insertBefore(p, miFormulario['miFormulario'].Anadir);
				p.addEventListener("click", eliminar);

				

			}
			
			function eliminar(event:any)
			{
				let p=event.target;
				let divrespuesta = <HTMLElement>document.getElementById("respuesta");
				divrespuesta.removeChild(p);

				if(divrespuesta.children.length == 2){
					// divrespuesta.removeChild(divrespuesta.h1);
					// divrespuesta.removeChild(divrespuesta.input);
					miFormulario.btn_lanzar.style.display=""; //mostramos el botón lanzar
				}

			}
			
			function lanzar()
			{
				

				miFormulario.btn_lanzar.style.display="none";

				let titulo = miFormulario.titulo.value;
				let numero = miFormulario.numero.value;

				let h1 = document.createElement("h1");
				let textoh1 = document.createTextNode(titulo);
				h1.appendChild(textoh1);

				let divrespuesta = <HTMLElement>document.getElementById("respuesta");
				divrespuesta.appendChild(h1);

				for(let i=1; i<=numero; i++){
					let p = document.createElement("p");
					let textop = document.createTextNode("Parrafo " + i);
					p.appendChild(textop);
					divrespuesta.appendChild(p);
					p.addEventListener("click", eliminar);
				}

				let boton = document.createElement("input");
				boton.setAttribute("type", "button");
				boton.setAttribute("value", "Añadir");
				boton.setAttribute("name", "Anadir");
				divrespuesta.appendChild(boton);
				
				boton.addEventListener("click",addParrafo);
			
			}


			function validar()
			{

				let titulo = miFormulario.titulo.value;
				let numero = miFormulario.numero.value;

				if(/^\s+$/.test(numero) || numero=="" || numero.length==0){
					return false;
				}

				if(!/^[A-Z]{5,20}$/.test(titulo)){
					alert("El título debe ser letra A a Z y de 5 a 20 caracteres");
					miFormulario.titulo.style.background="red";
					return false;

				}

				if(!/^([1-9]|10)$/.test(numero)){
					alert("El número debe estar entre 1 y 10");
					miFormulario.numero.style.background="red";
					return false;
				}

				miFormulario.titulo.style.background="white";
				miFormulario.numero.style.background="white";

				miFormulario.btn_lanzar.style.display=""; //mostramos el botón lanzar
				miFormulario.btn_lanzar.onclick=lanzar;
				miFormulario.titulo.disabled=true;
				miFormulario.numero.disabled=true;

				
				
			}
			
			
            window.onload = function() {
				miFormulario = miFormulario['miFormulario'];
				let titulo = miFormulario.titulo;
				let numero = miFormulario.numero;
				titulo.onblur = validar;
				numero.onblur = validar;
				miFormulario.btn_lanzar.onclick=lanzar;
				

				
			};			