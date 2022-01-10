

//document.getElementById("btnSend").addEventListener("click", function () {
//    alert("This Worked!" + "\n" + "From: " + document.getElementById("txtFrom").value + "\n" +
//        "Subject: " + document.getElementById("txtSub").value + "\n" + "Message: " +
//        document.getElementById("txtMes").value
//    );
//})

$("#btnSend").click(function () {
    alert("From: " + $("#txtFrom").val() +
        "\n" +
        "Subject: " + $("#txtSub").val() +
        "\n" +
        "Message: " + $("#txtMes").val()
    );

    $("#pic").fadeOut("slow");
})