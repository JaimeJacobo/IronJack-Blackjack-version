
class Game {
    constructor(){
        this.deckOfCards = [
            {name: 'A', value: 11},
            {name: '2', value: 2}, 
            {name: '3', value: 3}, 
            {name: '4', value: 4}, 
            {name: '5', value: 5}, 
            {name: '6', value: 6}, 
            {name: '7', value: 7}, 
            {name: '8', value: 8}, 
            {name: '9', value: 9}, 
            {name: '10', value: 10}, 
            {name: 'J', value: 10}, 
            {name: 'Q', value: 10}, 
            {name: 'K', value: 10}
        ];
        this.playerHand = new Array();
        this.dealerHand = new Array();
        this.totalMoney = 1000;
        this.totalBet = 0;
        this.playerCount = 0;
        this.dealerCount = 0;
    };


    startNewGame() {
        this.clearTheBoard();
    };


    resetHandsAndCounts() {

        this.playerHand = new Array();
        this.dealerHand = new Array();
        this.playerCount = 0;
        this.dealerCount = 0;
    };

    bet(betInt) {

    };


    shuffleAndDealCards() {

        let firstRandomNumber = Math.floor(Math.random()*this.deckOfCards.length);
        let secondRandomNumber = Math.floor(Math.random()*this.deckOfCards.length);
        let thirdRandomNumber = Math.floor(Math.random()*this.deckOfCards.length);

        this.playerHand.push(this.deckOfCards[firstRandomNumber]);
        this.dealerHand.push(this.deckOfCards[secondRandomNumber]);
        this.playerHand.push(this.deckOfCards[thirdRandomNumber]);

        for (let i = 0; i < this.playerHand.length; i++){
            this.playerCount += this.playerHand[i].value;
        };

        this.dealerCount += this.dealerHand[0].value;
    };


    playerHit() {

        let randomNumber = Math.floor(Math.random()*this.deckOfCards.length);

        this.playerHand.push(this.deckOfCards[randomNumber]);

        this.playerCount += this.deckOfCards[randomNumber].value;
    };

    dealerHit() {

        let randomNumber = Math.floor(Math.random()*this.deckOfCards.length);

        this.dealerHand.push(this.deckOfCards[randomNumber]);

        this.dealerCount += this.deckOfCards[randomNumber].value;

        $("#dealerCardsDiv").append("<p>" + blackjack.getCardImage(blackjack.dealerHand[blackjack.dealerHand.length - 1].name) + "</p>");
    };


    standAndCompareHands() {
        
        while(this.dealerCount < 17){

            this.dealerHit();
        };

        $("#dealerCount").text('(' + this.dealerCount + ')');
    };


    double() {

    };

    compareResults(){

    };


    clearTheBoard() {
        
        $("#playerCardsDiv").empty();
        $("#dealerCardsDiv").empty();
        
        $("#playerCardsDiv").append("<p id = 'playerCount' class='countSize'> (0) </p>");
        $("#dealerCardsDiv").append("<p id = 'dealerCount' class='countSize'> (0) </p>");

        this.resetHandsAndCounts();
    };


    getCardImage(cardName) {

        let arrayOfFourElements = ['L', 'O', 'V', 'E'];
    
        let randomNumberForTheImage = Math.floor(Math.random()*arrayOfFourElements.length);
    
        if(randomNumberForTheImage == 0){
    
            if(cardName == 'A'){
                return '<img src="images//AC.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '2'){
                return '<img src="images//2C.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '3'){
                return '<img src="images//3C.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '4'){
                return '<img src="images//4C.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '5'){
                return '<img src="images//5C.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '6'){
                return '<img src="images//6C.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '7'){
                return '<img src="images//7C.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '8'){
                return '<img src="images//8C.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '9'){
                return '<img src="images//9C.png" class="sizeOfTheCardsOnTheTable">';
            } else if(cardName == '10'){
                return '<img src="images//10C.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == 'J'){
                return '<img src="images//JC.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == 'Q'){
                return '<img src="images//QC.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == 'K'){
                return '<img src="images//KC.png" class="sizeOfTheCardsOnTheTable">';
            
            }; 
            
    
        } else if(randomNumberForTheImage == 1){
    
            if(cardName == 'A'){
                return '<img src="images//AD.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '2'){
                return '<img src="images//2D.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '3'){
                return '<img src="images//3D.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '4'){
                return '<img src="images//4D.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '5'){
                return '<img src="images//5D.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '6'){
                return '<img src="images//6D.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '7'){
                return '<img src="images//7D.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '8'){
                return '<img src="images//8D.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '9'){
                return '<img src="images//9D.png" class="sizeOfTheCardsOnTheTable">';
            } else if(cardName == '10'){
                return '<img src="images//10D.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == 'J'){
                return '<img src="images//JD.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == 'Q'){
                return '<img src="images//QD.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == 'K'){
                return '<img src="images//KD.png" class="sizeOfTheCardsOnTheTable">';
            };
    
    
        } else if(randomNumberForTheImage == 2){
    
            if(cardName == 'A'){
                return '<img src="images//AH.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '2'){
                return '<img src="images//2H.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '3'){
                return '<img src="images//3H.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '4'){
                return '<img src="images//4H.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '5'){
                return '<img src="images//5H.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '6'){
                return '<img src="images//6H.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '7'){
                return '<img src="images//7H.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '8'){
                return '<img src="images//8H.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '9'){
                return '<img src="images//9H.png" class="sizeOfTheCardsOnTheTable">';
            } else if(cardName == '10'){
                return '<img src="images//10H.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == 'J'){
                return '<img src="images//JH.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == 'Q'){
                return '<img src="images//QH.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == 'K'){
                return '<img src="images//KH.png" class="sizeOfTheCardsOnTheTable">';
            };
    
    
        } else if(randomNumberForTheImage == 3){
    
            if(cardName == 'A'){
                return '<img src="images//AS.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '2'){
                return '<img src="images//2S.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '3'){
                return '<img src="images//3S.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '4'){
                return '<img src="images//4S.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '5'){
                return '<img src="images//5S.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '6'){
                return '<img src="images//6S.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '7'){
                return '<img src="images//7S.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '8'){
                return '<img src="images//8S.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == '9'){
                return '<img src="images//9S.png" class="sizeOfTheCardsOnTheTable">';
            } else if(cardName == '10'){
                return '<img src="images//10S.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == 'J'){
                return '<img src="images//JS.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == 'Q'){
                return '<img src="images//QS.png" class="sizeOfTheCardsOnTheTable">';
    
            } else if(cardName == 'K'){
                return '<img src="images//KS.png" class="sizeOfTheCardsOnTheTable">';
            };
        };   
    };
};



