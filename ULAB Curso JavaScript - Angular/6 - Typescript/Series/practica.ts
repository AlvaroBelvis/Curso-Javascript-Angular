class Series
{

    private serie: string;
    private capitulos: number;

    constructor(nombre:string, version: number)
    {
        this.serie=nombre;
        this.capitulos=version;
        //this.arraySeries=[];
    }
    
    getSerie(){
        return this.serie;
    }

    setSerie(nombre:string){
         this.serie=nombre;
    }

    getCapitulos(){
        return this.capitulos;
    }

    setVersion(version:number){
        this.capitulos=version;
    }



    
}


var arraySeries:Series[] = [];

function guardar()
{       
    var nombre:string = (<HTMLInputElement>document.getElementById("serie")).value.toString();
    var capitulos:number = parseInt((<HTMLInputElement>document.getElementById("capitulos")).value);

    if(nombre==="" || /^\s+$/.test(nombre))
    {
        alert ("El nombre de la serie no puede quedarse vacío");
        return false;
    }
    
    if(capitulos<=0 || isNaN(capitulos))
    {
        alert ("El número de capítulos debe ser un número entero mayor de 0");
        return false;
    }

    var serie=new Series(nombre,capitulos);
     //serie.grabar(serie);
     arraySeries.push(serie);
    (<HTMLInputElement>document.getElementById("serie")).value="";
    (<HTMLInputElement>document.getElementById("capitulos")).value="";

}

function listar()
{
    var listado=(<HTMLElement>document.getElementById("listado"));
    var hijos:number=listado.children.length;
    if(hijos!=0) //Borramos los hijos antes de crearlo
        listado.removeChild(listado.children[0]);
    
    var modo = (<HTMLInputElement>document.getElementById("modo"));
    if(modo.value==="lista")
    {
        let ul=<HTMLUListElement>document.createElement("ul");
        let li:HTMLElement;
        let texto:Text;        
        for (let i:number=0; i<arraySeries.length; i++)
        {
            li=document.createElement("li");
            texto=document.createTextNode(arraySeries[i].getSerie() || " "||arraySeries[i].getCapitulos().toString());
            li.appendChild(texto);
            ul.appendChild(li);
        }
        
        listado.appendChild(ul);
    }
    else if(modo.value==="tabla"){
        let table=<HTMLTableElement>document.createElement("table");
        table.setAttribute("border","2");
        let tr:HTMLTableRowElement;
        let td:HTMLTableDataCellElement;
        let texto:Text;        
        let td2:HTMLTableDataCellElement;
        let texto2:Text;                
        for (let i=0; i<arraySeries.length; i++)
        {
            tr=document.createElement("tr");
            td=document.createElement("td");
            texto=document.createTextNode(arraySeries[i].getSerie());
            td.appendChild(texto);
            td2=document.createElement("td");
            texto2=document.createTextNode(arraySeries[i].getCapitulos().toString());
            td2.appendChild(texto2);
            tr.appendChild(td);
            tr.appendChild(td2);
            table.appendChild(tr);
        }
        var listado=(<HTMLElement>document.getElementById("listado"));
        listado.appendChild(table);
    }
    else
    {
        alert("El modo no puede quedarse vacío, elija uno.")
        return false;
    }
}

window.onload  = function(){
    var boton = (<HTMLInputElement>document.getElementById("boton"));
    boton.addEventListener("click",guardar);
    var modo = (<HTMLInputElement>document.getElementById("modo"));
    modo.addEventListener("change",listar);    
}
