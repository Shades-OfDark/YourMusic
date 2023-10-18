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
      new Audio("crash.mp3").play();
      break;

      case "a":
      new Audio("tom-1.mp3").play();
      break;
      case "s":
        new Audio("tom-2.mp3").play();
        break;

    case "d":
        new Audio("kick-bass.mp3").play();
        break;

    case "j":
        new Audio("tom-3.mp3").play();
        break;

    case "k":
        new Audio("tom-4.mp3").play();
        break;

    case "l":
        new Audio("snare.mp3").play();
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

