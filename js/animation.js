
const animation = {

	statrtingPoint: function (){
		$($(".animatedText").get().reverse()).each(function(index){

			let element = $(this);
			let effect = element.data("animation")
			setTimeout( function(){
				if(effect === "fallB"){
					element.addClass("fallB");

				}else if (effect==="fallC"){
					element.addClass("fallC");

				}else {
					element.addClass("fall");
				}
				
			}, index*700);
		});
	},

	countToFunc: function () {

		$(".runCount").countTo();
	},

	waypointFuncs: function () {

		$(".brief").waypoint( function( direction ) {

			if( direction === "down") {

				$("nav.navbar-default").addClass("dark");

			}else if (direction === "up"){

				if( $("nav.navbar-default").hasClass("dark")){
					$("nav.navbar-default").removeClass("dark");
				}

			}
		}, {offset: "15%"});



		let removeLine = function() {
			
			$(".navbar-default .navbar-nav>li>a").each ( function(){

				if($(this).hasClass("activeNav")){
					$(this).removeClass("activeNav");
				}

			});
		}

		$("a[href='#']").addClass("activeNav");

		$(".currentSection").waypoint( function( direction ) {

			if(direction === "down") {

				removeLine();
				$("#nav-list").find(`a[href=${$(this.element).data("nav")}]`).addClass("activeNav");

			}
		}, { offset: "47%" });


		$(".currentSection").waypoint( function( direction ) {

			if(direction === "up") {

				removeLine();
				$("#nav-list").find(`a[href=${$(this.element).data("nav")}]`).addClass("activeNav");

			}
		}, { offset: function (){ return -$(this.element).height() + ($(this.element).height()/2) ; } });



		$(".counter").waypoint( function(direction){

			if(direction === "down") {
				
				$(this.element).addClass("runCount");
				animation.countToFunc();
			}

		}, {offset: "85%"});



		$(".animated").waypoint( function( direction ) {

			if( direction === "down") {

				$(this.element).addClass("choosenItem");
				setTimeout(function(){

					$("body .animated.choosenItem").each(function(index){

						let item = $(this);
						setTimeout( function () {
							var effect = item.data("animation");
							if ( effect === "fadeInLeft") {
								item.addClass("fadeInLeft");
							}else if ( effect === "fadeInDown") {
								item.addClass("fadeInDown");
							}else if ( effect === "fadeInRight") {
								item.addClass("fadeInRight");
							}else if ( effect === "fadeInRightLong") {
								item.addClass("fadeInRightLong");
							}else if ( effect === "fadeInLeftLong") {
								item.addClass("fadeInLeftLong");
							}else if( effect==="fadeInUpLong") {
								item.addClass("fadeInUpLong");
							}else {
								item.addClass("fadeInUp");
							}

							item.removeClass("choosenItem");
						},  index * 300 );
					});
					
				}, 100);
			}

		} , { offset: '85%' } );

	

		$("#about").waypoint( function( direction ) {

			if( direction === "down") {

				if($(".scrollUp").hasClass("scrollUpHidden")){
					$(".scrollUp").removeClass("scrollUpHidden");
				}
				$(".scrollUp").addClass("scrollUpVisible");
				
			}else if (direction === "up"){

				$(".scrollUp").removeClass("scrollUpVisible");
				$(".scrollUp").addClass("scrollUpHidden");
				
			}
		}, {offset: "70%"});

	},

	flexsliderfunc: function (){

		$('.flexslider').flexslider({
			animation: "slide",
			slideshowSpeed: 5000,
			animationSpeed: 2000,
			pauseOnHover:true,
			mousewheel: true
		});

	},


};

animation.statrtingPoint();
animation.flexsliderfunc();
animation.waypointFuncs();


