class Employee2 {
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

//Nueva clase heredada
class Manager extends Employee2 {
    constructor(name : string, age: number , mobile : string){
        super(name,age,mobile);
        this.age = 24;
    }
 }
 
 let manager = new Manager("Jane", 23, "0343–23332233");
 console.log(manager.getName());
 console.log(manager.getAge());