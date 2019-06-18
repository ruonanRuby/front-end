function myFunction(){
    let x = document.getElementsByClassName("square4");
    let mario = document.getElementById("mario");
    if(mario.style.display === "none"){
        x[0].style.display = "none";
        mario.style.display = "block";   
    }else{
        x[0].style.display = "block";
        mario.style.display = "none";
    }
}