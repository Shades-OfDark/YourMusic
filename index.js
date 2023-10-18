var noOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < noOfButtons; i++)
{
  
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
      a = this.innerHTML;
      makingSound(this.innerHTML);
      buttonAnimation(this.innerHTML);
    });
    
}

document.addEventListener("keydown", function(event)
{
  makingSound(event.key);
  buttonAnimation(event.key);
});

function makingSound(key)
{
  switch (key) {
    case "w":
      new Audio("sounds./crash.mp3").play();
      break;

      case "a":
      new Audio("sounds./tom-1.mp3").play();
      break;
      case "s":
        new Audio("sounds./tom-2.mp3").play();
        break;

    case "d":
        new Audio("sounds./kick-bass.mp3").play();
        break;

    case "j":
        new Audio("sounds./tom-3.mp3").play();
        break;

    case "k":
        new Audio("sounds./tom-4.mp3").play();
        break;

    case "l":
        new Audio("sounds./snare.mp3").play();
        break;
   
    default: console.log(key);
        break;
  }
}

function buttonAnimation(currentKey)
{
  document.querySelector("."+currentKey).classList.add("pressed");
  setTimeout(function() 
  {
   document.querySelector("."+currentKey).classList.remove("pressed"); 
  },100 );
}

