//Q.1
var array = [34, 45, 65, 23, 5, 676, 32, 34]
var target = 66
for (var i = 0; i <= array.length; i++) {
    for (var j = i + 1; j <= array.length; j++) {
        if(array[i] + array[j] === target){
            console.log(array[i] + array[j])
        }
        else{
            console.log("not found")
        }
    }
}

//q2
var start = 5768
var end = 78656

//q.3
var array = [3,5,79,45,0,-67,23,77,19,78,12]
var number = 19

for(var i=0; i<=array.length; i++){
    if(array[i] === number){
        console.log(array[i]);
    }
    else{
        console.log("Not found");
    }
}

//q4
var array = [34,45,567,78,89,34,67,87,34,78,89]
var object = {}

for(var i=0; i<=array.length; i++){
    
}