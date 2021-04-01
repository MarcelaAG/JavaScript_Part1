function myFunction(){
    var ageNumber = document.getElementById ("age").value ;
    if ( ageNumber > 18 && ageNumber < 100) {
        alert ('vous êtes majeur');
    }
    else if ( ageNumber >0 && ageNumber <=18) {
        alert('vous êtes mineur');
    }
    else  {
        alert('veuillez rentrer un âge valide');
    }
}