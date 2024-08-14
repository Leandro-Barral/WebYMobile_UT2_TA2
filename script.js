function reverseString(texto){
    let arr = texto.split("");
    arr = arr.reverse();
    console.log(arr.join(""));
}

reverseString("Hola")