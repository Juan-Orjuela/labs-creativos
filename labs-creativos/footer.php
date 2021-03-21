   <!-- Interactividad -->
   <script>
      new fullpage("#fullpage", {
        onLeave: function (origin, destination, direction) {
          //Evitar el desplazamiento si la sección de destino tiene la clase oculta
          if (destination.item.classList.contains("oculta")) {
            return false;
          }
        },
        licenseKey: "7C9458F7-B3114621-B2352216-CF06F3D8",
      });
    </script>
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/interactividad.js"></script>
    <?php wp_footer();?> 
  </body>
</html>