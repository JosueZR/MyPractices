//variables
const inputName=document.getElementById("txtName");
const inputAge=document.getElementById("txtAge");
const btnRegister=document.getElementById("btnRegister");
// constructor
function Student(name,age){
    this.name=name;
    this.age=age;
}
// Register funtion
function register(){
    // create new student
    let newstudent = new Student(inputName.value, inputAge.value);

    //display the student
    console.log("Registering an student");

}
// display function
function display(){


}
function init(){
    //hook event
    btnRegister.addEventListener("click",register);

}

window.onload=init;