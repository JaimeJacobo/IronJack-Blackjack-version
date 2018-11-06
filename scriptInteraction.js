
$("#startNewGameButton").click(function(){

    blackjack = new Game;
    blackjack.startNewGame();  
});


$("#dealButton").click(function(){

    blackjack.shuffleAndDealCards();

    $("#playerCount").text('(' + blackjack.playerCount + ')');

    $("#dealerCount").text('(' + blackjack.dealerCount + ')');

    $("#dealerCardsDiv").append("<p>" + blackjack.getCardImage(blackjack.dealerHand[0].name) + "</p>");
});