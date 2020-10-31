
//get date and time information from moment.js
//this can be manipulated by changing local machine date/time
let today = moment().format("dddd, MMMM Do YYYY");
let time = moment().hour();

$("#currentDay").text(today); //update date header


//iterate through hour divs, each with a class that is just a number (probably not best practice)
//add a css class to change color accordingly
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


//get any info from localStorage
let scheduledEvents = JSON.parse(localStorage.getItem('events'));
if(scheduledEvents === null){
   scheduledEvents = ["","","","","","","","",""]; //if localstorage has no events, make an empty array to be manipulated later
}
else{
    for(let i = 9; i <=17; i++){ //if localstorage has events in it, update placeholders
        $("#form-"+i).attr('placeholder', scheduledEvents[i-9]);
    }
}

let input; //insantiate input for later use
//make all the save-button con click events
$("#9am-save-button").on('click', function(){
    input = $("#form-9").val(); //get input from webpage
    $("#form-9").attr("placeholder", input); //make placeholder the saved text
    scheduledEvents[0] = input; //add event info to scheduledEvents variable
    localStorage.setItem('events', JSON.stringify(scheduledEvents)); //update localStorage
});
 //repeat for 10am-5pm
 //You could make this a single onclick for all the buttons and pull more information from the buttons, but this works and I'm not about to change it. we strive to be DRY but sometimes we fall short
$("#10am-save-button").on('click', function(){
    input = $("#form-10").val();
    $("#form-10").attr("placeholder", input);
    scheduledEvents[1] = input;
    console.log(scheduledEvents[1]);
    localStorage.setItem('events', JSON.stringify(scheduledEvents));
});

$("#11am-save-button").on('click', function(){
    input = $("#form-11").val();
    $("#form-11").attr("placeholder", input);
    scheduledEvents[2] = input;
    localStorage.setItem('events', JSON.stringify(scheduledEvents));
});

$("#12pm-save-button").on('click', function(){
    input = $("#form-12").val();
    $("#form-12").attr("placeholder", input);
    scheduledEvents[3] = input;
    localStorage.setItem('events', JSON.stringify(scheduledEvents));
});

$("#1pm-save-button").on('click', function(){
    input = $("#form-13").val();
    $("#form-13").attr("placeholder", input);
    scheduledEvents[4] = input;
    localStorage.setItem('events', JSON.stringify(scheduledEvents));
});

$("#2pm-save-button").on('click', function(){
    input = $("#form-14").val();
    $("#form-14").attr("placeholder", input);
    scheduledEvents[5] = input;
    localStorage.setItem('events', JSON.stringify(scheduledEvents));
});

$("#3pm-save-button").on('click', function(){
    input = $("#form-15").val();
    $("#form-15").attr("placeholder", input);
    scheduledEvents[6] = input;
    localStorage.setItem('events', JSON.stringify(scheduledEvents));
});

$("#4pm-save-button").on('click', function(){
    input = $("#form-16").val();
    $("#form-16").attr("placeholder", input);
    scheduledEvents[7] = input;
    localStorage.setItem('events', JSON.stringify(scheduledEvents));
});

$("#5pm-save-button").on('click', function(){
    input = $("#form-17").val();
    $("#form-17").attr("placeholder", input);
    scheduledEvents[8] = input;
    localStorage.setItem('events', JSON.stringify(scheduledEvents));
});

