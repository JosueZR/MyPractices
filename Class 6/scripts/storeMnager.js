function saves(student){
    let students = read(); // []
    students.push(student);
    let val = JSON.stringify(student); // obj into JSON
    localStorage.setItem("student", val);

}

function read(){
    let data = localStorage.getItem("student");
    if(!data){ //Not data?
        return []; //create an empty array
    }else{
        return JSON.parse(data); // String into obj
    }
}

