class Series{

    private nombre: string;
    private capitulos: number;
    
    constructor(nombre:string, capitulos:number){
        this.nombre = nombre;
        this.capitulos = capitulos;
    }
    
    getNombre(){
        return this.nombre;
    }

    setNombre(nombre:string){
        return this.nombre=nombre;
    }

    getCapitulos(){
        return this.capitulos;
    }

    setCapitulos(capitulos:number){
        this.capitulos=capitulos;
    }
}

var series:Series[] = [];


function grabar(){
    let nombre = document.getElementById("nombre").nodeValue;
    let capitulos = parseInt(document.getElementById("capitulos").nodeValue);

    let serie =new Series(nombre, capitulos);
    
    series.push(serie);
}

function listar(){

    let div = document.getElementById("lista");
    let ul = document.createElement("ul");

    for(let i=0; i<series.length; i++){

        let li = document.createElement("li");
        let textli = document.createTextNode(series[i].getNombre());
        li.appendChild(textli);
        ul.appendChild(li);
    }
    div.appendChild(ul);

    // for(let i=0; i<series.length; i++){

    //     let tr = document.createElement("tr");
    //     let td = document.createElement("td");
    //     let textd = document.createTextNode(series[i].getNombre());
    //     td.appendChild(textd);
    //     tr.appendChild(td);
    // }
    
}

window.onload  = function(){
    let boton = (<HTMLInputElement>document.getElementById("grabar"));
    let boton2 = (<HTMLInputElement>document.getElementById("modo"));
    boton.addEventListener("click",grabar);
    boton2.addEventListener("click",listar);

}

