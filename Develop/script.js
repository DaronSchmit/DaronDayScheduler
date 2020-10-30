let today = moment().format("dddd, MMMM Do YYYY");
let time = moment().hour();

$("#currentDay").text(today);

// for(let i=9; i < 17; i++){
//     let hour = i +"am";
//     if(parseInt(hour) > 12){
//         hour = parseInt(hour)-12;
//         hour = hour + "pm";
//     }
//     let newHour = $("<row class='"+hour+"'></row>");
//     newHour.append("<div class='col-sm-2'>"+hour+"</div><div class='col-sm-8'>events go here</div><div class='col-sm-2 save-button'><i class='fas fa-save'></i></div>");

//     $(".container").append(newHour);
// }

for(let i = 9; i <= 17; i++){
    if(time < i){
        $("."+i).addClass("future");
    }
    else if (time === i){
        $("."+i).addClass("present");
    }
    else{
        $("."+i).addClass("past");
    }
}

let scheduledEvents = JSON.parse(localStorage.getItem('events'));
if(scheduledEvents === null){
   scheduledEvents = ["","","","","","","","",""];
}
else{
    for(let i = 9; i <=17; i++){
        $("#form-"+i).attr('placeholder', scheduledEvents[i-9]);
    }
}

let input;

$("#9am-save-button").on('click', function(){
    input = $("#form-9").val();
    $("#form-9").attr("placeholder", input);
    scheduledEvents[0] = input;
    localStorage.setItem('events', JSON.stringify(scheduledEvents));
})

$("#10am-save-button").on('click', function(){
    input = $("#form-10").val();
    $("#form-10").attr("placeholder", input);
    scheduledEvents[1] = input;
    console.log(scheduledEvents[1]);
    localStorage.setItem('events', JSON.stringify(scheduledEvents));
})

$("#11am-save-button").on('click', function(){
    input = $("#form-11").val();
    $("#form-11").attr("placeholder", input);
    scheduledEvents[2] = input;
    localStorage.setItem('events', JSON.stringify(scheduledEvents));
})

$("#12pm-save-button").on('click', function(){
    input = $("#form-12").val();
    $("#form-12").attr("placeholder", input);
    scheduledEvents[3] = input;
    localStorage.setItem('events', JSON.stringify(scheduledEvents));
})

$("#1pm-save-button").on('click', function(){
    input = $("#form-1").val();
    $("#form-1").attr("placeholder", input);
    scheduledEvents[4] = input;
    localStorage.setItem('events', JSON.stringify(scheduledEvents));
})

$("#2pm-save-button").on('click', function(){
    input = $("#form-2").val();
    $("#form-2").attr("placeholder", input);
    scheduledEvents[5] = input;
    localStorage.setItem('events', JSON.stringify(scheduledEvents));
})

$("#3pm-save-button").on('click', function(){
    input = $("#form-3").val();
    $("#form-3").attr("placeholder", input);
    scheduledEvents[6] = input;
    localStorage.setItem('events', JSON.stringify(scheduledEvents));
})

$("#4pm-save-button").on('click', function(){
    input = $("#form-4").val();
    $("#form-4").attr("placeholder", input);
    scheduledEvents[7] = input;
    localStorage.setItem('events', JSON.stringify(scheduledEvents));
})

$("#5pm-save-button").on('click', function(){
    input = $("#form-5").val();
    $("#form-5").attr("placeholder", input);
    scheduledEvents[8] = input;
    localStorage.setItem('events', JSON.stringify(scheduledEvents));
})

