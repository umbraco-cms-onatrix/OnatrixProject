function handleContactFormSubmit(e) {
    e.preventDefault(); // Stop form submission

    const formInput = document.getElementById('@uniqueName');
    const errorMessageElement = document.getElementById('error-@uniqueName');

    // Get values from data attributes
    const isRequired = formInput.getAttribute('data-required') === 'True';
    const useRegex = formInput.getAttribute('data-use-regex') === 'True';
    const regexPattern = formInput.getAttribute('data-regex-pattern');
    let isValid = true;

    // Reset error message visibility
    errorMessageElement.style.display = 'none';
    formInput.classList.remove('error');

    // Validate if the field is required
    if (isRequired && !formInput.value.trim()) {
        formInput.classList.add('error');
        isValid = false;
    }

    // Validate with regular expression if needed
    if (useRegex && regexPattern) {
        const regex = new RegExp(regexPattern);
        if (!regex.test(formInput.value)) {
            formInput.classList.add('error');
            isValid = false;
        }
    }

    // If validation passes, submit the form
    if (isValid) {
        alert('Form submitted successfully!'); // Replace with fetch logic if needed
    }
}



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


