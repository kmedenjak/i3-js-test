window.addEventListener('load', (event) => {
    oneOrMore();
});



var selectedAns1 = new Array();
var selectedAns2 = new Array();
var selectedAns3 = new Array();
var selectedAns4 = new Array();

function selectedAnswers() {

    var ans = document.getElementById("ans");
    var ansChecked = ans.getElementsByTagName("INPUT");

    for (var i = 0; i < ansChecked.length; i++) {
        if (ansChecked[i].checked && document.URL.includes("slide1.html")) {
            selectedAns1.push(ansChecked[i].value);

        } else if (ansChecked[i].checked && document.URL.includes("slide2.html")) {
            selectedAns2.push(ansChecked[i].value);
        }
        else if (ansChecked[i].checked && document.URL.includes("slide3.html")) {
            selectedAns3.push(ansChecked[i].value);
        }
        else if (ansChecked[i].checked && document.URL.includes("slide4.html")) {
            selectedAns4.push(ansChecked[i].value);
        }
    }
    numberOfSelectedItems();
}


function oneOrMore() {

    if (sessionStorage.getItem('Question1').length >= 1) {
        var nav1 = document.getElementById("nav1");
        nav1.setAttribute("style",
            "background-color:#edb06f;");
    }

    if (sessionStorage.getItem('Question2').length >= 1) {
        var nav2 = document.getElementById("nav2");
        nav2.setAttribute("style",
            "background-color:#edb06f;");
    }

    if (sessionStorage.getItem('Question3').length >= 1) {
        var nav3 = document.getElementById("nav3");
        nav3.setAttribute("style",
            "background-color:#edb06f;");
    }

    if (sessionStorage.getItem('Question4').length >= 1) {
        var nav4 = document.getElementById("nav4");
        nav4.setAttribute("style",
            "background-color:#edb06f;");
    }
}

function buttonDisable() {
    var results = document.getElementById("showResults");
    if (sessionStorage.getItem('Question1').length < 1 || sessionStorage.getItem('Question2').length < 1 || sessionStorage.getItem('Question3').length < 1 || sessionStorage.getItem('Question4').length < 1) {
        results.disabled = true;
    } else {
        results.disabled = false;
    }
}

function numberOfSelectedItems() {

    if (selectedAns1.length < 4 && document.URL.includes("slide1.html")) {
        sessionStorage.setItem('Question1', selectedAns1);
        window.location.href = "slide2.html";
    } else if (selectedAns2.length < 5 && document.URL.includes("slide2.html")) {
        console.log(selectedAns2.length);
        sessionStorage.setItem('Question2', selectedAns2);
        window.location.href = "slide3.html";
    } else if (selectedAns3.length < 6 && document.URL.includes("slide3.html")) {
        console.log(selectedAns3.length);
        sessionStorage.setItem('Question3', selectedAns3);
        window.location.href = "slide4.html";
    } else if (selectedAns4.length < 7 && document.URL.includes("slide4.html")) {
        console.log(selectedAns4.length);
        sessionStorage.setItem('Question4', selectedAns4);
        window.location.href = "proba.html";
    } else {
        alertMessage("Odabrali ste previše odgovora", 3000);
        setTimeout(function () { window.location.reload() }, 3000);
    }
}


function deleteItem() {
    window.sessionStorage.clear();
}

function showAnswers() {

    var session = sessionStorage.getItem('Question1');
    var probaAns = session;

    var session2 = sessionStorage.getItem('Question2');
    var probaAns2 = session2;

    var session3 = sessionStorage.getItem('Question3');
    var probaAns3 = session3;

    var session4 = sessionStorage.getItem('Question4');
    var probaAns4 = session4;

    proba = ("Question 1: " + probaAns + '<br>' + "Question 2: " + probaAns2 + '<br>' + "Question 3: " + probaAns3 + '<br>' + "Question 4: " + probaAns4 + '<br>');
    return proba;
}


function alertMessage(message, duration) {
    var element = document.createElement("div");
    element.setAttribute("style",
        "position:absolute; top:40%; left:50%; background-color:white; padding:5%; border:#262525,thin,solid;");
    element.innerHTML = message;
    setTimeout(function () {
        element.parentNode.removeChild(element);
    }, duration);
    document.body.appendChild(element);
}



