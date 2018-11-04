
   
    $(document).ready(function () {


        //Questions//
        var q1 = {
            question: "In what substance did that low-life, Jim Halpert, hide my favorite stapler?",
            choice1: "Mose's famous goosefruit pie",
            choice2: "a soiled diaper from his offspring",
            choice3: "a container of green gelatin",
            answer: "a container of green gelatin",

        };



        var q2 = {
            question: "What is the name of our Pennsylvania Dutch version of the pathetic Santa Clause?",
            choice1: "Belsnickel",
            choice2: "Grendel",
            choice3: "Rumplestiltskin",
            answer: "Belsnickel",
        };

        var q3 = {
            question: "Bears, Beets....",
            choice1: "Xena, Princess Warrior",
            choice2: "Battlestar Galactica",
            choice3: "Breaking Bad",
            answer: "Battlestar Galactica",
        };

        var q4 = {
            question: "What was the name of the Civil War event that took place amidst my family's farm?",
            choice1: "Battle of the Schrutes",
            choice2: "Old Willy Nilly Kins",
            choice3: "Battle of Schrute Farms",
            answer: "Battle of Schrute Farms",
        };

        var q5 = {
            question: "What was my favorite nickname for the woman I loved?",
            choice1: "Frodo",
            choice2: "Monkey",
            choice3: "Pinkey",
            answer: "Monkey",


        };


        //More Global Variables//
        var allQuestions = [q1, q2, q3, q4, q5];
        var computerPick = allQuestions[Math.floor(Math.random() * allQuestions.length)];
        var timerNumber = 10;
        var intervalId

        var wins = 0;
        var losses = 0;

        //Start Game

        function startGame() {
            
            //start timer//
            run();
            //show trivia question//
            $(".message").hide();
            $(".questions").text(computerPick.question);
            console.log(computerPick.question)
            $(".1").text(computerPick.choice1);
            console.log(computerPick.choice1)
            $(".2").text(computerPick.choice2);
            console.log(computerPick.choice2)
            $(".3").text(computerPick.choice3);
            console.log(computerPick.choice3);
            
            
        }

        function restartGame() {
            console.log("hello restart");
            intervalId
            timerNumber = 10;
            computerPick = allQuestions[Math.floor(Math.random() * allQuestions.length)];
            startGame();
        }

        //Check to see if an answer is correct + alerts 
        function checkAnswer() {
            // stopTimer();
            if (computerPick === q1 && this.className === "3") {
                win();;

            }
            else if (computerPick === q2 && this.className === "1") {
                win()
            }
            else if (computerPick === q3 && this.className === "2") {
                win()
            }
            else if (computerPick === q4 && this.className === "3") {
                win()
            }
            else if (computerPick === q5 && this.className === "2") {
                win()
            }
            else {
                lose();
            }

        }


        //Adding Win score and show message for 3 seconds//
        function win() {
            $("#messageWin").show();
            wins++
            $(".wins").text("WIN: " + wins);
           
            setTimeout(function () {
                $("#messageWin").hide()
            }, 3000);

            setTimeout(restartGame, 3000);

        }

        //Adding lose score, showing message for 3 seconds//
        function lose() {
            $("#messageLose").show()
            losses++
            $(".losses").text("FAIL: " + losses);
           

            setTimeout(function () {
                $("#messageLose").hide()
            }, 3000);
            
            setTimeout(restartGame, 3000);


        }

            //checking score to show final screen and results
            function checkScore(){
                console.log("final score");
                if(wins ===5 || losses ===5){
                    setTimeout(function() {
                $("#finalScreen").show();
                $("#finalWins").text("Wins:" + wins);
                $("#finalLosses").text("Losses" + losses);
                
            }, 3000);
                setTimeout(restartGame, 3000);
        }
    }






        //Countdown Timer//


        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
            $(".timer").html("00: " + timerNumber)
        }

        // decrement function
        function decrement() {
            timerNumber--;
            $(".timer").html("00: " + timerNumber);
            if (timerNumber === 0) {
                stopTimer();
                $("#timeUp").show();
                losses++
                $(".losses").text("FAIL: " + losses);
                setTimeout(function () {
                    $("#timeUp").hide()
                }, 3000);
              setTimeout(restartGame, 3000);   
            }



        }

        function stopTimer() {
            // var timerNumber = 10;
            clearInterval(intervalId);


        }


       














            //Calling functions:

            checkScore();

            startGame();
           


            //What happens when we click an answer:
            $("h5").on("click", checkAnswer);
        });