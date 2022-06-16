function a(){
    var b=100;
    c();
    function c(){
        console.log(b); //100
    }
}
a();
 console.log(b)//referenceerror: b is not defined

// let x=100;
// x = 2;
// console.log(x);
// const h=10;




