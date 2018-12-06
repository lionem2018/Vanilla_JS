//const nicoInfo = [ "Nicolas", "55", true, "Seoul" ];
const nicoInfo = {
    name: "Nico",
    age: 33,
    gender: "Male",
    isHandsome: true,
    favMovies: ["Along the gods", "LOTR", "Oldboy"],
    favvFood: [
        {
            name: "Kimchi",
            fatty: false
        },
        {
            name: "cheese burger",
            fatty: true
        }
    ]
};

console.log(nicoInfo);

console.log(nicoInfo.gender);

//nicoInfo = true;  //occur error

nicoInfo.gender = "Female";

console.log(nicoInfo.gender);

console.log(nicoInfo.favvFood[0].fatty);