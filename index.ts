class Student {
    name: string;
    age: number;
    gender: string;
    nationality: string;
    constructor(name: string,age: number,nationality: string) {
        this.name = name;
        this.age = age;
        this.gender = "female";
        this.nationality = nationality;
    }
    getNationality() {
        console.log(`${this.name} is ${this.nationality}`);
    }
}

class UnderGraduate extends Student implements Iundergrad{
    batch: number;
    GPA: number
    constructor(name: string,age: number,nationality: string,batch: number,GPA: number) {
        super(name,age,nationality);
        this.batch = batch;
        this.GPA = GPA;
    }
}


interface Iundergrad {
    name: string;
    age: number;
    gender: string;
    nationality: string;
    batch: number;
    GPA: number;
};

var student: UnderGraduate = new UnderGraduate("fatma",22,"Egyptian",20,3.5);
student.getNationality();