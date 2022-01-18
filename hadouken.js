

const body = {
    name: "Gandalf",
    age: 3,
    color: "grey",
    gender: "male",
    owner_id: "123abc",
    chip_id: "98765qwerty",
    weight: 5.5
}

const hadoukenValidation = () => {
    if(body.name){
        if(body.age){
            if(body.color){
                if(body.gender){
                    if(body.owner_id){
                        if(body.chip_id){
                            if(body.weight){
                                console.log("All fields validated")
                            }
                        }
                    }
                }
            }
        }
    }
}

const validateFor = () => {
    for (let field in body){
        if(!body[field]){
            console.log( `Param missing: ${field}`)
        }
    }
} 

const requiredFields = ["name", "age", "color", "gender", "owner_id", "chip_id", "weight"];

const validateForEach = (requiredFields) => {
    requiredFields.forEach((field) => {
        if(!body[field]){
            console.log( `Param missing: ${field}`)
        }
    })
}



//validate(requiredFields);
//hadoukenValidation();
//validateFor();
