type robot = {
    id:number;
    name:string;
};

interface robot2{
    id:number | string;
    name:string;
}

const bot1:robot = {
    id: 1,
    name: "megaman",
};

const bot2:robot2 = {
    id: "1",
    name: "megaman",
};

console.log(bot1);
console.log(bot2);
/*
class Pessoa implements robot2{
    name: string | undefined;
    id: string; | number;
    name:string;

    constructor(id:string / number,name:string){
        this.id = id
        this.name = name
    }

    sayHello():string{
        return `Hello ${this.name}`;
    }
}

const p = new Pessoa(1, "Gutsman");
console.log(p.sayHello());

function constructor(id: any, arg1: number, name: void, string: any) {
    throw new Error("Function not implemented.");
}
*/