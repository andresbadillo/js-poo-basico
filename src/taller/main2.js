/* const juan1 = {
    name: "JuanDC",
    username: "juandc",
    point: 100,
    socialMedia: {
        twiteer: "fjuandc",
        instagram: "fjuandc",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctivo de HTML y CSS"
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctivo de HTML y CSS",
                "Curso de Responsive Design"
            ]
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso de Introducción a la Producción de Videojuegos",
                "Curso de Unreal Engine",
                "Curso de Unity 3D"
            ],
        },
    ],
};

const miguel = {
    name: "Miguel Angel",
    username: "miguelito",
    point: 1000,
    socialMedia: {
        twiteer: "miguelitofeliz",
        instagram: "miguelitofeliz",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso de DataBusiines",
        "Curso de DataViz"
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctivo de HTML y CSS",
                "Curso de Responsive Design"
            ]
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso de DataBusiines",
                "Curso de DataViz",
                "Curso de Tableau",
            ],
        },
    ],
}; */

class LearningPaths {
    constructor({
        id,
        name,
        courses = [],
    }) {
        this.id = id;
        this.name = name;
        this.courses = courses;
    }
}

class Course {
    constructor({
        id,
        name,
        teacher,
        lessons = [],
    }) {
        this.id = id;
        this.name = name;
        this.teacher = teacher;
        this.lessons = lessons;
    }
}

class Student {
    constructor({
        name,
        email,
        userName,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        lerningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.lerningPaths = lerningPaths;
    }
}

const desarrolloWeb = new LearningPaths({
    id: 0001,
    name: "Escuela de Desarrollo Web",
    courses: [
        new Course({
            id: 000101,
            name: "Curso de Programación Básica",
            teacher: "Fredy Vega"
        }),
        new Course({
            id: 000102,
            name: "Curso Definitivo de HTML y CSS",
            teacher: "Diego deGranda"
        }),
    ],
});

const desarrolloVideojuegos = new LearningPaths({
    id: 0002,
    name: "Escuela de Desarrollo de VIdeojuegos",
    courses: [
        new Course({
            id: 000201,
            name: "Curso de Introducción a la Producción de Videojuegos",
            teacher: "Fredy Vega"
        }),
        new Course({
            id: 000202,
            name: "Curso de Unreal Engine",
            teacher: "Diego deGranda"
        }),
    ],
});

const juan2 = new Student({
    name: "juanDC",
    userName: "juandc",
    email: "juanito@juanito.com",
    twitter: "juanitodc",
    LearningPaths: [
        desarrolloWeb,
    ]
});

const miguelito2 = new Student({
    name: "Miguelito",
    userName: "miguelitofeliz",
    email: "miguelito@miguelito.com",
    instagram: "miguelitofeliz",
    LearningPaths: [
        desarrolloVideojuegos,
    ]
});