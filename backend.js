//Dropdown Menü
    function toggleDropdown() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    // Klick außerhalb schließt das Menü
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
//////////////

//Kontaktformular


  emailjs.init("zPjHgTjSbxPH7ddpM"); // z.B. "uXyz123ABC"

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_b7c60p9", "template_qjxzgr9", this)
      .then(() => alert("Nachricht erfolgreich gesendet!"))
      .catch(() => alert("Fehler beim Senden. Bitte erneut versuchen."));
  });

