$(function () {
  const model = {
    seeMore: `5+ years of experience building scalable web applications using React.js, TypeScript, Next.js, and Redux , with a focus on delivering high-performance, user-centric solutions for international clients. Recognized for:<br /><br /><br />

<b>- Performance Optimization:</b> Reduced load times by 99.2% and memory usage by 30% through code splitting, dynamic imports, and AbortController implementation (e.g., Mercato web app).<br /><br />

<b>- Technical Leadership:</b> Spearheaded a custom survey generator and real-time SignalR chat service, boosting client satisfaction by 30% , and led teams to deliver 99% functionality-compliant platforms (e.g., Russail & IBS).<br /><br />

<b>- Code Quality & Innovation:</b> Refactored legacy systems to modern best practices, eliminating redundant packages by manually rebuilding their functionality, and enabling garbage collection to clear 20% more unused data , while resolving 15+ critical bugs.<br /><br />

<b>- Awards & Recognition:</b><br /><br />

 <b>+</b> Top 1,000 Coder (out of 1M+ participants) via Udacity’s Dubai Future Foundation scholarship.<br />
 <b>+</b> Consistently praised as a go-to problem solver , resolving 100% of escalated bugs and technical challenges.<br /><br />

<b>- Continuous Learner:</b> Stay ahead of industry trends by mastering updates in JavaScript, React, and Next.js ecosystems. Passionate about leveraging cutting-edge tools to drive efficiency and innovation.`,

    allProjects: [
      {
        name: `Emirates Policy Center`,
        ready: true,
        year: `2021`,
        img: `epc.jpg`,
        url: `https://epc.ae/en/home`,
        fadeIn: `fadeInLeft`,
      },
      {
        name: `RAK Exhibition Center`,
        ready: true,
        year: `2021`,
        img: `rakex.jpg`,
        url: `https://www.rakexpo.ae/en/home`,
        fadeIn: `fadeInRight`,
      },
      {
        name: `RAK Chamber`,
        ready: true,
        year: `2021`,
        img: `rak.jpg`,
        url: `https://www.rakchamber.ae/en/home`,
        fadeIn: `fadeInLeft`,
      },
      {
        name: `Russail Water`,
        ready: true,
        year: `2022`,
        img: `netflix.jpg`,
        url: `https://russailwater.ae/`,
        fadeIn: `fadeInRight`,
      },
      {
        name: `Stiftung IBS`,
        ready: true,
        year: `2022`,
        img: `to-do.jpg`,
        url: `https://www.ibs-laubusch.de/`,
        fadeIn: `fadeInLeft`,
      },
      {
        name: `Saas & B2B web apps`,
        ready: true,
        year: `2022 to 2025`,
        img: `dashboard.jpg`,
        url: ``,
        fadeIn: `fadeInRight`,
        btnTitle: "Private web apps",
        disableBtn: true,
      },
      {
        name: `Memory Game`,
        ready: true,
        year: `2019`,
        img: `matching-game.jpg`,
        url: `https://github.com/Danny-Mousa/Memory-Game`,
        fadeIn: `fadeInLeft`,
      },
      {
        name: `Classic Arcade Game Clone`,
        ready: true,
        year: `2019`,
        img: `gameBoard.jpg`,
        url: `https://github.com/Danny-Mousa/arcadeProject`,
        fadeIn: `fadeInRight`,
      },
    ],

    testimonials: [
      {
        uTestimonial: `
				    		- You show a great mindset for a good programmer, all respect <span class="smile">😉</span><br>
				    		- You have done great work with your game and show great understand of JavaScript and DOM.<br>
				            - Your game meets all the specs and above <span class="rocket">🚀🚀🚀</span><br>
				            - Can not wait to see your next submissoin.`,

        projectName: `Memory Game`,
      },

      {
        uTestimonial: `
	    					- Great to see you are using ES6 classes to implement the game entities.<br>
	             			- Excellent work using prototype methods and following object oriented principles.`,

        projectName: `Classic Arcade Game`,
      },

      {
        uTestimonial: `
	    					- You have clearly mastered Jasmine!<br>
				            - Your code is very detailed, each custom matcher is well written and each comment clearly explains your thought process.<br>
				            - A job very well done!<br>
				            - I am sure you will glide through the rest of the projects!<br>
				               Cheers!`,

        projectName: `Feed Reader Testing with JASMINE `,
      },

      {
        uTestimonial: `
	    					- You have clearly thought everything through!<br>
	             			- Although for this test, it was enough to load two feeds(and you could choose from the first three as they are short and would load fast) and test their contents to not be the same.<br>
	                		But, kudos to you for testing them all and <strong>figuring out a workaround</strong> for the slow connection.`,

        projectName: `Feed Reader Testing with JASMINE `,
      },

      {
        uTestimonial: `
	    					- Awesome! All the content is responsive and the display is catchy in all screen sizes.<br>
	               			In fact, there is no breakage in the content display. Quite impressive.<br>
	            			- Very impressive job done here. All the images in the site are resized appropriately with the changes in the view layout.<br>
	            			-  Great job with the caching. The application is able to work offline by caching the sites visited. Great implementation of the service worker.`,

        projectName: `Restaurant Reviews App`,
      },
    ],

    facts: [
      {
        to: 160,
        theFact: `<br><em>Hours<br>of study</em>`,
      },
      {
        to: 175,
        theFact: `<br><em>Cups<br>of Tea</em>`,
      },
      {
        to: 5,
        theFact: `<br><em>Projects</em>`,
      },
      {
        to: 100,
        theFact: `<span class="percentage">/100</span><br><em>As a loving ratio<br>for coding</em>`,
      },
    ],
  };

  const octopus = {
    init: function () {
      moreDetailsView.init();
      myWorkView.init();
      testimonialsView.init();
      factsView.init();
      copyRightYearView.init();
    },

    getMoreDetails: function () {
      return model.seeMore;
    },

    getAllProjects: function () {
      return model.allProjects;
    },

    getTestimonials: function () {
      return model.testimonials;
    },

    getFacts: function () {
      return model.facts;
    },
  };

  const moreDetailsView = {
    init: function () {
      this.moreBtn = document.querySelector(".seeMoreBtn");
      this.detailsHolder = document.querySelector(".seeMore");

      this.render();
    },

    render: function () {
      this.moreBtn.addEventListener("click", () => {
        if (moreDetailsView.detailsHolder.innerHTML === "") {
          moreDetailsView.detailsHolder.innerHTML = octopus.getMoreDetails();
          moreDetailsView.detailsHolder.classList.add("fadeInUp");
          moreDetailsView.moreBtn.innerHTML = "Hide More On Me";
        } else {
          moreDetailsView.detailsHolder.innerHTML = "";

          moreDetailsView.detailsHolder.classList.remove("fadeInUp");
          moreDetailsView.moreBtn.innerHTML = "More On Me";
        }
      });
    },
  };

  const myWorkView = {
    init: function () {
      this.projects = octopus.getAllProjects();
      this.length = this.projects.length;

      this.projectsContainer = document.querySelector("section.projects");
      this.fragment = document.createDocumentFragment();
      let i;
      for (i = 0; i < this.length; i++) {
        let project = document.createElement("div");

        project.classList.add(
          "project",
          "col-md-6",
          "animated",
          `${this.projects[i].ready ? "ready" : "not-ready"}`
        );
        project.setAttribute("data-animation", this.projects[i].fadeIn);

        project.innerHTML = `<h3 class="project-name">${
          this.projects[i].name
        } <span class="project-year">${this.projects[i].year}</span> </h3>
                   <img src="img/${this.projects[i].img}" alt="${
          this.projects[i].name
        }" class="img-responsive">
                   ${
                     this.projects[i].ready && !this.projects[i].disableBtn
                       ? `<a
                         href=${this.projects[i].url}
                         class="hide"
                         target="_blank"
                       >
                         ${this.projects[i].btnTitle ?? "Show Details"}
                         <span class="fas fa-chevron-circle-right"></span>
                       </a>`
                       : `<a class="hide soon disabled">${
                           this.projects[i].btnTitle ?? "will be online soon"
                         }</a>`
                   }`;

        this.fragment.appendChild(project);
      }

      this.projectsContainer.appendChild(this.fragment);

      this.render();
    },

    render: function () {
      this.projectsList =
        this.projectsContainer.querySelectorAll("div.project");
      this.listLength = this.projectsList.length;
      let i;

      for (i = 0; i < this.listLength; i++) {
        let a = this.projectsList[i].querySelector("a");

        this.projectsList[i].addEventListener("mouseenter", () => {
          a.classList.remove("hide");
          a.classList.add("animation");
        });

        this.projectsList[i].addEventListener("mouseleave", () => {
          setTimeout(() => {
            a.classList.remove("animation");
            a.classList.add("back");
          }, 1200);
        });
      }
    },
  };

  const testimonialsView = {
    init: function () {
      this.list = document.querySelector(".slides");
      this.testimonialsArr = octopus.getTestimonials();
      this.length = this.testimonialsArr.length;

      this.fragment = document.createDocumentFragment();

      let template = document.createElement("li");
      let i;
      for (i = 0; i < this.length; i++) {
        template = template.cloneNode(false);
        template.innerHTML = `
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
    },
  };

  const factsView = {
    init: function () {
      this.imgCounters = document.querySelector(".imgCounters");
      this.allFacts = octopus.getFacts();
      this.length = this.allFacts.length;
      this.fragment = document.createDocumentFragment();
      this.div = document.createElement("div");
      this.div.setAttribute("class", "fact");

      let fact;
      let i;
      for (i = 0; i < this.length; i++) {
        fact = this.div.cloneNode(false);
        fact.innerHTML = `<span class="counter" data-from="0" data-to="${this.allFacts[i].to}" data-speed="5000" data-refresh-interval="50">0</span>${this.allFacts[i].theFact}`;

        this.fragment.appendChild(fact);
      }

      this.imgCounters.appendChild(this.fragment);
    },
  };

  const copyRightYearView = {
    init: function () {
      this.copyElement = document.querySelector(".copyright");

      this.render();
    },

    render: function () {
      const fullDate = new Date();
      const year = fullDate.getFullYear();

      this.copyElement.innerHTML = `&copy; ${year} designed by me`;
    },
  };

  octopus.init();
});
