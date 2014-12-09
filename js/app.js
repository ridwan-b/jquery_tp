$(document).ready(function() {

	var panier=0;
	var pizza_price=0;
	var pate_price=0;
	var extra_1=false;
	var extra_2=false;
	var extra_3=false;
	var extra_4=false;

	//affiche les ingrédients d'une pizza au survol de son nom
    $(".radio").hover(function() {
        $(this).children(".description").fadeIn();
    }, function() {
        $(this).children(".description").fadeOut();
    });

    //affiche les champs de saisies d'adresse lors de l'appuie sur le bouton suivant
	$( ".next-step" ).click(function() {
		$(this).hide();
	  	$(".infos-client").show();;
	});

	//affiche le nombre de parts et/ou pizzas désirées suivant le nombre saisi
	$(".nb-parts").keyup(function(){
		var number = $(this).find("input").val();
		while(number>6){
			number-=6;
			//$("<span></span>").attr('class', 'pizza-6').appendTo($(this));
		};

		for(var i=1;i<7;i++)
		{
			if(i!=number)
			{
				if($(this).find("span").hasClass("pizza-"+i))
					$(this).find("span").toggleClass("pizza-"+i);
			}
		}

		$(this).find("span").toggleClass("pizza-"+number);
	});

	//ajoute un champ d'adresse
	$(".add").click(function(){
	    var newInput = $("<input name='new_field' type='text'>");
	  	$('.add').before(newInput);
	});


	//affiche le message de remerciement en fin de commande
	$( ".done" ).click(function() {
	  	$(".main").hide();
	  	$(".stick-right").hide();

		var ThanksDiv = $("<p>Merci pour votre commande :)</p>" ).attr('class', 'thanks');
		ThanksDiv.appendTo('body');
	});


	//actualise le panier suivant la pizza et la pâte choisies
	$(".radio").on("click",function(){
		
		//Pour le choix de la pizza
		if($(this).parent().hasClass('pizza-type'))
		{
			//on enlève le prix de l'ancienne pizza check
			if(pizza_price!=0)
				panier = panier - pizza_price;
			//On actualise le prix de pizza check
			pizza_price = $(this).find('input').data('price');
			//On ajoute le prix au panier
			panier = panier + pizza_price;
			//On l'affiche
			$(".tile").find("p").text(panier+ " €");
		}

		//Pour le choix de la pâte
		else if($(this).find("input").attr("name")=="pate")
		{
			//on enlève le prix de l'ancienne pizza check
			if(pate_price!=0)
				panier = panier - pate_price;
			//On actualise le prix de pizza check
			pate_price = $(this).find('input').data('price');
			//On ajoute le prix au panier
			panier = panier + pate_price;
			//On l'affiche
			$(".tile").find("p").text(panier+ " €");
		}

	});

	//actualise le panier suivant les ingrédients choisis
	$(".checkbox").on("click",function(){
		if($(this).find("input").attr("value")==1)
		{
			if(!extra_1)
			{
				extra_1 = true;
				panier = panier + $(this).find('input').data('price');
			}else{
				extra_1 = false;
				panier = panier - $(this).find('input').data('price');
			}
		}else if($(this).find("input").attr("value")==2)
		{
			if(!extra_2)
			{
				extra_2 = true;
				panier = panier + $(this).find('input').data('price');
			}else{
				extra_2 = false;
				panier = panier - $(this).find('input').data('price');
			}
		}else if($(this).find("input").attr("value")==3)
		{
			if(!extra_3)
			{
				extra_3 = true;
				panier = panier + $(this).find('input').data('price');
			}else{
				extra_3 = false;
				panier = panier - $(this).find('input').data('price');
			}
		}else if($(this).find("input").attr("value")==4)
		{
			if(!extra_4)
			{
				extra_4 = true;
				panier = panier + $(this).find('input').data('price');
			}else{
				extra_4 = false;
				panier = panier - $(this).find('input').data('price');
			}
		}
		$(".tile").find("p").text(panier+ " €");
	});

});

