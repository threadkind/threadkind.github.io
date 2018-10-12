if(window.innerWidth >= window.innerHeight){
    document.getElementById('social').style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	document.querySelector('#projectIntro').innerText =
	`Click once to learn more about the project.
    Click a second time to open up the project in another tab.
	Click the 'View Repo' link to view the projects code on GitHub.
	`;
}
else {
	document.querySelector('#projectIntro').innerText =
	`Hover on the thumbnail to learn more about the project.
	Click to open up the project in another tab.
	Click the view repo link to view the projects code on GitHub.`}

const projectObj = {
	NeighborhoodMap: {
		id: 'neighborhoodMap',
		name: 'Neighborhood Map',
		image: 'images/projects/neighborhood-map.png',
		description: 'A responsive, progressive web app built from scratch with React with accessibility considerations. This project includes custom map markers, uses the Google Maps API and is the final project in the Nanodegree program. It also pulls through data from Flickr, FourSquare + Unsplash APIs.',
		build: 'Built with React, CSS and Javascript(JSX)',
		url: 'https://portfolio.threadkind.com/GWGND07-Neighborhood-Map/',
		repo: 'https://github.com/threadkind/GWGND07-Neighborhood-Map'
	},
	BookTrackingApp: {
		id: 'bookTrackingApp',
		name: 'Book Tracking App',
		image: 'images/projects/book-tracking-app.png',
		description: 'A responsive book tracking app built with React with routing using React-Router. Created as part of the Grow With Google Udacity Front End Web Developer Nanodegree Scholarship. An initial static page was provided (link to starter code on GitHub README). Books can be changed between shelves and there is a search page to add more books to the shelves. The project uses custom CSS and has a custom menu button.',
		build: 'Built with React, HTML, CSS and Javascript',
		url: 'http://portfolio.threadkind.com/GWGND06-MyReads-Book-Tracking-App/',
		repo: 'https://github.com/threadkind/GWGND06-MyReads-Book-Tracking-App'
	},
	RestaurantReviewApp: {
		id: 'restaurantReviewApp',
		name: 'Restaurant Review App',
		image: 'images/projects/restaurant-reviews.png',
		description: 'A responsive Restaurant Review progressive web app. Created as part of the Grow With Google Udacity Front End Web Developer Nanodegree Scholarship. An initial static page was provided (link to starter code on GitHub README). The app registers a service worker and has a JSON manifest. Custom CSS was included to improve color contrast for imporved accessibility',
		build: 'Built with HTML, CSS and Javascript with Accessibility and Service Worker',
		url: 'https://github.com/threadkind/GWGND05-Restaurant-Review-App',
		repo: 'https://github.com/threadkind/GWGND05-Restaurant-Review-App'
	},
	searchApp: {
		id: 'searchApp',
		name: 'Search App',
		image: 'images/projects/search-app.png',
		description: 'A responsive search app pulling through information from The New York Times API and images from Unsplash API. The initial view shows a random image from Unsplash. When a word is search the background changes to a related image, articles are pulled from the NY Times and other additional images are pulled from Unsplash.',
		build: 'Built with HTML, CSS and Javascript with API calls to Unsplash and NY Times',
		url: 'http://portfolio.threadkind.com/Search-App/',
		repo: 'https://github.com/threadkind/Search-App'
	},
	feedReaderTesting: {
		id: 'feedReaderTesting',
		name: 'Feed Reader Testing',
		image: 'images/projects/feed-reader-testing.png',
		description: 'For this project I was given a web based application that reads RSS feeds. My task was to write tests using Jasmine to verify a variety of specs. Full details can be founds on GitHub README. ',
		build: 'Test suite built with Jasmine',
		url: 'http://portfolio.threadkind.com/GWGND04-Feed-Reader-Testing/',
		repo: 'https://github.com/threadkind/GWGND04-Feed-Reader-Testing'
	},
	arcadeGameClone: {
		id: 'arcadeGameClone',
		name: 'Arcade Game Clone',
		image: 'images/projects/classic-arcade-game-clone.png',
		description: 'A Frogger-style web-based arcade game created as part of the Grow With Google Udacity Front End Web Developer Nanodegree Scholarship. Some inital files were provided, such as images and a game engine. Many additional features were added such as scoring, character choice, lives, local storage etc. Full details can be found on Github README',
		build: 'Built with HTML, CSS + (Object Oriented) Javascript',
		url: 'http://portfolio.threadkind.com/GWGND03-Classic-Arcade-Game-Clone/',
		repo: 'https://github.com/threadkind/GWGND03-Classic-Arcade-Game-Clone'
	},
	memoryGame: {
		id: 'memoryGame',
		name: 'Memory Game',
		image: 'images/projects/memory-game.png',
		description: 'A memory game coded from scratch as a project for the Grow With Google Udacity Front End Web Developer Nanodegree Scholarship. The game allows of a choice of multiple card packs. Best times and scores are saved in local storage for the player. I created all images for the project.',
		build: 'Built with HTML, CSS + Javascript',
		url: 'http://portfolio.threadkind.com/GWGND02-Memory-Game/',
		repo: 'https://github.com/threadkind/GWGND02-Memory-Game'
	},
	portfolioSite: {
		id: 'portfolioSite',
		name: 'Portfolio Site',
		image: 'images/projects/portfolio-site.png',
		description: 'A simple reponsive portfolio site created as the initial project for the Grow With Google Udacity Front End Web Developer Nanodegree Scholarship. The project uses CSS Flexbox and media queries for the responsive views.',
		build: 'Built with HTML, CSS + Javascript',
		url: 'http://portfolio.threadkind.com/GWGND01-Portfolio-Site/',
		repo: 'https://github.com/threadkind/GWGND01-Portfolio-Site'
	},
	pixelArtMaker: {
		id: 'pixelArtMaker',
		name: 'Pixel Art Maker',
		image: 'images/projects/pixel-art-maker.png',
		description: 'A pixel drawing tool coded from scratch. Upon loading the page, the user can choose a custom canvas size to start. The color picker allows the user to choose a color to draw with on the canvas.',
		build: 'Built with HTML, CSS + Javascript',
		url: 'http://portfolio.threadkind.com/udacity-google/Lesson%2021/Project%20-%20Pixel%20Art%20Maker/project-pixel-art-maker-starter-master/index.html',
		repo: 'https://github.com/threadkind/udacity-google/tree/master/Lesson%2021/Project%20-%20Pixel%20Art%20Maker/project-pixel-art-maker-starter-master'
	},
	tvSpinner: {
		id: 'tvSpinner',
		name: 'TV Spinner',
		image: 'images/projects/tv-spinner.png',
		description: 'A spinner to choose what to watch on TV. When the "spin" button is clicked, the wheel (showing different tv viewing options) will rotate to a random point.',
		build: 'Built with HTML, CSS + Javascript',
		url: 'http://portfolio.threadkind.com/tv-game/index.html',
		repo: 'https://github.com/threadkind/tv-game'
	},
	bedtimeGame: {
		id: 'bedtimeGame',
		name: 'Bedtime Game',
		image: 'images/projects/bedtime-game.png',
		description: 'A web-based bedtime routine game for a child. When the page loads it shows all the tasks that need to be completed. The timer can be started, which gives approximate completion times. When a task is completed, the child can click the current card - it will flip to the next card and play a sound. The panel on the side will mark the card as complete. When all cards are complete the page shows confetti and plays a clapping sound. If the timer is getting close to zero a warning sound will play.',
		build: 'Built with HTML, CSS + Javascript',
		url: 'http://portfolio.threadkind.com/schedule/index.html',
		repo: 'https://github.com/threadkind/schedule'
	},
	productSite: {
		id: 'productSite',
		name: 'Product Site',
		image: 'images/projects/product-site.jpg',
		description: 'A simple mock up of a mobile reponsive product site showcasing various courses offered by a company. The hamburger menu can be used to filter courses by category.',
		build: 'Built with HTML, CSS + Javascript',
		url: 'http://portfolio.threadkind.com/30days30sites/04ProductSite/index.html',
		repo: 'https://github.com/threadkind/30days30sites'
	},
	touristAttractionSite: {
		id: 'touristAttractionSite',
		name: 'Tourist Attraction Site',
		image: 'images/projects/tourist-attraction.jpg',
		description: 'A responsive mock up of a tourist information website showing information about Mount Rushmore. When a section is hovered over, it expands and provides more information about that category. The other categories widths decrease to provide more space for the chosen section. CSS Flexbox aids with the functionality of the site.',
		build: 'Built with HTML, CSS + Javascript',
		url: 'http://portfolio.threadkind.com/30days30sites/03TouristAttraction/index.html',
		repo: 'https://github.com/threadkind/30days30sites'
	},
	restaurantMenu: {
		id: 'bedtimeGame',
		name: 'Restaurant Menu',
		image: 'images/projects/menu.jpg',
		description: 'A mock-up of a responsive restaurant menu website. When a food category is clicked, that section expands to show the mock menu items available. It can be clicked again to collapse the section.',
		build: 'Built with HTML, CSS + Javascript',
		url: 'http://portfolio.threadkind.com/30days30sites/05RestaurantMenu/index.html',
		repo: 'https://github.com/threadkind/30days30sites'
	},
	codevember: {
		id: 'codevember',
		name: 'Codevember 2017',
		image: 'images/projects/codevember.png',
		description: 'CodeVember is a challenge for developers to make a creative sketch a day in November. I coded a number of sketches as coding projects, the index can be found linked here. The sketches are available to view on Github and Codepen.',
		build: 'Built with HTML (HTML5 Canvas), CSS + Javascript',
		url: 'http://portfolio.threadkind.com/codevember2017/index.html',
		repo: 'https://github.com/threadkind/codevember2017'
	}
}


