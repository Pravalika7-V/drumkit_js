for(var i=0;i<document.querySelectorAll(".drum").length;i++){


document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);

function handleclick(){
    // alert("I got clicked");
    // var audio = new Audio("./sounds/"+1+".mp3");
    // audio.play();
   // this.style.color="white";
   var buttoninnerHTML=this.innerHTML;
  
   switch(buttoninnerHTML){
    case "w":var audio = new Audio("./sounds/crash.mp3");
             audio.play();
             break;
    case "a":var audio = new Audio("./sounds/kick.mp3");
             audio.play();
             break;
    case "s":var audio = new Audio("./sounds/snare.mp3");
             audio.play();
             break;
    case "d":var audio = new Audio("./sounds/tom-1.mp3");
             audio.play();
             break;
     case "j":var audio = new Audio("./sounds/tom-2.mp3");
             audio.play();
             break;
    case "k":var audio = new Audio("./sounds/tom-3.mp3");
             audio.play();
             break;
    case "l":var audio = new Audio("./sounds/tom-4.mp3");
             audio.play();
             break;
    default:console.log("sorry enter correct option");

   }
   buttonAnimation(buttoninnerHTML);
}
}
document.addEventListener("keypress",function(event){
   // alert("key got pressed");
  // console.log(event);
  makesound(event.key);
  buttonAnimation(event.key);
})
function makesound(key){
    switch(key){
        case "w":var audio = new Audio("./sounds/crash.mp3");
                 audio.play();
                 break;
        case "a":var audio = new Audio("./sounds/kick.mp3");
                 audio.play();
                 break;
        case "s":var audio = new Audio("./sounds/snare.mp3");
                 audio.play();
                 break;
        case "d":var audio = new Audio("./sounds/tom-1.mp3");
                 audio.play();
                 break;
         case "j":var audio = new Audio("./sounds/tom-2.mp3");
                 audio.play();
                 break;
        case "k":var audio = new Audio("./sounds/tom-3.mp3");
                 audio.play();
                 break;
        case "l":var audio = new Audio("./sounds/tom-4.mp3");
                 audio.play();
                 break;
        default:console.log("sorry enter correct option");
    
       }

}
function buttonAnimation(key){
    var activebutton=document.querySelector("."+key);
    activebutton.classList.add("pressed");
    setTimeout(()=>{
        activebutton.classList.remove("pressed");

    },100);


}
// console.log("HI CREATING THE CONSTRUCTOR FUCNTION");
// function BellBoy(name,age,languages){
//     this.name=name;
//     this.age=age;
//     this.languages=languages;
// }

