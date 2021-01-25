$(document).ready(function(){
            
    function createGraph() {

        //get parameters from url
        incomingURL = document.location.href;
        const url = new URL(incomingURL);

        correct = url.searchParams.get("correct"); 
        incorrect = 5 - correct;

        $("#test").html(correct + " / " + 5);

        var chart = new CanvasJS.Chart("chartContainer", {
            title:{
                text: ""              
            },
            data: [              
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "pie",
                    dataPoints: [
                        { label: "correct",  y: correct },
                        { label: "incorrect", y: incorrect }
                    ]
                }
            ]
        });
        chart.render();
    };

    createGraph();
});