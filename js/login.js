const ENTER_KEY = 13;

// Carrega o conteúdo da página respetiva para o container
function loadMenuPrincipal(tipo)
{
	// Desativa o evento para o pressionar do ENTER
	$("body").unbind("keydown");

	// Vai para a respetiva página principal
	goToHome(tipo);

	// Ação do botão 'home'
	// (volta para a respetiva página principal)
	$("#home").click(function(e)
	{
		goToHome(tipo);			
	});
}

function checkLoginCreds()
{
	// São buscadas as credenciais inseridas nos campos
	var user = $("#user").val();
	var pass = $("#pass").val();

	var success = false;

	credenciais.forEach(function(c)
	{
		if(c["user"] == user && c["pass"] == pass)
		{
			success = true; 
			loadMenuPrincipal(c["tipo"]);
			setTimeout(function()
			{
				alertCancelations(c["tipo"]);
			},500);
		}
	});

	if(!success)
	{
		alert("Credenciais erradas. Tente novamente.");
	}
}

function alertCancelations(tipo)
{
	switch(alertas[tipo])
	{
		case PROF:
			alert("Uma ou mais reservas foram canceladas devido a uma reserva sobreposta por um docente.");
			alertas[tipo] = NONE;
			break;
		case TECNICO:
			alert("Uma ou mais reservas foram canceladas devido à indisponibilidade de uma sala.");
			alertas[tipo] = NONE;
			break;
		case NONE:
		default:
			break;
		alert("Uma ou mais reservas foram canceladas ");
	}
}

$("document").ready(function(e)
{
	$("body").on("keydown",function(e) 
	{
    if(e.which == ENTER_KEY)
    {
    	checkLoginCreds();
    } 
  });

	// Ação do botão 'iniciar sessão'
	$("#iniciar").click(function(e)
	{
		checkLoginCreds();
	});
});