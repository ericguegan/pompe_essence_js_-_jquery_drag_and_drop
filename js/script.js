// vérifier le choix du carburant
function check() {
        var Choix = document.getElementsByTagName('input');
        ChoixLength = Choix.length;
        for (var i = 0; i < ChoixLength; i++) {
                      if (Choix[i].type === 'checkbox' && Choix[i].checked) {
                      var ChoixCarburant = Choix[i].value;
                      alert('Vous avez choisi du :' + Choix[i].value);
          }
}
// demander le code bancaire
        var Code = prompt('Entrez votre code de carte bancaire :');
        if (Code == 1234) {
          alert ('Merci !')
        }
        else {
          alert ('mauvais code !')
          window.location.replace("./page2.html");
              }

    }
// fin de la partie par carte bancaire
// paiement en liquide
// drag and drop
function reload(){
  location.reload();
}
function retour(){
  window.location.replace("./index.html");
}

$(function(){
    var piece = 0;
    $(".coin") .draggable();
    $(".coin_reste") .draggable();
    $(".dropn") .droppable({


      drop:function(event, ui){
        piece++;

        if (piece==1){
          $(".calcul").html("Vous avez mis 2€!");
        }
        if (piece==2){
          $(".calcul").html("Vous avez mis 4€!");
        }
        if (piece==3){
          $(".calcul").html("Vous avez mis 6€!");
        }
        if (piece==4){
          $(".calcul").html("Vous avez mis 8€!");
          $('#section2').css('background-color', '#34adf6');
        }

        if(piece==5){
          $(".modif_h2").html("Nous vous remercions de votre passage");
          $('.modif_h2').css('color', 'yellow');
          $('#section2').css('background-color', '#82f128');
          $(".calcul").html("vous avez mis 10€");
          $(".calcul2").html("Nous vous rendons 10Cts €");
          $(".comment").html("Vous avez réglé votre facture");
          $(".fin").html("Merci !");
          $(".coin_reste").append('<img src="./img/10_cent.png"/>')
          $(".suite").append('<img src="./img/pm.png"/>')
          $(".dropn").hide();
          $(".coin").hide();
          $("#section1").append('<center><img src="./img/pompe.jpg" class="end"/></center>');


}
      }

    });
});
// fin de la partie paiement en liquide
// mouvement de coin_reste et fin de la partie
$(function(){
    var rpiece = 0;

    $(".coin_reste") .draggable();
    $(".suite") .droppable({

  drop:function(event, ui){
    rpiece++;
    if(rpiece==1){
      $(".coin_reste").hide();
      $("#section1").hide();
      $("#section2").hide();
      $(".modif_h2").html("A bientôt !");
    }
  }
});
});
