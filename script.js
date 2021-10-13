// (function() {
//     emailjs.init("user_tAvufHslY1h3IMTPwwc0q");
// })();

// function sendForm() {
//     var fullName = document.getElementById("name").value;
//     var userEmail = document.getElementById("email").value;
//     var userMessage = document.getElementById("message").value;

//     var contactParams = {
//         from_name: fullName,
//         from_email: userEmail,
//         message: userMessage,
//     };

//     emailjs.sendForm("service_s0m45so", "template_d48ff8i", contactParams).then(
//         function(response) {
//             console.log("Success", response.status, response.text);
//         },
//         function(error) {
//             console.log("Failed...", error);
//         }
//     );
// }