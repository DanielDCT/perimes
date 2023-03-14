 // Funcion cerrar carga
    
    window.onload = function (){
        var contenedor = document.getElementById('contenedor-carga');
        contenedor.style.visibility = 'hidden'
        contenedor.style.opacity = '0';
    }

// Funcion buscar series  
    
    function search_series() {
        let input = document.getElementById('buscar').value
        input=input.toLowerCase();
        let x = document.getElementsByClassName('carta-series');
          
        for (i = 0; i < x.length; i++) { 
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display="none";
            }
            else {
                x[i].style.display="block";             
            }
        }
    }

  // Funcion buscar peliculas

    function search_peliculas() {
        let input = document.getElementById('buscar').value
        input=input.toLowerCase();
        let x = document.getElementsByClassName('carta-peliculas');
          
        for (i = 0; i < x.length; i++) { 
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display="none";
            }
            else {
                x[i].style.display="block";             
            }
        }
    }

  // Funcion buscar animes  

    function search_animes() {
        let input = document.getElementById('buscar').value
        input=input.toLowerCase();
        let x = document.getElementsByClassName('carta-animes');
          
        for (i = 0; i < x.length; i++) { 
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display="none";
            }
            else {
                x[i].style.display="block";             
            }
        }
    }
    
  // Funcion seleccionar generos

    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myselect").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.selectbtn')) {

        var dropdowns = document.getElementsByClassName("select-contenido");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
    }