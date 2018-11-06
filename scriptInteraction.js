
$("#footerDiv2").hide();


$("#startNewGameButton").click(function(){

    $("#hitButton").hide();
    $("#standButton").hide();
    $("#dealerButton").show();

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
});


$("#standButton").click(function(){

    blackjack.standAndCompareHands();

    $("#hitButton").hide();
    $("#standButton").hide();
    $("#footerDiv2").append("<div id='clearButton'> <button type='button' class='btn btn-secondary'>Clear</button> </div>");

    $("#clearButton").click(function(){

        blackjack.clearTheBoard();

    $("#clearButton").remove();
    $("#dealButton").show();
    });
});
