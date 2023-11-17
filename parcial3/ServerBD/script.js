document.getElementById("btn").addEventListener("click", addItem)
document.getElementById("btnName").addEventListener("click", addName)
document.getElementById("btnNewName").addEventListener("click", updateName)
document.getElementById("btnDelete").addEventListener("click", deleteName)
document.getElementById("tableBtn").addEventListener("click", fillTable)

function addItem(){
  const inputElement = document.getElementById("itemInput").value;
  //const newItemText = inputElement.value.trim();
  fetch(`http://localhost:8000/alumnos/${inputElement}`)
    .then(res => res.json())
    .then(data =>{
        document.getElementById("output").innerHTML = data[0].Nombre
        //console.log(data)
    })


}

/** 
 * @swagger
 * /:
    get:
      description: Function
*/
function addName(){
  const inputElement = document.getElementById("nameInput").value;
  const objName = {
    "name": `${inputElement}`
  }
  fetch(`http://localhost:8000/alumnos/`, {
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(objName)
  }).then(alert(`${inputElement} ha sido agregado.`))
}

function updateName(){
  const nameElement = document.getElementById("newNameInput").value;
  const idElement = document.getElementById("newIdInput").value;
  const objName = {
    "name": `${nameElement}`,
    "id": `${idElement}`
  }
  fetch(`http://localhost:8000/alumnos/update`, {
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(objName)
  }).then(alert(`Id: ${idElement} : ${nameElement} ha sido modificado.`))
}


function deleteName(){
  const idElement = document.getElementById("deleteInput").value;

  const objName = {
    "id": `${idElement}`
  }
  fetch(`http://localhost:8000/alumnos/delete`, {
    method:"DELETE",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(objName)
  }).then(alert(`Id: ${idElement} : ha sido eliminado.`))
}


function fillTable(){
  const main = document.getElementById("tabla")
  fetch(`http://localhost:8000/fill`)
    .then(res => res.json())
    .then(data =>{
        for (let index = 0; index < data.length; index++) {
          // const element = array[index];
          //var datos = data[index].Nombre;
          let obj = data[index]
          const div = document.createElement('div')
          let textNode = document.createTextNode(obj.Nombre)
          div.appendChild(textNode)
          main.appendChild(div)
          // document.getElementById("tableData").innerHTML += data[index].Nombre
          // console.log(data[index].Nombre)
        }
        //console.log(data)
    })


}
