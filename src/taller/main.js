const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS"
    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function(nuevoCurso) {
    //     this.cursosAprobados.push(nuevoCurso);
    // }
}
Student.prototype.aprobarCurso = function(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

const Juanita = new Student(
    "Juana Alejandra",
    18,
    [
        "Curso de Introduccion a la Producción de Videojuegos",
        "Curso de Creación de Personajes"
    ]
);

// Prototipos con la sintaxis de Clases

class Student2 {
    constructor({
        name,
        age,
        email,
        instagram,
        facebook,
        twiteer,
        cursosAprobados = [],
    }) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.instagram = instagram;
        this.facebook = facebook;
        this.twiteer = twiteer;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const Miguel = new Student2({
    name: "Miguel Angel",
    age: 29,
    // cursosAprobados: [
    //     "Curso de Análisis de Negocios para Ciencia de Datos",
    //     "Curso de Principaios de Visualización de Datos para BI"
    // ]
});