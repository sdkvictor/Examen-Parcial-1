let form = document.getElementById("formComment");
let commentSection = document.getElementsByClassName("seccionComments");

let names = document.getElementsByClassName("userName");
names[0].value="";

form.addEventListener("submit",(event)=>{
    console.log("submit");
    event.preventDefault();
    let names = document.getElementsByClassName("userName");
    console.log(name.value)
    name = names[0];
    let comment = document.getElementById("userComment");
    if(name.value!=""&&comment.value!=""){
        let newComment = document.createElement("p");
        let newContent = document.createElement("p");

        newComment.innerHTML+="<p><h3>" + name.value + "</h3></p><p>" + comment.value + "</p>";
        newComment.appendChild(newContent);

        commentSection[0].appendChild(newComment);
    }
});