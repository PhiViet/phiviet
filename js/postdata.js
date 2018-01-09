function postData() {
    var name = $('input[name="name"]').val();
    var email = $('input[name="email"]').val();
    var message = $('textarea[name="message"]').val();
    $.ajax({
        url: "http://janeto.us.to:7752/api/contact",
        method: "POST",
        data: {
            name: name,
            email: email,
            message: message
        },
        success: function (response) {
            var html = "";
            html += "<p>Name: " + response.name + "</p>";
            html += "<p>Email: " + response.email + "</p>";
            html += "<p>Message: " + response.message + "</p>";
            $('#result').append(html);
            // console.log(response);
            alert("Gửi thành công !")
        },
        error: function (error) {
            // window.alert('Error');
            // console.log(error);
            alert("Gửi thất bại !");
        }
    })
}