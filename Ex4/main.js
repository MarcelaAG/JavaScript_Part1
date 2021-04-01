//Reference to the element
var namebutton = document.getElementById ('namebutton');
namebutton.addEventListener('click', personInfo);
function personInfo() { 
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var city = document.getElementById("city").value;
       if (isNaN(lname && fname && city)) {
 // use the properties of the (already gotten) element as needed:
 alert("Nom : " + lname + "\n" + "Prénom : " + fname + "\n" + "Ville : " + city);
       } else {
         alert("Veuillez rentrer une saisie valide !");
       }

 
                                    }
