<script src="https://cdn.emailjs.com/dist/email.min.js"></script>

  emailjs.init("DEIN_USER_ID"); // z.B. "uXyz123ABC"

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_nk1b48p", "template_xyz", this)
      .then(() => alert("Nachricht erfolgreich gesendet!"))
      .catch(() => alert("Fehler beim Senden. Bitte erneut versuchen."));
  });

