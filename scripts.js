 let numA = Math.floor(Math.random() * 1000 + 1);
 let numB = Math.floor(Math.random() * 1000 + 1);
 let id = numA*numB;
 setTimeout(() =>{
 
 document.getElementById("id1").innerText = `${id}`
 },2000)
 function btn(){
    let text = prompt("type id");
 
 if (Number(text) === id){
    document.getElementById("link").innerText = "Start";
 }
 else{
    alert("wrong ID");
 }
}
