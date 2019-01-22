// request data from a backend

// put simply, HTTP is a protocol which allows us to send information around the web. for example, when your browser askd for http://domain. HTTP requests come in different flavors, using different verbs(GET, PUT, AND DELETE are the four most common). The kind of request your browser makes

// AJAX stands for Asynchronous JavaScript and XML.

// two other intialisms you may see in this context are API and JSON

// API - Application programming interface
// JSON - javascript object notation


            function newQuote() {
                //the url we are making a request to
                // var url = "https://api.chucknorris.io/jokes/random?category=dev";
                var url = "http://numbersapi.com/#random/math";


                $.ajax({
                    url: url,
                    method: 'get',
                    success: function (data) {
                        //do something when call is successful
                        console.log(data);
                        $('#quote').text(data.value);
                        $('#url').attr('href', data.url);
                        $('#icon').attr('src', data.icon_url);
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });
            }

            $(document).ready(function () {
                newQuote();
                $('button').on('click', newQuote());
            });
        ////////////////////////////////////////task/////////////
        // api challenge
        // numbersapi.com/#42
        // use to fetch data
        // onclick
        // display to the user in a friendly way

        // ajax request 
        // random number between 0-9999
        //  create input
        // validate
        // button to submit number
        // user must receive a fun fact about that number
        // gets bound to the button to perform this repetitive task
        
        // outcomes:
        // know api purpose
        // understand the usage o the ajax function
        // know how to create a request
        // display the result
        // use a function to perform a repetitive task