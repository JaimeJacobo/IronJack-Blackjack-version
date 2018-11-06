
$("#footerDiv2").hide();


$("#startNewGameButton").click(function(){

    $("#hitButton").hide();
    $("#standButton").hide();
    $("#dealButton").show();
    $("#clearButton").hide();

    $("#footerDiv2").show();

    blackjack = new Game;
    blackjack.startNewGame();  
});


$("#dealButton").click(function(){

    $("#hitButton").show();
    $("#standButton").show();

    blackjack.shuffleAndDealCards();

    $("#playerCount").text('(' + blackjack.playerCount + ')');

    $("#dealerCount").text('(' + blackjack.dealerCount + ')');


    $("#playerCardsDiv").append("<p>" + blackjack.getCardImage(blackjack.playerHand[0].name) + "</p>" + "<p>" + blackjack.getCardImage(blackjack.playerHand[1].name) + "</p>");

    $("#dealerCardsDiv").append("<p>" + blackjack.getCardImage(blackjack.dealerHand[0].name) + "</p>");

    $("#dealButton").hide();
});


$("#hitButton").click(function(){

    blackjack.playerHit();

    $("#playerCount").text('(' + blackjack.playerCount + ')');

    $("#playerCardsDiv").append("<p>" + blackjack.getCardImage(blackjack.playerHand[blackjack.playerHand.length - 1].name) + "</p>");

    if(blackjack.playerCount > 21){

        setTimeout(function(){
            alert('YOU LOSE! You bust.');
        }, 100);

        blackjack.endGame();
    };
});


$("#standButton").click(function(){

    blackjack.standAndCompareHands();

    if(blackjack.dealerCount > 21) {
        setTimeout(function(){
            alert('YOU WIN! Dealer busts.');
        }, 100);

        blackjack.endGame();

    } else if(blackjack.playerCount > blackjack.dealerCount){
        setTimeout(function(){
            alert("YOU WIN! Your hand is better than the dealer's.");
        }, 100);

        blackjack.endGame();

    } else if(blackjack.dealerCount > blackjack.playerCount){
        setTimeout(function(){
            alert("YOU LOOSE! Your hand is worse than the dealer's.");
        }, 100);

        blackjack.endGame();
    };
});
