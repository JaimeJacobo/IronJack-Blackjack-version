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

        
    }

    bet(betInt) {

        if(betInt <= this.totalMoney){
            this.totalMoney -= betInt;
            this.totalBet = betInt;
        }else if(betInt > this.totalMoney){
            alert("You don't have enough money to place this bet");
        } else {
            alert('Please, introduce a valid number.');
        };
    };

    shuffleAndDealCards(){
        
        let firstRandomNumber = Math.floor(Math.random()*this.deckOfCards.length + 1);
        let secondRandomNumber = Math.floor(Math.random()*this.deckOfCards.length + 1);
        let thirdRandomNumber = Math.floor(Math.random()*this.deckOfCards.length + 1);

        if(this.totalBet <= 0){

            alert('Pleace, place your bet.');

        } else if(this.totalBet > 0) {

            if(this.deckOfCards.indexOf(firstRandomNumber) == -1){
                this.playerCount += 10;
            } else {
                this.playerCount += firstRandomNumber;
            };


            if(this.deckOfCards.indexOf(secondRandomNumber) == -1){
                this.dealerCount += 10;
            } else {
                this.dealerCount += secondRandomNumber;
            };


            if(this.deckOfCards.indexOf(thirdRandomNumber) == -1){
                this.playerCount += 10;
            } else {
                this.playerCount += thirdRandomNumber;
            };


            if(firstRandomNumber == 11){
                this.playerHand.push('J');
            } else if(firstRandomNumber == 12){
                this.playerHand.push('Q');
            } else if(firstRandomNumber == 13){
                this.playerHand.push('K');
            } else {
                this.playerHand.push(firstRandomNumber);
            };

            if(secondRandomNumber == 11){
                this.dealerHand.push('J');
            } else if(secondRandomNumber == 12){
                this.dealerHand.push('Q');
            } else if(secondRandomNumber == 13){
                this.dealerHand.push('K');
            } else {
                this.dealerHand.push(secondRandomNumber);
            };

            if(thirdRandomNumber == 11){
                this.playerHand.push('J');
            } else if(thirdRandomNumber == 12){
                this.playerHand.push('Q');
            } else if(thirdRandomNumber == 13){
                this.playerHand.push('K');
            } else {
                this.playerHand.push(thirdRandomNumber);
            };

            if(this.playerCount == 9 || this.playerCount == 10 || this.playerCount == 11){
                $("#footerDiv2").append("<div id=\"doubleButton\"> <button type=\"button\" class=\"btn btn-warning\">Double</button></div>");

                $("#doubleButton").click(function(){
                    player.double();

                    $("#doubleButton").remove();
                });
            };
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

            alert('HAS PERDIDO. Te has pasado.');
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

            $("#dealerCardsDiv").prepend('<p>' + getCardImage(player.dealerHand[player.dealerHand.length - 1]) + '</p>');
        };


        $("#dealerCount").text('(' + player.dealerCount + ')');

        if(this.dealerCount > 21){
                
            this.totalMoney += this.totalBet * 2;
            alert( 'HAS GANADO. El croupier se ha pasado.');
            $("#totalBet").text('0$');
            $("#totalMoney").text(this.totalMoney + '$');


        } else if(this.playerCount > this.dealerCount){
            
            this.totalMoney += this.totalBet * 2;
            alert('HAS GANADO. Tienes una mejor mano que la del croupier.');
            $("#totalBet").text('0$');
            $("#totalMoney").text(this.totalMoney + '$');

        } else if (this.dealerCount > this.playerCount) {
            
            alert('HAS PERDIDO. Tienes una mano peor que la del croupier.');
            $("#totalBet").text('0$');
            
        } else if (this.playerCount == this.dealerCount){
            
            this.totalMoney += Number(this.totalBet);
            alert('PUSH! Ha habido un empate');
            $("#totalBet").text('0$');
            $("#totalMoney").text(this.totalMoney + '$');
        };
    };

    double() {
            
            this.totalMoney -= this.totalBet;
            this.totalBet *= 2;
            this.hit();

            $("#playerCardsDiv").prepend('<p>' + getCardImage(player.playerHand[player.playerHand.length - 1]) + '</p>');
        
            $("#playerCount").text('(' + player.playerCount + ')');  

            this.standAndCompareHands();
            $("#totalMoney").text(player.totalMoney + '$');

           
    };

    // split() {

    // };

    // newGame(){

    // };

    // updateBoard() {

    // };
};

