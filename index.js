let speed = 0;
let ep = 1;

function chooseMole(){
    if (speed==1){
        document.getElementById('KK').style.color="red";
        document.getElementById('KA').style.color = "#ffcd08";
        document.getElementById('KT').style.color = "#ffcd08";
    }
    else if (speed==2) {
        document.getElementById('KK').style.color = "#ffcd08";
        document.getElementById('KA').style.color = "red";
        document.getElementById('KT').style.color = "#ffcd08";
    }
    else if (speed==3) {
        document.getElementById('KK').style.color = "#ffcd08";
        document.getElementById('KA').style.color = "#ffcd08";
        document.getElementById('KT').style.color = "red";
    }
}

function epileptic(){
    currentcolor = document.body.style.backgroundColor;
    if (ep==-1) {
        if (currentcolor != "white" && currentcolor != "red") {
            document.getElementById('body').style.backgroundColor = "white";
        } else if (currentcolor == "white") {
            document.getElementById('body').style.backgroundColor = "red";
        } else if (currentcolor == "red") {
            document.getElementById('body').style.backgroundColor = "black";
        }
        rec();
    }
        else if (ep==1) {
        document.getElementById('body').style.backgroundColor = "#5800ff";
        clearTimeout(epiworks);
    }
}

function rec(){
    epiworks = setTimeout(epileptic, 85);
}
