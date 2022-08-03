
( 

  function() {

  let setupboard = document.querySelector('#game-setup')
  let gameboard = document.querySelector('#game-wrap')
  // var skin
  setupboard.lastChild.addEventListener("click", function(e) {
    e.preventDefault() 
    e.stopPropagation()
  })



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
    // console.log(head)
    // sessionStorage.setItem("name", head)
    
    gameboard.style.display = 'block'
    setupboard.style.display = 'none'

    var CatchTheEgg = new GameManager();

    let wolf0 = document.querySelector('#game-wrap[data-bx="0"] .wolf')
    // console.log(wolf0, wolf1)

    wolf0.style.background = `transparent url('../showmanbattle-game/img/wolf/wolf-p-0-${head}') center center no-repeat`

    const mutationObserver = new MutationObserver(function (mutations){
      console.log('that happened')
      let wolf1 = document.querySelector('#game-wrap[data-bx="1"] .wolf')
      let wolf0 = document.querySelector('#game-wrap[data-bx="0"] .wolf')
      if (wolf1) {
          wolf1.style.background = `transparent url('../showmanbattle-game/img/wolf/wolf-p-1-${head}') center center no-repeat`
      }
      if (wolf0) {
          wolf0.style.background = `transparent url('../showmanbattle-game/img/wolf/wolf-p-0-${head}') center center no-repeat`

      }

    })

    mutationObserver.observe(gameboard, {
      attributeFilter: ["data-bx"]
    })

  }
  })
    // var skin 
  }
)();
