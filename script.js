$(document).ready(function() {
    console.log(moment().hours());
    var container = $(".container");
    for (var i = 9; i < 17; i++) {
        var div = $(`<div id="hour-${i}" class="row time-block">` +
            `<div class="col-md-1 hour">` +
            `${i}AM` +
            `</div>` +
            `</div>`)
        var nextDiv = $(`<textarea class="col-md-10 description">` +
            `</textarea>` +
            `<button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>` +
            `</div>`)
        container.append(div);
        div.append(nextDiv);
    }
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value)
    });

    var test = 5;

    function hourUpdater() {
        var currentHour = moment().hours();
        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            if (blockHour < currentHour) {
                $(this).addClass("past");
            } else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else if (blockHour > currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    hourUpdater();
    var interval = setInterval(hourUpdater, 15000);

    $("hour-9 .description").val(localStorage.getItem("hour-9"));
    $("hour-10 .description").val(localStorage.getItem("hour-10"));
    $("hour-11 .description").val(localStorage.getItem("hour-11"));
    $("hour-12 .description").val(localStorage.getItem("hour-12"));
    $("hour-13 .description").val(localStorage.getItem("hour-13"));
    $("hour-14 .description").val(localStorage.getItem("hour-14"));
    $("hour-15 .description").val(localStorage.getItem("hour-15"));
    $("hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
})