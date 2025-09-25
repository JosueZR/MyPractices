document.addEventListener("DOMContentLoaded", () => {
    //all the code will be here
    const btnAdd = document.getElementById("btnAdd");
    const imputItem = document.getElementById("txtItem");
    const list = document.getElementById("itemList");

    //array of items whith anonymous obj (obj constructor, obj literaly)
    let items = [
        {name: "Laptop", purchase: false},
        {name: "SpeaKers", purchase:true},
        {name: "MackBook", purchase: false}
    ];

    function renderList(){
        list.innerHTML = ""; //clear the canvas

        items.forEach((item,index) => {
            //console.log(item,index);
            let li=document.createElement("li");
            li.innerHTML=`
            <span>${item.name}</span>
            <button>Delete</button>`;
            console.log (li);
            list.appendChild(li);

        });
    }
    renderList();
    //deleting items

    //hook event add
    btnAdd.addEventListener("click", () => {
        let item = imputItem.value; //getting value from input
        console.log(item); //print the value
        items.push({name:item, purchase:false});
        console.log(items); //print the value
        //Display the new item
        renderList();

        
    });

    renderList(); //inital render
});
