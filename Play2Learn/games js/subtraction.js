
                        let n1 = Math.floor(Math.random() * 20 + 1);
                        let n2 = Math.floor(Math.random() * 20 + 1);
                        var score = 0;

                        document.getElementById("intext").value = n1;
                        document.getElementById("intext1").value = n2;

                        let adds = n1 - n2;


                        function Game() {
                            var user = document.getElementById("result").value;

                            if (user == adds) {
                                document.getElementById("ans").innerHTML = "Well Done! Your Answer is Correct";
                                score++;
                                document.getElementById("score").innerText = "Your score " + score;
                            } else {
                                document.getElementById("ans").innerHTML = "Correct Answer " + adds + " . Try Again";
                                score--;
                                document.getElementById("score").innerText = "Your score " + score;
                            }

                            var user = document.getElementById("result").value = "";


                            n1 = Math.floor(Math.random() * 20 + 1);
                            n2 = Math.floor(Math.random() * 20 + 1);

                            document.getElementById("intext").value = n1;
                            document.getElementById("intext1").value = n2;

                            adds = n1 - n2;
                        }

                        // This function clear all the values
                        function clearScreen() {
                            document.getElementById("result").value = "";
                        }
                        // This function display values
                        function display(value) {
                            document.getElementById("result").value += value;
                        }

                        let timeLeft = 30;
                        let timeInterval;
                        function startGame() {
                            document.getElementById("startBtn").disabled = true;


                            let timeDisplay = document.getElementById('timeDisplay');
                            timeDisplay.hidden = false;
                            timeInterval = setInterval(function () {
                                timeLeft--;
                                timeDisplay.innerHTML = "Time Left: " + timeLeft;
                                if (timeLeft == 0) {
                                    clearInterval(timeInterval);
                                    document.getElementById("timeDisplay").innerHTML = "Time is up and your final score is " + score;
                                    document.getElementById("checkAns").disabled = true;
                                }
                            }, 1000);

                        }

                        function myFunction() {
                            var x = document.getElementById("myDIV");
                            if (x.style.display === "none") {
                                x.style.display = "block";
                            } else {
                                x.style.display = "none";
                            }
                        }
