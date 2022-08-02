
( 

  function() {

  let setupboard = document.querySelector('#game-setup')
  let gameboard = document.querySelector('#game-wrap')
  // var skin



  // function changeSkin() {
  //     wolf0.style.background = "transparent url('../img/wolf/wolf-p-1.png') center center no-repeat"
  // }

  setupboard.addEventListener("click", function(event) {
  if (event.target.tagName == 'IMG')
  {
    // console.log("Congrat!")
    // start game
    // console.log(event.target.src)
    let head = event.target.src.replace(/^.*[\\\/]/, '')
    // skin = head
    // console.log(event.target.tagName)
    console.log(head)
    sessionStorage.setItem("name", head)
    
    gameboard.style.display = 'block'
    setupboard.style.display = 'none'

    let wolf0 = document.querySelector('#game-wrap[data-bx="0"] .wolf')
    // let wolf1 = document.querySelector('#game-wrap[data-bx="1"] .wolf')
    // console.log(wolf0, wolf1)

    wolf0.style.background = `transparent url('../showmanbattle-game/img/wolf/wolf-p-0-${head}') center center no-repeat`


    var CatchTheEgg = new GameManager();
  }
  })
    // var skin 
  }
)();
