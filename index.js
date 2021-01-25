$(document).ready(function(){

    //----------declaring all variables------------------------------
    
    var testId = 0;
    var correct = 0;

    var correctColor;
    var selectedColor;

    //----------function definations------------------------------
    
    //pick a random image
    function pickRandomImage(){
        var imageNames = ["captainAmerica", "chipAndDale", "donaldDuck", "frozen", "goofy", "iceAge", "lionKing", "mario", "minions", "mowgli",
                                "nightFury", "penguinsOfMadagascar", "smurf", "snoopy", "spongeBob", "tomAndJerry"];

        var selectedImage = imageNames[Math.floor(Math.random() * imageNames.length)];
        var imagePath = "./images/" + selectedImage + ".png";
        $("#myImage").attr("src", imagePath); 
        $("#myImage").css("background-color","#7d869c");
    }

    //check if the answer of testcase is correct or not
    function checkOutcome()
    {                
        if(testId == 0)//executed when user clicks on button showing start
        {
            $("#next").html("---->");
        }
        if (testId != 0)
        {
            if (correctColor === selectedColor)
            {
                correct = correct + 1;
            }
        }
        if(testId == 4)//executed when reach the last testcase
        {
            $("#next").html("Score");
        }
    }

    //move to the next testcase or color
    function nextTestCase(){
        //check output of previous testcase as some new color has to be selected for the currect test case
        checkOutcome(testId, correctColor, selectedColor);//could have writted at end in this function but 0th testcase is all null so it has to be written here
        
        testId = testId + 1;
        
        //change image
        pickRandomImage();

        //have to move to result window
        if (testId == 6)
        {
            window.location.href = "result.html?correct=" + encodeURIComponent(correct);
        }
        else
        {
            $("#testId").html(testId + " / 5");

            //reset correctColor and selectedColor
            correctColor = null;
            selectedColor = null;

            const colors = ["RED", "ORANGE", "YELLOW", "GREEN", "BLUE", "INDIGO", "VIOLET", "PURPLE", "PINK", "SILVER", "GOLD", "BROWN", "GREY", "BLACK", "WHITE"];
            correctColor = colors[Math.floor(Math.random() * colors.length)];
            $("#message").html("Change background color to ");
            $("#randomColour").html(correctColor);
        }
    }

    //----------calling functions------------------------------

    $("#next").click(nextTestCase);

    //change background color on click of btn class
    $(".btn").click(function(){
        $(".picture").css("background-color", this.id);
        selectedColor = this.id;
    });

    //alert if someone tries to refresh
    $(document.body).on("keydown", this, function (event){
        if (event.keyCode == 116){
        alert("All your progress will be lost. Are you sure you want to refresh.");
        }
    });

});
