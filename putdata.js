function submitToAPI(e) {
       e.preventDefault();
       var URL = "https://4pd78wqu9a.execute-api.us-east-2.amazonaws.com/PostCopy/postneedyrequest";

            /*var Namere = /[A-Za-z]{1}[A-Za-z]/;
            if (!Namere.test($("#name-input").val())) {
                         alert ("Name can not less than 2 char");
                return;
            }
            var mobilere = /[0-9]{10}/;
            if (!mobilere.test($("#phone-input").val())) {
                alert ("Please enter valid mobile number");
                return;
            }
            if ($("#email-input").val()=="") {
                alert ("Please enter your email id");
                return;
            }

            var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
            if (!reeamil.test($("#email-input").val())) {
                alert ("Please enter valid email address");
                return;
            }*/

       var request_id = $("#request_id");
       var needy_id = $("#needy_id");
       var needy_name = $("#needy_name");
       var exam_name = $("#exam_name");
       var city_name = $("#city_name");
       var state_name = $("#state_name")
       var data = {
          request_id : request_id,
          needy_id : needy_id,
          needy_name : needy_name,
          exam_name : exam_name,
          city_name : city_name,
          state_name : state_name
        };

       $.ajax({
         type: "POST",
         url : "https://4pd78wqu9a.execute-api.us-east-2.amazonaws.com/PostCopy/postneedyrequest",
         dataType: "json",
         crossDomain: "true",
         contentType: "application/json; charset=utf-8",
         data: JSON.stringify(data),

         
         success: function () {
           // clear form and show a success message
           alert("Booked! You will receive an email shortly confirming your reservation.");
           document.getElementById("reg-form").reset();
       location.reload();
         },
         error: function () {
           // show an error message
           alert("Error!!");
         }});
     }
