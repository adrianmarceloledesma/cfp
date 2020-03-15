
        
       	$(document).ready(function(){

			/*menu */   
			$(".abrir").click(function(){
				$("nav").fadeIn(500);
				$(".x").slideDown(500);
				
				
			})  
			$(".x").click(function(){
				$("nav").fadeOut(500);
				$(".x").slideUp(500);
				$(".li3a, .li3b, .li3c").hide();
			})


           /*mostrar submmenu en pantalla grande y chica */
			$("#li3").click(function(){
				if ($(window).width() > 500){
			     	$(".extensionPantallaGrande").slideToggle(500);
				}
			    else if ($(window).width() <= 500) {
					$(".li3a, .li3b, .li3c").slideToggle(500);		
				
			   }
			})
            /*desaparecer menu cuando se haga click en ellos o en otro "li" del menu */
			$("#nav2 li:not(.cursos)").click(function(){
				
			   $(".extensionPantallaGrande").hide();
			})
			$(".extensionPantallaGrande li").click(function(){
				if ($(window).width() > 500) {
					$(".extensionPantallaGrande").fadeOut(500);	 
				}	
		
			  	
			})
			
			
			/*menu dinamico */

			$("nav li").on("click", function(){
				$(this).siblings().removeClass("activo");
				$(this).addClass("activo");
			})




			/*condicion si el tamaño de la pantalla es menor o igual a 500px se aplicara la funcion a todos los li
			 menos a de la clase cursos */

            $("nav li:not(.cursos)").click(function(){
				if ($(window).width() <= 500 ) {
					$("nav").fadeOut(500);	 
					$(".x").slideUp(700);
					$(".li3a, .li3b, .li3c").hide();
			
			   }
			  	
			})
			







            /*AJAX */
	        $("#li1").click(function(){
		        var mostrar = new XMLHttpRequest();
		        mostrar.open("GET", "bienvenida.html",true);
		        mostrar.send();
		        mostrar.onreadystatechange=function(){
		          	if(this.readyState==4 && this.status==200){
		           		document.querySelector("#contenedor").innerHTML=this.responseText;
 			     	}
				 }
 		    })         

	        $("#li2").click(function(){
		        var mostrar = new XMLHttpRequest();
		        mostrar.open("GET", "contenedor.html",true);
		        mostrar.send();
		        mostrar.onreadystatechange=function(){
		          	if(this.readyState==4 && this.status==200){
		           		document.querySelector("#contenedor").innerHTML=this.responseText;
 			     	}
				 }
 		    })
             $(".li3a").click(function(){
                 var mostrar2 = new XMLHttpRequest();
                 mostrar2.open("GET", "cursos.html",true);
                 mostrar2.send();
                 mostrar2.onreadystatechange=function(){
                     if(this.readyState==4 && this.status==200){
                         document.querySelector("#contenedor").innerHTML=this.responseText;
                     }
				 }
			 })

			 $(".li3b").click(function(){
				var mostrar2 = new XMLHttpRequest();
				mostrar2.open("GET", "cursosAnexo.html",true);
				mostrar2.send();
				mostrar2.onreadystatechange=function(){
					if(this.readyState==4 && this.status==200){
						document.querySelector("#contenedor").innerHTML=this.responseText;
					}
				}
			})

			$(".li3c").click(function(){
				var mostrar2 = new XMLHttpRequest();
				mostrar2.open("GET", "subsedes.html",true);
				mostrar2.send();
				mostrar2.onreadystatechange=function(){
					if(this.readyState==4 && this.status==200){
						document.querySelector("#contenedor").innerHTML=this.responseText;
					}
				}
			})

			 $("#li4").click(function(){
				var mostrar4 = new XMLHttpRequest();
				mostrar4.open("GET", "donbosco.html",true);
				mostrar4.send();
				mostrar4.onreadystatechange=function(){
					if(this.readyState==4 && this.status==200){
						document.querySelector("#contenedor").innerHTML=this.responseText;
					}
				}
			})

			$("#li5").click(function(){
				var mostrar5 = new XMLHttpRequest();
				mostrar5.open("GET", "ubicacion.html", true);
				mostrar5.send();
				mostrar5.onreadystatechange=function(){
					if(this.readyState==4 && this.status==200){
						document.querySelector("#contenedor").innerHTML=this.responseText;
					}
				}

			})

			$("#li6").click(function(){
				var mostrar6 = new XMLHttpRequest();
				mostrar6.open("GET", "inscripcion.html",true);
				mostrar6.send();
				mostrar6.onreadystatechange=function(){
					if(this.readyState==4 && this.status==200){
						document.querySelector("#contenedor").innerHTML=this.responseText;
					}
				}
			})

			$("#li7").click(function(){
				var mostrar7 = new XMLHttpRequest();
				mostrar7.open("GET", "publicaciones.html",true);
				mostrar7.send();
				mostrar7.onreadystatechange=function(){
					if(this.readyState==4 && this.status==200){
						document.querySelector("#contenedor").innerHTML=this.responseText;
					}
				}
			})
			 

    	})
    
    