function oddoreve ( ){
    const num = parseInt(document.getElementById("num").value);
    console.log(num)
    if(num%2==0)
    {
        document.write("The number is even")
    }
    else
    {
       document.write("The number is odd")
    }
}


