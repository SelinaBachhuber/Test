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
