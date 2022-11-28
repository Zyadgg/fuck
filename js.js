let name = document.getElementById("name")
let kind = document.getElementById("kind")
let namber = document.getElementById("namber")
let brais = document.getElementById("brais")
let size1 = document.getElementById("size1")
let size2 = document.getElementById("size2")
let size3 = document.getElementById("size3")
let tbody = document.getElementById("tbody")
let submit = document.getElementById("submit")
let i;








//انشاء
let date ;
if(localStorage.black_date != null)
    {
     date = JSON.parse(localStorage.black_date);
        console.log('no null')
    }
else{
 date = []
console.log('yes null')
}  



submit.onclick = function(){
 if(name.value != "",kind.value != "",namber.value != "",brais.value != "",name.value != ""){
 newdate ={
 name:name.value,
 kind:kind.value,
 namber:namber.value,
 brais:brais.value,
size:size1.value+"/"+size2.value+"/"+size3.value
 }
 
 
 date.push(newdate)
     localStorage.setItem("black_date", JSON.stringify(date))
 showdate()
 }else{
 console.log("no betch")
 }

deleteInput()
}
//اظهار



function showdate(){
let dateShow =""
for(let i = 1; i < date.length;i++ ){
 dateShow +=`
     <tr>
       <td>${i}</td>
       <td>${date[i].name}</td>
       <td>${date[i].kind}</td>
       <td>${date[i].brais}</td>
       <td>${date[i].size}</td>
       <td>${date[i].namber}</td>
       <td><button onclick="deleteDate(${i})">delete</button></td>
       <td><button>update</button></td>
       </tr>
`
}



tbody.innerHTML = dateShow
}
//
function deleteDate(i){
date.splice(i,1)
localStorage.black_date = JSON.stringify(date)
showdate()
}
function deleteInput(){
name = ""
kind = ""
namber = ""
brais = ""
size1 = ""
size2 = ""
size3 = ""
}



showdate()