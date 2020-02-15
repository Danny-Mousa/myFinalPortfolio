
$( function(){

	const model = {

		seeMore : `I am an active and very ambitious person, dedicated to my work, I give the work all my time, effort and focus, and above all, I LOVE programming and anything related to deep thinking and solving difficult problems<br><br>
	        Officially, i'm a communications and electronics engineer.
	        But i would like to introduce myself as a Front-End web developer, because coding is my passion in the life.<br><br>
	        My journey with coding started when i participated in the initiative of the Million Arab Coders which was provided by the Dubai Future Foundation, and after the initial stage and among one million arab coders, i was one of the top 1000, who won the scolarship with Udacity in order to master the front-end development field with a strong in depth knowledge about this amazing field, by taking the course of "Front-End Web Developer Nanodegree".<br><br>
	        My journey in coding will not stop here, because in the near future, i'll enter the arena that i love most, which is "Artificial intelligence".<br><br>
	        In short, i'm a student forever.`,

	    allProjects : [
	    	{
	    		name: `My final portfolio`,
	    		img: `cover_bg_1.jpg`,
	    		//url: `https://github.com/Danny-Mousa/myFinalPortfolio.git`,
	    		fadeIn: `fadeInUp`
	    	},

	    	{
	    		name: `Memory Game`,
	    		img: `matching-game.png`,
	    		//url: `https://github.com/Danny-Mousa/Memory-Game`,
	    		fadeIn: `fadeInUp`
	    	},

	    	{
	    		name: `Classic Arcade Game Clone`,
	    		img: `gameBoard.png`,
	    		//url: `https://github.com/Danny-Mousa/arcadeProject`,
	    		fadeIn: `fadeInUp`
	    	},

	    	{
	    		name: `Feed Reader Testing with JASMINE`,
	    		img: `jasmine.jpg`,
	    		//url: `https://github.com/Danny-Mousa/feed-reader-RSS`,
	    		fadeIn: `fadeInRight`
	    	},

	    	{
	    		name: `Restaurant Reviews App`,
	    		img: `restMain.jpg`,
	    		//url: `https://github.com/Danny-Mousa/rest-rev-stg1`,
	    		fadeIn: `fadeInLeft`
	    	},

	    	{
	    		name: `Pixel Art Maker`,
	    		img: `picker.png`,
	    		//url: `https://danny-mousa.github.io/pixel-art-maker/index.html`,
	    		fadeIn: `fadeInRight`
	    	},

	    	{
	    		name: `Random Practicing Project`,
	    		img: `port.png`,
	    		//url: `https://danny-mousa.github.io/my-first-project/`,
	    		fadeIn: `fadeInLeft`
	    	},

	    	{
	    		name: `My first portfolio`,
	    		img: `firstPortfolio.png`,
	    		//url: `https://danny-mousa.github.io/portfolio/`,
	    		fadeIn: `fadeInRight`
	    	}
	    ],

	    testimonials : [

	    	{
	    		uTestimonial: `
				    		- You show a great mindset for a good programmer, all respect <span class="fas fa-grin-wink"></span><br>
				    		- You have done great work with your game and show great understand of JavaScript and DOM.<br>
				            - Your game meets all the specs and above <span class="fas fa-rocket"></span><span class="fas fa-rocket"></span><span class="fas fa-rocket"></span><br>
				            - Can not wait to see your next submissoin.`,

				projectName: `Memory Game`
	    	},

	    	{
	    		uTestimonial: `
	    					- Great to see you are using ES6 classes to implement the game entities.<br>
	             			- Excellent work using prototype methods and following object oriented principles.`,

	            projectName: `Classic Arcade Game` 			

	    	},

	    	{
	    		uTestimonial: `
	    					- You have clearly mastered Jasmine!<br>
				            - Your code is very detailed, each custom matcher is well written and each comment clearly explains your thought process.<br>
				            - A job very well done!<br>
				            - I am sure you will glide through the rest of the projects!<br>
				               Cheers!`,

				projectName: `Feed Reader Testing with JASMINE `                

	    	},

	    	{
	    		uTestimonial: `
	    					- You have clearly thought everything through!<br>
	             			- Although for this test, it was enough to load two feeds(and you could choose from the first three as they are short and would load fast) and test their contents to not be the same.<br>
	                		But, kudos to you for testing them all and <strong>figuring out a workaround</strong> for the slow connection.`,

	            projectName: `Feed Reader Testing with JASMINE `    		

	    	},

	    	{
	    		uTestimonial: `
	    					- Awesome! All the content is responsive and the display is catchy in all screen sizes.<br>
	               			In fact, there is no breakage in the content display. Quite impressive.<br>
	            			- Very impressive job done here. All the images in the site are resized appropriately with the changes in the view layout.<br>
	            			-  Great job with the caching. The application is able to work offline by caching the sites visited. Great implementation of the service worker.`,

	            projectName: `Restaurant Reviews App`			

	    	}
	    ],

	    facts : [

	    	{	
	    		to: 160,
	    		theFact: `<br><em>Hours<br>of study</em>`
	    	},
	    	{	
	    		to: 175,
	    		theFact: `<br><em>Cups<br>of Tea</em>`
	    	},
	    	{	
	    		to: 5,
	    		theFact:`<br><em>Projects</em>`
	    	},
	    	{	
	    		to: 100,
	    		theFact:`<span class="percentage">/100</span><br><em>As a loving ratio<br>for coding</em>`,

	    	},
	    ]
	};



	const octopus = {

		init : function(){
			moreDetailsView.init();
			myWorkView.init();
			testimonialsView.init();
			factsView.init();
		},


		getMoreDetails: function (){
			return model.seeMore;
		},

		getAllProjects: function(){
			return model.allProjects;
		},

		getTestimonials: function () {
			return model.testimonials;
		},

		getFacts : function (){
			return model.facts;
		}
	};



	const moreDetailsView = {

		init : function(){
			this.moreBtn = document.querySelector(".seeMoreBtn");
			this.detailsHolder = document.querySelector(".seeMore");

			this.render();
		},

		render: function (){

			this.moreBtn.addEventListener("click", ()=>{

				if(moreDetailsView.detailsHolder.innerHTML === ""){
					moreDetailsView.detailsHolder.innerHTML=octopus.getMoreDetails();
					moreDetailsView.detailsHolder.classList.add("fadeInUp");
					moreDetailsView.moreBtn.innerHTML="Hide More On Me";
				}else {
					moreDetailsView.detailsHolder.innerHTML="";

					moreDetailsView.detailsHolder.classList.remove("fadeInUp");
					moreDetailsView.moreBtn.innerHTML="More On Me";
				}
				
			});
		}
	};


	const myWorkView = {

		init : function(){

			this.projects = octopus.getAllProjects();
			this.length = this.projects.length;
			
			this.projectsContainer = document.querySelector("section.projects");
			this.fragment= document.createDocumentFragment();
			let i;
			for(i=0; i<this.length; i++){

				let project= document.createElement("div");
				
				project.classList.add("project");
				project.classList.add("col-md-6");
				project.classList.add("animated");
				project.setAttribute("data-animation", this.projects[i].fadeIn);
				
				project.innerHTML=`<h3 class="project-name">${this.projects[i].name}</h3>
								   <img src="img/${this.projects[i].img}" alt="${this.projects[i].name}" class="img-responsive">
								   <a href="${this.projects[i].url}" class="hide" target="_blank"> SHOW DETAILS <span class="fas fa-chevron-circle-right"></span></a>`;		   
			    
				this.fragment.appendChild(project);
			}
			this.projectsContainer.appendChild(this.fragment);

			this.render();
		},

		render: function(){

			this.projectsList= this.projectsContainer.querySelectorAll("div.project");
			this.listLength = this.projectsList.length;
			let i;

			for(i=0; i<this.listLength; i++){

				let a = this.projectsList[i].querySelector("a");

				this.projectsList[i].addEventListener("mouseenter", ()=>{
					
					a.classList.remove("hide");
					a.classList.add("animation");
				});


				this.projectsList[i].addEventListener("mouseleave", ()=>{

					setTimeout( ()=>{
						a.classList.remove("animation");
					    a.classList.add("back");
					},1200);
				});
			}
		}
	};

	const testimonialsView = {

		init : function () {

			this.list = document.querySelector(".slides");
			this.testimonialsArr = octopus.getTestimonials();
			this.length = this.testimonialsArr.length;
			
			this.fragment = document.createDocumentFragment();
			
			let template = document.createElement("li");
			let i;
			for( i=0; i< this.length; i++) {

				template = template.cloneNode(false);
				template.innerHTML= `
								    <div class="testimonial">
					                    <strong>Awesome</strong>
					                    <p>${this.testimonialsArr[i].uTestimonial}</p>
					                    <hr>
					                    <p>${this.testimonialsArr[i].projectName} / code reviewer</p>
					                </div>
								    `;
				

				this.fragment.appendChild(template);		          
			}
			this.list.appendChild(this.fragment);
		}
	};


	const factsView = {

		init : function() {

			this.imgCounters = document.querySelector(".imgCounters");
			this.allFacts = octopus.getFacts();
			this.length = this.allFacts.length;
			this.fragment = document.createDocumentFragment();
			this.div = document.createElement("div");
			this.div.setAttribute("class", "fact");

			let fact;
			let i;
			for (i=0; i< this.length; i++) {

				fact = this.div.cloneNode(false);
				fact.innerHTML = `<span class="counter" data-from="0" data-to="${this.allFacts[i].to}" data-speed="5000" data-refresh-interval="50">0</span>${this.allFacts[i].theFact}`;

				this.fragment.appendChild(fact);
			}

			this.imgCounters.appendChild(this.fragment);

		}
	}

	octopus.init();
});	