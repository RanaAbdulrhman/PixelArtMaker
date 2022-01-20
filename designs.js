// defining variables
var color = document.querySelector("#colorPicker");
var table = document.querySelector("#pixelCanvas");
var height;
var width;

// When size is submitted by the user, call makeGrid()

var form = document.getElementById('sizePicker');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    height = document.querySelector("#inputHeight").value;
    width = document.querySelector("#inputWidth").value;
    if(height<=100,width<100){
        makeGrid(height,width)
    }
})

// makeGrid() function that makes the table

function makeGrid(x, y) {
    table.innerHTML = ""
    for (var i = 1; i <= x; i = i + 1) {
        var row = document.createElement("tr");
        table.appendChild(row);
        for (var j = 1; j <= y; j = j + 1) {
            var cell = document.createElement("td");
            //coloring the table
            cell.addEventListener('mouseover',function(event){
                event.target.style.backgroundColor= color.value 
            })
            row.appendChild(cell);
        }
    }
}

