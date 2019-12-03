var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name, age, nationality) {
        this.name = name;
        this.age = age;
        this.gender = "female";
        this.nationality = nationality;
    }
    Student.prototype.getNationality = function () {
        console.log(this.name + " is " + this.nationality);
    };
    return Student;
}());
var UnderGraduate = /** @class */ (function (_super) {
    __extends(UnderGraduate, _super);
    function UnderGraduate(name, age, nationality, batch, GPA) {
        var _this = _super.call(this, name, age, nationality) || this;
        _this.batch = batch;
        _this.GPA = GPA;
        return _this;
    }
    return UnderGraduate;
}(Student));
;
var student = new UnderGraduate("fatma", 22, "Egyptian", 20, 3.5);
student.getNationality();
