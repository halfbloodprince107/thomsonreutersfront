function login_alert() {

    var f = document.getElementsByTagName('form')[0];
    if(f.checkValidity()) {
        f.submit();
    } else {
        alert(document.getElementById('example').validationMessage);
    }

    var userName = document.getElementById("userName").value;
    alert("welcome!! " + userName);

}
