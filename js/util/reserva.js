var selected = -1;
var salas = ["1", "32", "12","14","412"];
$("document").ready(function(e){

  LoadSalas(salas);
    $(".sala").click(function(e){
      selected = e.target.id;
      LoadMenu("html/util/sala.html");
    });
});
//Recebe a "sala"
function LoadSalas(salas){
  var numeroDeSala = salas.length;
  for (var i = 0; i < numeroDeSala; i++) {
    //$("#listaSalas").append(salas[i]);
    $("#listaSalas").append('<Button type="button" class="sala btn btn-success btn-lg" id="'+salas[i]+'"> Sala '+salas[i]+'</Button>');
  }
}