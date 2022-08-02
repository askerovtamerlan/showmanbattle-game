// let page = document.querySelector('.page')
// let gameboard = document.querySelector('#game-wrap')
// let setupboard = document.querySelector('#game-setup')

// // gameboard = page.removeChild(gameboard)

// let wolf0 = document.querySelector('#game-wrap[data-bx="0"] .wolf')
// let wolf1 = document.querySelector('#game-wrap[data-bx="1"] .wolf')


// let names = ['аддис, роман, роман, ']

// function changeSkin() {
//     wolf0.style.background = "transparent url('../img/wolf/wolf-p-1.png') center center no-repeat"
// }

// 

// (async () => {
//     // let wolf0 = await document.querySelector('#game-wrap[data-bx="0"]')
//     let wolf1 = await document.querySelector('#game-wrap[data-bx="1"] .wolf')

//     // console.log(wolf0)
//     console.log(wolf1)
//   })();

let wolf0 = document.querySelector('#game-wrap[data-bx="0"] .wolf')
// let wolf1 = document.querySelector('#game-wrap[data-bx="1"] .wolf')
let head = sessionStorage.getItem("name")
console.log(head)

wolf0.setAttribute('style', `background : transparent url('../showmanbattle-game/img/wolf/wolf-p-0-${head}') center center no-repeat` )
// wolf0.style.background = `transparent url('../img/wolf/wolf-p-0-head-1') center center no-repeat`
// wolf1.style.background = `transparent url('../img/wolf/wolf-p-1-head-1') center center no-repeat`

// console.log(skin)