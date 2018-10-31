class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
}

  shuffleCards(cards) {
    let arrPush = [];
  for(let i = this.cards.length; i > 0; i--){
    let randomCardIndex = Math.floor(Math.random()*(i));
    arrPush.push(this.cards[randomCardIndex]);
  
    this.cards.splice(randomCardIndex,1);
   
    this.cards = arrPush;
    return arrPush;
  };
  




  // if (game.checkIfPair = this.pairsClicked
  
memoryGame.checkIfPair = function (firstCard, secondCard){
      }
  
memoryGame.isFinished = function () {
      };
    };
}
// class is the blueprint of the objects. ex: class objectConstructor
// create a constructor function, with characteristics that all the objects will have.
// tell blueprint, I want to create constructor function o fobjects tha twill take a property that'll have color and the other property will be console.log (x).

// class objectConstructor {
//  constructor(color){
//    this.color = color
//   }
//   run(x){
//     console.log(x)
//   }
//   let obj1 = new objectConstructor('yellow')

//   let myNewVar = new objectConstructor('taco')
//   myNewVar.run('yum')




// vvvv below, Isaiah's shuffle code
// class MemoryGame{
//   constructor(cards){
//     this.cards = cards;
//     this.pickCards = [];
//     this.pairsClicked = 0;
//     this.pairsGuessed = 0;
//   }



//   shuffleCards(cards) {
//     let arrPush = [];
//     for(let i = this.cards.length; i > 0; i--){
//     let randomCardIndex = Math.floor(Math.random()*(i));
//     arrPush.push(this.cards[randomCardIndex]);
    
//     this.cards.splice(randomCardIndex,1);  
//     }
//     console.log("============ ", arrPush);
//     console.log("--------------- ", cards)
//   this.cards = arrPush;
//   return arrPush;
//   };

// }
// ^^^^^^^^^^^^^^^^














  // let cards = ['','']
  // let starwars = ['','']
  // let pokemon = ['','']
  // class memoryGame {
  //   constructor(cards){
  //     this.cards = shuffleCards
  //     this.emptyArr = emptyArr
  //     this.counter = 0
  //   }
   
  //     }
  //     pickCards(card){
  //       this.emptyArr.push(this.click.name)
  //       if(emptyArr[0]===emptyArr[1]){
  //         counter ++
  //       emptyArr=[]
  //       })

  //     }
  // }

  // let myGame = new gameBoard(cards)

  // let rachelGame = new gameBoard(starwars)