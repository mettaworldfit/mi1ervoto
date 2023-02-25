

$(document).ready(function () {

    $('.search').select2();

    var pageURL = $(location).attr("pathname");

    if(pageURL.includes("/peoples/add")) {
  
       res = confirm("Ingresa a nuestro grupo de WhatsApp para mantenerte informado de las estrategias políticas y de todos los acontecimientos en el partido a nivel nacional.");

       if(res == true) {
            $(location).attr('href', 'https://chat.whatsapp.com/LnDkgXSb0nZ5aOyMHZWjqs')
 
       } else {

       }

       

    }


})