for (let i = 0; i < Object.values(projectObj).length; i++){
	const name = Object.values(projectObj)[i].name;
	const image = Object.values(projectObj)[i].image;
	const description = Object.values(projectObj)[i].description;
	const build = Object.values(projectObj)[i].build;
	const url = Object.values(projectObj)[i].url;
	const repo = Object.values(projectObj)[i].repo;

	document.querySelector('#projects').innerHTML +=
		`<div class="project">
            <img src="${image}">
            <a href="${url}" target="_blank">
              <div class="projectInfo hide">
                <h2>${name}</h2>
                <div class="info-spacer"></div>
                <p>${description}</p>
                <div class="info-spacer"></div>
                <p>${build}</p>
              </div>
            <div class="overlay"></div>
            <div class="repo">
                	<a href="${repo}" target="_blank">View
                		<span class="repoImg"></span>
                Code</a></div>
          </div>

`

};

document.querySelector('#projects').addEventListener('mouseover', function(e){
	if(e.target.className === 'overlay'){
		e.target.previousElementSibling.classList.remove('hide');
	}
});

document.querySelector('#projects').addEventListener('mouseout', function(e){
	if(e.target.className === 'overlay'){
		e.target.previousElementSibling.classList.add('hide');

	}
});

window.addEventListener('scroll', function(e){
	if(window.scrollY >= (window.innerHeight - 100)){
		document.querySelector('.backToTop').style.display = 'inline-block';
	}
	else {
		document.querySelector('.backToTop').style.display = 'none';

	}
})

