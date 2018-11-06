$(document).ready(function() {
	//----menu-mobile--------
	$("#menu-butao").click(function(){
		$("#menu-mobile").slideToggle(900);
	});

	$("#sub-menu-link").click(function(){
		$("#sub-menu-mobile").slideToggle(900);
	});


	//----slide-itens------------------------------
	$.getJSON('json/slide.json', function(jsonSlide) {
		$( '#s1' ).attr({
	 		src:  "images/slide/" + jsonSlide[0].imagens[0],
		});
		$( '#s2' ).attr({
	 		src:  "images/slide/" + jsonSlide[0].imagens[1],
		});
		$( '#s3' ).attr({
	 		src:  "images/slide/" + jsonSlide[0].imagens[2],
		});
		$( '#s4' ).attr({
	 		src:  "images/slide/" + jsonSlide[0].imagens[3],
		});
		$( '#s5' ).attr({
	 		src:  "images/slide/" + jsonSlide[0].imagens[4],
		});

	});

	//----slide-configarações------------------------------
	$(function(){
		$('.slider').cycle({
			pagerAnchorBuilder: function(index, DOMelement){
				return '<a></a>';
			},
			activePagerClass: 'pager-ativado',
			timeout: 2500,
			fx: 'fade',
			pager: $('.pager'),
			prev:   '#prev', 
	    	next:   '#next'
		});
	});


	//Box - Editoriais --------
	$.getJSON("json/noticias.json", function(jsonNoticiais) {
		contador = jsonNoticiais["0"].Editorias.length;
	 	var imprime="";
	    for (i = 0; i < contador; i++) {
	       contador2 = jsonNoticiais[0].Editorias[i].Noticias.length;
	    for (x = 0; x < contador2; x++) {
			editoria	= jsonNoticiais[0].Editorias[i].Editoria;
			foto		= jsonNoticiais[0].Editorias[i].Noticias[x].Foto;
			titulo		= jsonNoticiais[0].Editorias[i].Noticias[x].Titulo;
			texto		= jsonNoticiais[0].Editorias[i].Noticias[x].Texto;
			data		= jsonNoticiais[0].Editorias[i].Noticias[x].DataDePublicacao;

		imprime += "<div class='" + editoria + "  todos'><div class='box-editoriais'><div class='container-box'><div class='box-data'><p>" + data + "</p></div><div class='box-editoria'><h4>" + editoria + "</h4></div><img class='box-img' src='images/noticia/" + foto + "'/><div class='box-titulo'><h3>" + titulo + "</h3></div><div class='box-texto'><p>" + texto + "</p></div><a href='#'><h5>Saiba Mais</h5></a></div></div></div>";
	    }
	       $('#container-geral-box').html(imprime);
	    }
	});


	//SHOW/HIDE-Selectbox-filtro--------
	$('#select-editoriais').on('change', function() {
		var value = $(this).val();
		if (value == 'todos') {
			$('.todos').hide({
			    fade: true,
		    	duration: 800
		    });
			$('.todos').show({
			    fade: true,
		    	duration: 800
		    });
		}

		//filtro-ESPORTE-------
		if (value == 'esporte') {
			$('.todos').hide({
			    fade: true,
		    	duration: 800
		    });
			$('.Esporte').show({
		    	fade: true,
		    	duration: 1000
		    });
		}
		//filtro-PAIS-------
		if (value == 'pais') {
			$('.todos').hide({
			    fade: true,
		    	duration: 800
		    });
			$('.País').show({
		    	fade: true,
		    	duration: 1000
		    });
		}
		//filtro-RIO-------
		if (value == 'rio') {
			$('.Rio').hide({
			    fade: true,
		    	duration: 800
		    });
			$('.Eporte').show({
		    	fade: true,
		    	duration: 1000
		    });
		}
		//filtro-CULTURA-------
		if (value == 'cultura') {
			$('.todos').hide({
			    fade: true,
		    	duration: 800
		    });
			$('.Cultura').show({
		    	fade: true,
		    	duration: 1000
		    });
		}
		//filtro-INTERNACIONAL-------
		if (value == 'internacional') {
			$('.todos').hide({
			    fade: true,
		    	duration: 800
		    });
			$('.Internacional').show({
		    	fade: true,
		    	duration: 1000
		    });
		}
	});


	//Gráfico(google-charts)--------
	google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Visitations", { role: "style" } ],
        ["Governo", 	75, "#b22d30"],
        ["Carnaval", 	50, "#000"],
        ["Esportes", 	45, "#000"],
        ["Férias", 		30, "#000"],
        ["Outros", 		25, "#000"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,{
      	calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation" 
      },2]);

      var options = {
        width: 700,
        height: 500,
        bar: {groupWidth: "55%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
  }
});






