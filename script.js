class Game {
    constructor(){
        this.deckOfCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
        this.playerHand = new Array();
        this.dealerHand = new Array();
        this.totalMoney = 1000;
        this.totalBet = 0;
        this.playerCount = 0;
        this.dealerCount = 0;
    };


    resetHandsAndCounts() {
        this.playerHand = new Array();
        this.dealerHand = new Array();
        this.playerCount = 0;
        this.dealerCount = 0;
        // this.totalBet = 0;
        
    }

    bet(betInt) {

        if(betInt <= this.totalMoney){
            this.totalMoney -= betInt;
            this.totalBet = betInt;
        } else {
            alert("You don't have enough money to place this bet");
        };
    };

    shuffleAndDealCards(){
        
        let firstRandomCard = Math.floor(Math.random()*this.deckOfCards.length + 1);
        let secondRandomCard = Math.floor(Math.random()*this.deckOfCards.length + 1);
        let thirdRandomCard = Math.floor(Math.random()*this.deckOfCards.length + 1);

        if(this.totalBet > 0) {

            if(this.deckOfCards.indexOf(firstRandomCard) + 1 == 0){
                this.playerCount += 10;
            } else {
                this.playerCount += firstRandomCard;
            };


            if(this.deckOfCards.indexOf(secondRandomCard) + 1 == 0){
                this.dealerCount += 10;
            } else {
                this.dealerCount += secondRandomCard;
            };


            if(this.deckOfCards.indexOf(thirdRandomCard) + 1 == 0){
                this.playerCount += 10;
            } else {
                this.playerCount += thirdRandomCard;
            };


            if(firstRandomCard == 11){
                this.playerHand.push('J');
            } else if(firstRandomCard == 12){
                this.playerHand.push('Q');
            } else if(firstRandomCard == 13){
                this.playerHand.push('K');
            } else {
                this.playerHand.push(firstRandomCard);
            };

            if(secondRandomCard == 11){
                this.dealerHand.push('J');
            } else if(secondRandomCard == 12){
                this.dealerHand.push('Q');
            } else if(secondRandomCard == 13){
                this.dealerHand.push('K');
            } else {
                this.dealerHand.push(secondRandomCard);
            };

            if(thirdRandomCard == 11){
                this.playerHand.push('J');
            } else if(thirdRandomCard == 12){
                this.playerHand.push('Q');
            } else if(thirdRandomCard == 13){
                this.playerHand.push('K');
            } else {
                this.playerHand.push(thirdRandomCard);
            };
        } else {
            return 'Pleace, place your bet. Imbecil.';
        };  
    };

    hit(){

        let randomCard = Math.floor(Math.random()*this.deckOfCards.length + 1);


        if(this.deckOfCards.indexOf(randomCard) + 1 == 0){
            this.playerCount += 10;
        } else {
            this.playerCount += randomCard;
        };


        if(randomCard == 11){
            this.playerHand.push('J');
        } else if(randomCard == 12){
            this.playerHand.push('Q');
        } else if(randomCard == 13){
            this.playerHand.push('K');
        } else {
            this.playerHand.push(randomCard);
        };

        if(this.playerCount >21){
            this.totalBet = 0;
            setTimeout(()=>{

                this.resetHandsAndCounts();
            }, 500);

            alert('Se pasó! El casino siempre gana');
            $("#totalBet").text('0$');
        };
    };

    standAndCompareHands(){
        while(this.dealerCount < 17){

            let randomCard = Math.floor(Math.random()*this.deckOfCards.length + 1);
            

            if(this.deckOfCards.indexOf(randomCard) + 1 == 0){
                this.dealerCount += 10;
            } else {
                this.dealerCount += randomCard;
            };


            if(randomCard == 11){
                this.dealerHand.push('J');
            } else if(randomCard == 12){
                this.dealerHand.push('Q');
            } else if(randomCard == 13){
                this.dealerHand.push('K');
            } else {
                this.dealerHand.push(randomCard);
            };

            if(this.dealerCount > 21){
                setTimeout(()=>{
                
                    this.resetHandsAndCounts();
                }, 500);
    
                this.totalMoney += this.totalBet * 2;
                return 'Se pasó! Player wins.';
            };
        };

        if(this.playerCount > this.dealerCount){
            setTimeout(()=>{
                
                this.resetHandsAndCounts();
            }, 500);

            this.totalMoney += this.totalBet * 2;
            return 'Has ganado! Vete a casa ya anda';

        } else if (this.dealerCount > this.playerCount) {
            setTimeout(()=>{
                
                this.resetHandsAndCounts();
            }, 500);
            return 'Has perdido! Con la de cosas que te podías haber comprado con 5 pavs..';

        } else if (this.playerCount == this.dealerCount){
            setTimeout(()=>{
                
                this.resetHandsAndCounts();
            }, 500);
            this.totalMoney += this.totalBet;
            return 'Push! Ha habido un empate';
        };
    };

    double() {
        if(this.playerCount >=9 && this.playerCount <= 11){
            this.totalMoney -= this.totalBet;
            this.totalBet *= 2;
            this.hit();
            this.standAndCompareHands();
        } else {
            return 'Sorry, you can only double the bet with a count of 9, 10 or 11';
        }
    };

    // split() {

    // };

    // newGame(){

    // };

    // updateBoard() {

    // };
};

$("#startNewGameButton").click(function()
{player = new Game;
    console.log('You began a new game')
});



$("#betButton").click(function(){
    player.bet(100);
    $("#totalMoney").text(player.totalMoney + '$');
    $("#totalBet").text(player.totalBet + '$');
});



$("#dealButton").click(function(){
    $("#dealerCardsDiv").empty();
    $("#dealerCardsDiv").append("<p id = \"dealerCount\" class=\"countSize\"> (0) </p>");

    $("#playerCardsDiv").empty();
    $("#playerCardsDiv").append("<p id = \"playerCount\" class=\"countSize\"> (0) </p>");

    player.resetHandsAndCounts();
    player.shuffleAndDealCards();

    $("#dealerCardsDiv").prepend('<p>' + player.dealerHand[0] + '</p>');

    $("#playerCardsDiv").prepend('<p>' + player.playerHand[0] + '</p>' + '<p>' + player.playerHand[1] + '</p>');

    $("#dealerCount").text('(' + player.dealerCount + ')');

    $("#playerCount").text('(' + player.playerCount + ')');
});




$("#hitButton").click(function(){

    player.hit();

    $("#playerCardsDiv").prepend('<p>' + player.playerHand[player.playerHand.length - 1] + '</p>');

    $("#playerCount").text('(' + player.playerCount + ')');      
});


//acabo de corregir un error que hacia que cuando llegabas a numero negativos, no saltase ningun mensaje. Ahora cuando intentas apostar y no tienes dinero suficiente, no te deja, y te salta una alarma que te dice que no tienes dinero suficiente. 