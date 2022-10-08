//ulasin
$("#Gönder").click(function() {
    if($("#isim").val() == "") {
                  $("#isim").attr("placeholder", "İsim boş bırakılamaz") ;
              }
          
              if($("#email").val() == "") {
                  $("#email").attr("placeholder", "Email boş bırakılamaz") ;
              }
  
              if ($("#konu").val() == ""){
                  $("#konu").attr("placeholder", "Konu boş bırakılamaz");
              }
  
              if ($("#mesaj").val() == ""){
                  $("#mesaj").attr("placeholder", "Mesaj boş bırakılamaz")
              }
  
       })



//magazalar//

       function myFunction() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "block";
            } else {
                li[i].style.display = "none";
            }
        }
    }


