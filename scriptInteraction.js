
$("#footerDiv2").hide();
$("#dealerCardsDiv").text('');
$("#totalBet").text('');
$("#playerCardsDiv").text('');



$("#startNewGameButton").click(function(){

    
    $("#totalBet").hide();
    $("#hitButton").hide();
    $("#standButton").hide();
    $("#clearButton").hide();
  

    $("#footerDiv2").show();
    
    // $("#dealerCardsDiv").hide();
    // $("#totalBet").hide();
    // $("#playerCardsDiv").hide();
    // $("#dealerCardsDiv").show();
    // $("#totalBet").show();
    // $("#playerCardsDiv").show();

    blackjack = new Game;
    blackjack.startNewGame();  
    $("#dealButton").hide();
});


$("#dealButton").click(function(){

    $("#totalBet").show();
    $("#moneySpan").remove();

    $("#playerCardsDiv").append("<p id = 'playerCount' class='countSize'> (0) </p>");
    $("#dealerCardsDiv").append("<p id = 'dealerCount' class='countSize'> (0) </p>");
    $("#totalBet").text(blackjack.totalBet + '$');

    if(blackjack.totalBet == 0){
        alert('Place, place your bet');
        
    } else {

        $("#hitButton").show();
        $("#standButton").show();
        $("#whiteChip").hide();
        $("#redChip").hide();
        $("#blueChip").hide();

        blackjack.shuffleAndDealCards();

        $("#playerCount").text('(' + blackjack.playerCount + ')');

        $("#dealerCount").text('(' + blackjack.dealerCount + ')');


        $("#playerCardsDiv").append("<p>" + blackjack.getCardImage(blackjack.playerHand[0].name) + "</p>" + "<p>" + blackjack.getCardImage(blackjack.playerHand[1].name) + "</p>");

        $("#dealerCardsDiv").append("<p>" + blackjack.getCardImage(blackjack.dealerHand[0].name) + "</p>");

        $("#dealButton").hide();

        if(blackjack.playerCount == 21){

            setTimeout(function(){
                alert('BLACKJACK! YOU WIN!');
            },100);

            blackjack.totalMoney += (blackjack.totalBet * 2) + (blackjack.totalBet / 2);
            blackjack.endGame();

        };

        if(blackjack.playerHand[0].name == '4' && blackjack.playerHand[1].name == '4'){

            $("#header").click(function(){
                $("body").html('<img src="images//dancing_banana21.gif" class="easterEgg">');
            })

        };
    }; 
});


$("#hitButton").click(function(){
    
    

    blackjack.playerHit();

    $("#playerCount").text('(' + blackjack.playerCount + ')');

    $("#playerCardsDiv").append("<p>" + blackjack.getCardImage(blackjack.playerHand[blackjack.playerHand.length - 1].name) + "</p>");



    if(blackjack.playerCount > 21){


        for(let i = 0; i < blackjack.playerHand.length; i++){

            if(blackjack.playerHand[i].value == 11){
                blackjack.playerHand[i].value = 1;
                break;
            };
        };

        blackjack.playerCount = 0;

        for (let i = 0; i < blackjack.playerHand.length; i++){
            blackjack.playerCount += blackjack.playerHand[i].value;
        };

        $("#playerCount").text('(' + blackjack.playerCount + ')');

        if(blackjack.playerCount > 21){

            setTimeout(function(){
                alert('YOU LOSE! You bust.');
            }, 100);

            blackjack.endGame();
        };
    };
});


$("#standButton").click(function(){

    

    blackjack.standAndCompareHands();

    if(blackjack.dealerCount > 21) {
        setTimeout(function(){
            alert('YOU WIN! Dealer busts.');
        }, 100);

        blackjack.totalMoney += blackjack.totalBet * 2;
        blackjack.endGame();

    } else if(blackjack.playerCount > blackjack.dealerCount){
        setTimeout(function(){
            alert("YOU WIN! Your hand is better than the dealer's.");
        }, 100);

        blackjack.totalMoney += blackjack.totalBet * 2;
        blackjack.endGame();

    } else if(blackjack.dealerCount > blackjack.playerCount){
        setTimeout(function(){
            alert("YOU LOSE! Your hand is worse than the dealer's.");
        }, 100);

        blackjack.endGame();
    } else if(blackjack.dealerCount == blackjack.playerCount){
        setTimeout(function(){
        alert("PUSH! Your hand has the same value than the dealer's")
        }, 100);

        blackjack.totalMoney += blackjack.totalBet;
        blackjack.endGame();
    };
});

$("#whiteChip").click(()=>{

    $("#dealButton").show();

    if((blackjack.totalMoney - 10) > -1){
        blackjack.totalBet += 10;
        blackjack.totalMoney -= 10;
        $("#totalMoney").text(blackjack.totalMoney + '$');
        $("#totalMoney").append('<span id="moneySpan" style="font-size: 20px;">(' + blackjack.totalBet + '$)</span>');
    } else {
        alert("You don't have enough money to make this bet.");
    };
    
});

$("#redChip").click(()=>{

    $("#dealButton").show();

    if((blackjack.totalMoney - 50) > -1){
        blackjack.totalBet += 50;
        blackjack.totalMoney -= 50;
        $("#totalMoney").text(blackjack.totalMoney + '$');
        $("#totalMoney").append('<span id="moneySpan" style="font-size: 20px;">(' + blackjack.totalBet + '$)</span>');
    } else {
        alert("You don't have enough money to make this bet.");
    };
});

$("#blueChip").click(()=>{

    $("#dealButton").show();

    if((blackjack.totalMoney - 100) > -1){
        blackjack.totalBet += 100;
        blackjack.totalMoney -= 100;
        $("#totalMoney").text(blackjack.totalMoney + '$');
        $("#totalMoney").append('<span id="moneySpan" style="font-size: 20px;">(' + blackjack.totalBet + '$)</span>');
    } else {
        alert("You don't have enough money to make this bet.");
    };
});

