class Employee {
    //atributo accesible desde fuera de la clase
    public name : string;
    //atributos accesible desde clases que hereden de Employee
    protected age: number;
    //access only inside the Employee class
    private mobile : string;

    constructor(name:string ,age:number, mobile:string){
        this.name = name;
        this.age = age;
        this.mobile = mobile;
    }
    getName(){
       return this.name;
    }

    setName(name:string){
       this.name = name;
    }
    getAge(){
       return this.age;
    }

    setAge(age:number){
       this.age = age;
    }

    getMobile(){
       return this.mobile;
    }

    setMobile(mobile:string){
        this.mobile = mobile;
     }
}

let actor = new Employee('Haider Malik', 33, "5454545454");
console.log(actor.name);
console.log(actor.getAge());
console.log(actor.getMobile());
//set
actor.name = 'Jane Doe';
actor.setAge(44);
actor.setMobile("223232");
console.log(actor.name);
console.log(actor.getAge());
console.log(actor.getMobile());