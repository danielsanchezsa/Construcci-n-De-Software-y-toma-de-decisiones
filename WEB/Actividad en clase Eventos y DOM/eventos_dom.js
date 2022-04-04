//Daniel Sanchez - A01781575


// 1
document.onmousemove = function(event){
    document.getElementById('mousePosition').innerHTML = 'Posición del mouse: X: '+ event.clientX + ' Y: ' + event.clientY

}




//2
function form1Submitted(event){
    event.preventDefault();
    document.getElementById("divEj2").appendChild(document.createTextNode(document.getElementById("form1").elements['fname'].value + " " + document.getElementById("form1").elements['lname'].value)) 
}

//3


function insertRow(){
    let table = document.getElementById('sampleTable');
  
   
    table.insertRow(table.rows.length)


    for(let i = 0; i < table.rows[1].children.length; i++) {

    let newTD = document.createElement('td');
    newTD.innerHTML = "Row " + table.rows.length+ " column " + (i+1)
       table.rows[table.rows.length-1].appendChild(newTD)
        
    }



}
function insertColumn(){

    let table = document.getElementById('sampleTable');

    let rows = table.children[0].children;

    for(let i = 0; i < rows.length; i++){


        let newTD = document.createElement('td');
        let colVal = i===0 ? table.rows[0].children.length + 1: table.rows[0].children.length
        newTD.innerHTML = "Row " + (i+1)+ " column " + colVal
      


        rows[i].appendChild(newTD)
    } 

}

//4

function ej4(event){
    event.preventDefault();
    let rowIndex =document.getElementById("form2").elements['rowIndex'].value
    let columnIndex = document.getElementById("form2").elements['columnIndex'].value
    let data =  document.getElementById("form2").elements['text'].value
    let table = document.getElementById('myTable');

    try {
        table.rows[rowIndex].children[columnIndex].innerHTML = data;
    } catch (error) {
        alert('Invalid Row and/or Column index')
    }
  
}

//5 
function addColor(){

    let newColor = document.createElement('option');
    newColor.innerHTML = "No colors, but a random number ;) "+ Math.random()
    document.getElementById('colorSelect').appendChild(newColor)

}

function removeColor(){

    let colors = document.getElementById('colorSelect')
   
    try {
        colors.children[Math.trunc(Math.random()*colors.children.length)].remove()

     } catch (error) {
        alert('No More Colors to delete...')
    }
}

//6
function main(){
    let img =document.getElementById('img6')
    img.addEventListener('mouseover',()=>{
        img.width =  (Math.random() * 600) + 300
        img.height=  (Math.random() * 600) + 300
    })
}