let getCardImage = function(card){

    let arrayOfFourElements = [1, 2, 3, 4];

    let randomNumberForTheImage = Math.floor(Math.random()*arrayOfFourElements.length);

    if(randomNumberForTheImage == 0){

        if(card == 1){
            return '<img src="images//AC.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 2){
            return '<img src="images//2C.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 3){
            return '<img src="images//3C.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 4){
            return '<img src="images//4C.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 5){
            return '<img src="images//5C.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 6){
            return '<img src="images//6C.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 7){
            return '<img src="images//7C.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 8){
            return '<img src="images//8C.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 9){
            return '<img src="images//9C.png" class="sizeOfTheCardsOnTheTable">';
        } else if(card == 10){
            return '<img src="images//10C.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 'J'){
            return '<img src="images//JC.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 'Q'){
            return '<img src="images//QC.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 'K'){
            return '<img src="images//KC.png" class="sizeOfTheCardsOnTheTable">';
        
        }; 
        

    } else if(randomNumberForTheImage == 1){

        if(card == 1){
            return '<img src="images//AD.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 2){
            return '<img src="images//2D.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 3){
            return '<img src="images//3D.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 4){
            return '<img src="images//4D.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 5){
            return '<img src="images//5D.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 6){
            return '<img src="images//6D.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 7){
            return '<img src="images//7D.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 8){
            return '<img src="images//8D.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 9){
            return '<img src="images//9D.png" class="sizeOfTheCardsOnTheTable">';
        } else if(card == 10){
            return '<img src="images//10D.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 'J'){
            return '<img src="images//JD.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 'Q'){
            return '<img src="images//QD.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 'K'){
            return '<img src="images//KD.png" class="sizeOfTheCardsOnTheTable">';
        };


    } else if(randomNumberForTheImage == 2){

        if(card == 1){
            return '<img src="images//AH.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 2){
            return '<img src="images//2H.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 3){
            return '<img src="images//3H.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 4){
            return '<img src="images//4H.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 5){
            return '<img src="images//5H.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 6){
            return '<img src="images//6H.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 7){
            return '<img src="images//7H.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 8){
            return '<img src="images//8H.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 9){
            return '<img src="images//9H.png" class="sizeOfTheCardsOnTheTable">';
        } else if(card == 10){
            return '<img src="images//10H.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 'J'){
            return '<img src="images//JH.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 'Q'){
            return '<img src="images//QH.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 'K'){
            return '<img src="images//KH.png" class="sizeOfTheCardsOnTheTable">';
        };
    } else if(randomNumberForTheImage == 3){

        if(card == 1){
            return '<img src="images//AS.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 2){
            return '<img src="images//2S.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 3){
            return '<img src="images//3S.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 4){
            return '<img src="images//4S.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 5){
            return '<img src="images//5S.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 6){
            return '<img src="images//6S.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 7){
            return '<img src="images//7S.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 8){
            return '<img src="images//8S.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 9){
            return '<img src="images//9S.png" class="sizeOfTheCardsOnTheTable">';
        } else if(card == 10){
            return '<img src="images//10S.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 'J'){
            return '<img src="images//JS.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 'Q'){
            return '<img src="images//QS.png" class="sizeOfTheCardsOnTheTable">';

        } else if(card == 'K'){
            return '<img src="images//KS.png" class="sizeOfTheCardsOnTheTable">';
        };
    };   
};

$("#footerDiv2").hide();

$("#startNewGameButton").click(function(){

    $("#footerDiv2").show();
    
    $("#dealerCardsDiv").empty();
    $("#dealerCardsDiv").append("<p id = \"dealerCount\" class=\"countSize\"> (0) </p>");

    $("#playerCardsDiv").empty();
    $("#playerCardsDiv").append("<p id = \"playerCount\" class=\"countSize\"> (0) </p>");

    $("#totalMoney").text('1000$');
    $("#inputBox").val('');

    $("#totalBet").text('0$');

   

   


    player = new Game;
    
});


$("#betButton").click(function(){

    $("#dealerCardsDiv").empty();
    $("#dealerCardsDiv").append("<p id = \"dealerCount\" class=\"countSize\"> (0) </p>");

    $("#playerCardsDiv").empty();
    $("#playerCardsDiv").append("<p id = \"playerCount\" class=\"countSize\"> (0) </p>");
    
    player.bet($("#inputBox").val());

    

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
    
    if(player.totalBet > 0){
       

        // $("#dealerCardsDiv").prepend('<img src="images//10C.png" class="sizeOfTheCardsOnTheTable">');

        $("#dealerCardsDiv").prepend('<p>' + getCardImage(player.dealerHand[0]) + '</p>');

        $("#playerCardsDiv").prepend('<p>' + getCardImage(player.playerHand[0]) + '</p>' + '<p>' + getCardImage(player.playerHand[1]) + '</p>');

        $("#dealerCount").text('(' + player.dealerCount + ')');

        $("#playerCount").text('(' + player.playerCount + ')');
    };   
});


$("#hitButton").click(function(){

    $("#doubleButton").remove();
    player.hit();

    $("#playerCardsDiv").prepend('<p>' + getCardImage(player.playerHand[player.playerHand.length - 1]) + '</p>');

    $("#playerCount").text('(' + player.playerCount + ')');      
});


$("#standButton").click(function(){
player.standAndCompareHands();
});




