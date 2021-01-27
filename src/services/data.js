export var data = {
    resultados: {
        parcent: '',
        hours: '',
        message: ''
    },
    datos: {
        pais: '',
        genero: '',
        nivel: '',
        conocimiento: '',
        investigacion: '',
        porcentaje: '',
        horas: ''
    },
    select: {
        investigacion: "",
        task: [],
        portcent: [],
        hours: 0,
        inv: {},
    },
    Genero: [
        "Masculino", "Femenino", "LGBT+"
    ],
    Tareas: [
        ["Conformación del grupo", "Resumen", "Introducción", "Problema", "Justificación", "Antecedentes", "Marco teórico", "Metodología", "Resultados", "Discusión", "Conclusiones", "Recomendaciones", "Referencias", "Formato con normas"],
        ["Resumen", "Introducción", "Problema", "Justificación", "Antecedentes", "Marco teórico", "Metodología", "Resultados", "Discusión", "Conclusiones", "Recomendaciones", "Referencias", "Formato con normas"]
    ],
    Color: "medium",
    Porcentajes: [
        [2, 2, 4, 8, 8, 12, 12, 6, 14, 12, 6, 5, 4, 5],
        [2, 4, 8, 8, 12, 12, 6, 14, 12, 6, 5, 4, 7]
    ],
    Investigaciones: ["Investigación teórica", "Investigación empírica", "Investigación aplicada"],
    Consejos: [
        "Estás en el momento donde una revisión a la coherencia estructural de tu tesis resulta oportuna. Ten en cuenta que el título, la pregunta y el objetivo general deben tener relación entre sí según las partes que los componen: objeto de estudio, población de estudio y contexto.",
        "Una revisión a la coherencia estructural te vendría bien. De esto depende que los antecedentes y el marco teórico estén relacionados con tu planteamiento inicial.",
        "Felicidades, estás a mitad del proceso. La metodología es clave porque refleja la manera en cómo vas a dar cumplimiento a tus objetivos específicos y en consecuencia al objetivo general, para poder ofrecer una respuesta a tu pregunta.",
        "Ánimo, ya estás en el desarrollo de la investigación. Recuerda que luego de la sistematización de los datos, los resultados  se organizan de acuerdo con los objetivos específicos y atendiendo a las variables o categorías construidas en la metodología a partir de la teoría.",
        "Estás por terminar. La discusión tiene en cuenta los principales resultados obtenidos, los cuales se contrastan con la teoría y los antecedentes. De aquí resultan las conclusiones, una por cada objetivo específico, una general para dar cuenta de la resolución de la pregunta y la hipótesis si existe. Revisa que las referencias estén completas y atiende a los aspectos de formato según las normas exigidas."
    ],
    Lvl_Investigacion: [{
            Nivel: "Investigación Escolar",
            Tiempo: [
                [2, 2, 4, 8, 6, 8, 8, 6, 15, 8, 2, 2, 2, 2],
                [2, 2, 4, 8, 6, 8, 8, 6, 20, 8, 2, 2, 2, 2],
                [2, 2, 4, 8, 6, 8, 8, 6, 30, 8, 2, 2, 2, 2]
            ]
        },
        {
            Nivel: "Tecnica/Tecnología",
            Tiempo: [
                [2, 2, 6, 6, 8, 8, 4, 10, 6, 2, 2, 2, 2],
                [2, 2, 6, 6, 8, 8, 6, 10, 6, 2, 2, 2, 4],
                [2, 2, 6, 6, 8, 8, 8, 20, 10, 2, 2, 2, 4]
            ]
        },
        {
            Nivel: "Pregrado/Licenciatura",
            Tiempo: [
                [1, 4, 6, 6, 8, 8, 6, 10, 6, 2, 1, 3, 4],
                [1, 4, 6, 6, 8, 10, 12, 20, 6, 2, 1, 3, 4],
                [1, 6, 8, 8, 8, 16, 12, 70, 10, 2, 1, 3, 5]
            ]
        },
        {
            Nivel: "Especialización",
            Tiempo: [
                [1, 4, 6, 6, 8, 12, 6, 10, 6, 2, 1, 3, 4],
                [1, 4, 6, 6, 8, 12, 6, 20, 6, 2, 1, 3, 4],
                [1, 6, 8, 8, 8, 16, 12, 70, 10, 2, 1, 3, 5]
            ]
        },
        {
            Nivel: "Maestria",
            Tiempo: [
                [1, 4, 8, 8, 10, 16, 6, 20, 10, 2, 1, 2, 4],
                [1, 4, 8, 8, 10, 16, 10, 30, 10, 2, 1, 3, 4],
                [1, 6, 8, 8, 8, 16, 22, 100, 10, 2, 2, 2, 5]
            ]
        },
        {
            Nivel: "Doctorado",
            Tiempo: [
                [1, 6, 10, 10, 10, 20, 12, 70, 15, 2, 2, 4, 6],
                [1, 6, 10, 10, 10, 20, 14, 100, 15, 2, 2, 4, 6],
                [1, 6, 10, 10, 10, 20, 20, 150, 19, 2, 2, 4, 6]
            ]
        }
    ]
}