document.addEventListener("keydown",function(event){ 
    makeSound(event.key);
  });

  for (var i = 0; document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
      key = this.innerHTML;
      console.log(key);
      makeSound(key);
    });
  }
  
  
  function makeSound(key) {
    switch (key) {
      case "w":
        var audio = new Audio("sounds/w.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("sounds/a.mp3");
        audio.play();
          break;
      case "s":
        var audio = new Audio("sounds/s.mp3");
        audio.play();
          break;
      case "d":
        var audio = new Audio("sounds/d.mp3");
        audio.play();
          break;
      case "j":
        var audio = new Audio("sounds/j.mp3");
        audio.play();
          break;
      case "k":
        var audio = new Audio("sounds/k.mp3");
        audio.play();
          break;
      case "l":
        var audio = new Audio("sounds/l.mp3");
        audio.play();
          break;
    }
  }
