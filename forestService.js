function myFunction1(txt){
 if(txt === "miso"){
     document.getElementById("miso-sec-over").style.display="block";
     document.getElementById("sandi-sec-over").style.display="none";
 }
 }


function myFunction2(txt){
    if(txt === "sandi"){
        document.getElementById("sandi-sec-over").style.display="block";
        document.getElementById("miso-sec-over").style.display="none";
    }
    }



 function myFunction3(txt){
        // alert(txt);
        if(txt==="send"){
            document.getElementById("myForm").style.display="block";
        }
    }
 


const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form has been submitted !");
});

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "" || x == null) {
      alert("Name must be filled out");
      return false;
    }
  }



    
    // $('#staticBackdrop').on('show.bs.modal', function(e) {
    //     var id = $(this).find('.modal-title').text(e.relatedTarget.id);
    //     if(id) console.log(id);
    //     if(id){
    //         alert(id);
    //     }

    //   });

          
    // $('#staticBackdrop1').on('show.bs.modal', function(e) {
    //     var id = $(this).find('.modal-title').text(e.relatedTarget.id);
    //     if(id) console.log(id);
    //     if(id){
    //         alert(id);
    //     }

    //   });