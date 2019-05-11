// Jawaban no 1.

function data() {
    let biodata = {
        name: 'Khusni Jafar',
        address: 'Sukamara',
        hobbies: ['Reading', 'Watching'],
        is_married: false,
        school: {
            highSchool: 'MA N Sukamara',
            university: 'Harvard University'
        },
        skills: [{
            "name": "english",
            "score": "70"
        }, {
            "name": "coding",
            "score": "40"
        }]
    };

    return biodata;
};

console.log(data());
