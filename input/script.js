
let btn = document.getElementById("btn")

btn.addEventListener("click",function deepak(){
    var val = document.getElementById("number").value
    console.log(val)
    var n =1;
    var sum = 0;
    
    while (n <= val) {
        sum = sum + n;
        n++
        console.log(sum)
    }
    console.log(sum)
})

