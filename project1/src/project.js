function getMonth(month) {
    month = month.substring(0, month.indexOf("\n"));
    month = month.toLowerCase();
    console.log(month);
    switch(month){
        case "january":
            return 0;
        case "february":
            return 1;
        case "march":
            return 2;
        case "april":
            return 3;
        case "may":
            return 4;
        case "june":
            return 5;
        case "july":
            return 6;
        case "august":
            return 7;
        case "september":
            return 8;
        case "october":
            return 9;
        case "november":
            return 10;
        case "december":
            return 11;
        default:
            console.log("Incorrect Month");
            return -1;
    }
}

function openForm() {
    document.getElementById('overlay').style.display = "block";
}

function closeForm() {
    document.getElementById('overlay').style.display = "none";
}

window.onload=function(){
    let year = "2024";
    let month = getMonth(document.getElementById("month").innerText);
    let start = new Date(year + '-' + (month+1) + "-01").getDay();
    console.log(start);
    let days = new Date(2024, month+1, 0).getDate();
    console.log(days);
    let inner = "";
    let numday = 1;
    let numweek = 1;
    let currentdate = new Date().getDate();
    for(let i = 0; i<(days+start); i++){
        if(i%7==0){
            inner += "<div class='week' id='week" + numweek +"'>\n"
        }
        if(i<start){
            inner += '\t<div class="day"></div>\n';
        }
        else{
            if(currentdate == numday){
                inner += "\t<div class='day currentday'><p class='date currentdate'>" + numday + "</p></div>\n";
            }
            else{
                inner += "\t<div class='day'><p class='date'>" + numday + "</p></div>\n";
            }
            numday++;
        }
        if(i%7==6){
            inner += "</div>\n"
            numweek++;
        }
    }
    if((days+start)%7!=0){
        for(let i=0; i<7-days%7; i++){
            inner += '\t<div class="day"></div>\n';
        }
        inner += "</div>\n"
    }
    console.log(inner);
    document.getElementById("month").innerHTML = document.getElementById("month").innerHTML + inner;

    const cal = document.querySelectorAll(".day")
    cal.forEach(date =>{
        date.addEventListener("click", function openForm(event) {
            console.log("date clicked", event);
            document.getElementById('overlay').style.display = "block";
            document.getElementById('x').addEventListener("click", closeForm);
            document.getElementById('submit').addEventListener('click', submitForm);
        });
    });

}

