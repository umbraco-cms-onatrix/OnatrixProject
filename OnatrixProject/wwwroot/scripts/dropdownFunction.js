function dropdownFunction(event) {
    event.preventDefault();
    console.log("Button clicked!"); // För felsökning
    
    // Hämta närmaste dropdown-innehåll till den knapp som klickats
    var dropdown = document.getElementById("myDropdown");
    
    if (dropdown) {  // Säkerställ att elementet finns
        console.log("Dropdown class list before toggle:", dropdown.classList);
        dropdown.classList.toggle("show");
        console.log("Dropdown class list after toggle:", dropdown.classList);
    } else {
        console.log("Elementet 'myDropdown' hittades inte.");
    }

    window.onclick = function(event) {
    // Kontrollera om det inte är dropdown-knappen som har klickats
        if (!event.target.matches('.btn-menu')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

}
