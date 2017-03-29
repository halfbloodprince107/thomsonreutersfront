


function login_alert() {

    var f = document.getElementsByTagName('form')[0];
    if(f.checkValidity()) {


        $.getJSON( "data.json", function( data ) {
            var items = [];

            $.each( data, function( key, val ) {
                var token = data.token;
                console.log(token, userName, data.userName);
                if (data.userName == userName){
                    alert("welcome!! " + userName + "and the token is" + token );
                }
                else {
                    // $.validator.messages.required = 'Username Password do not match';
                    alert("error")
                }


            });


        });
        f.submit();
    } else {
        alert(document.getElementById('example').validationMessage);
    }
    var userName = document.getElementById("userName").value;




}

