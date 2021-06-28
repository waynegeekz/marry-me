const question = [  
    {
        message: `<>Date Night<&#47;><br><br>Birthday Edition`,
        responses: ['Start']
    },
    {
        message: `When did we become an official couple? Exact date.`,
        responses: ['Back', 'Next']
    },
    {
        message: `What do you admire most about me?`,
        responses: ['Back', 'Next']
    },
    {
        message: `Have you changed in the past 5 years? If yes, what changed?`,
        responses: ['Back', 'Next']
    },
    {
        message: `What song reminds you of me?`,
        responses: ['Back', 'Next']
    },
    {
        message: `What's the most embarrasing thing that has happened to you?`,
        responses: ['Back', 'Next']
    },
    {
        message: `What's something you wish I'd do more for you?`,
        responses: ['Back', 'Next']
    },
    {
        message: `Share a happy memory. Could be about anything.`,
        responses: ['Back', 'Next']
    },
    {
        message: `What has been the best part of the day so far?`,
        responses: ['Back', 'Next']
    },
    {
        message: `What's the best gift I've given you?`,
        responses: ['Back', 'Next']
    },
    {
        message: `Who's the most awkward person you know? haha.`,
        responses: ['Back', 'Next']
    },
    {
        message: `Lightning Round<br>Are you ready?`,
        responses: ['Next']
    },
    {
        message: `Will you marry me?`,
        responses: ['Yes', 'No']
    },
    {
        message: "Congratulations! You've made the right choice!",
        responses: ['Accept Ring']
    }
]
const successMessage = () => {
    $("#message-response").html('')
    $("#message-question").html('Salamat mga supporters! Please destroy the notification bell and subscribe!')
}

const showMessage = index => {

    $('#message')
        .fadeOut( () => {    
            $("#message-question").html('')
            $("#message-response").html('')
        })
        .fadeIn( () => {

            if(question.length !== index) {

        
                if(index == 0 || index == question.length-1 || index == question.length-2 || index == question.length-3 ) {
                    $("#message-question").html(question[index].message)
                } else {
                    $("#message-question").html(`<b>Question #${index}</b><br>${question[index].message}`)
                }
        
                const buttons = question[index].responses.map( (response) => {

                    let functionResponse = ''
        
                    if (response == 'No') {
                        functionResponse = `alert('Please don\\'t say no? Please?')`
                    } else if(response == 'Back') {
                        functionResponse = `showMessage(${index-1})`
                    } else if(response == 'Accept Ring') {
                        functionResponse = `successMessage()`
                    } else {
                        functionResponse = `showMessage(${index+1})`
                    }

                    return `<button id="${response}" value="${response}" onclick="${functionResponse}">${response}</button>`
            
                })
        
                $("#message-response").html(buttons)
            }

        });

}


// Set the date we're counting down to
var countDownDate = new Date("June 26, 2021 16:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML = hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        
        //EMPTY TIMER
        document.getElementById("timer").innerHTML = '';

        showMessage(0);

    }

}, 1000);