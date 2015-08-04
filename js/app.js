// Model
var catsModel = {
	'currentCat' : null,
	'adminShow' : false,
	'cat' : [
		{
			'name' : 'Fido',
			'url' : 'img/cat1.jpg',
			'score' : 0,
		},
		{
			'name' : 'Frank',
			'url' : 'img/cat2.jpg',
			'score' : 0,
		},
		{
			'name' : 'Grumpy Cat',
			'url' : 'img/cat3.jpg',
			'score' : 0,
		},
		{
			'name' : 'Eloise',
			'url' : 'img/cat4.jpg',
			'score' : 0,
		},
		{
			'name' : 'Hortensia',
			'url' : 'img/cat5.jpg',
			'score' : 0,
		},
		{
			'name' : 'Breadface',
			'url' : 'img/cat6.jpg',
			'score' : 0,
		},
		{
			'name' : 'Kitty',
			'url' : 'img/cat7.jpg',
			'score' : 0,
		},
	],
};

// Octopus
var octopus = {
	init: function() {
		catsModel.currentCat = catsModel.cat[0];
		catView.init();
		catListView.init();
		adminView.init();
	},
	getCurrentCat: function() {
		return catsModel.currentCat;
	},
	getCats: function() {
		return catsModel.cat;
	},
	setCurrentCat: function(cat) {
		catsModel.currentCat = cat;
	},
	increment_score: function() {
		catsModel.currentCat.score++;
		catView.render();
	},
	toggle_admin: function() {
		catsModel.adminShow = !catsModel.adminShow;
		if (catsModel.adminShow) {
			adminView.show();
			adminView.render();
		}
		else {
			adminView.hide();
		}
	},
	updateName: function(newName){
		catsModel.currentCat.name = newName;
	},
	updateScore: function(newScore){
		catsModel.currentCat.score = newScore;
	},
	updateUrl: function(newUrl){
		catsModel.currentCat.url = newUrl;
	},
	updateViews: function(){
		adminView.render();
		catListView.render();
		catView.render();
	}
};

// Cat Detail View
var catView = {
	init: function() {
		//Store pointers to the DOM elements for easy access later
		this.catName = document.getElementById('catName');
		this.catImage = document.getElementById('catImage');
		this.catScore = document.getElementById('catScore');
		catImage.addEventListener('click', function(){
			octopus.increment_score();
			adminView.render();
		});
		this.render();
	},
	render: function() {
		var catObject = octopus.getCurrentCat();
		this.catName.innerHTML = catObject.name;
		this.catImage.src = catObject.url;
		this.catScore.innerHTML = ('Number of clicks: ' + catObject.score);
	}
};

// Cat List View
var catListView = {
	init: function() {
		var elem, i;
		var catArray = octopus.getCats();
		for (i = 0; i < catArray.length; i++) {
			cat = catArray[i]; // The current cat we're looping over
			elem = document.createElement('li');

			// on click, setCurrentCat and render the catView
			// this uses a closure-in-a-loop trick to connect the value
			// of the cat variable to the click event function
			elem.addEventListener('click', (function(catCopy) {
			return function() {
				octopus.setCurrentCat(catCopy);
				catView.render();
				adminView.render();
				};
			})(cat));
		document.getElementById('catlist').appendChild(elem);
		}
		this.render();
	},
	render: function() {
		var list = document.getElementsByTagName('li');
		var catArray = octopus.getCats();
		for (var i = 0; i < list.length; i++) {
			list[i].innerHTML = catArray[i].name;
			}

	}
};

// Admin View
var adminView = {
	init: function(){
		this.adminButton = document.getElementById('adminButton');
		this.form = document.getElementById('adminForm');
		this.inputName = document.getElementById('inputName');
		this.inputURL = document.getElementById('inputURL');
		this.numClicks = document.getElementById('numClicks');
		this.hide();
		this.saveButton = document.getElementById('saveButton');
		this.cancelButton = document.getElementById('cancelButton');
		this.adminButton.addEventListener('click', function(){
			octopus.toggle_admin();
		});
		this.cancelButton.addEventListener('click', function() {
			octopus.toggle_admin();
		});
		this.saveButton.addEventListener('click', function() {
			var newName, newURL, newClicks;
			newName = adminView.inputName.value;
			newURL = adminView.inputURL.value;
			newClicks = adminView.numClicks.value;
			if (newName !== null && newName !== "") {
				octopus.updateName(newName);
			}
			if (newURL !== null && newURL !== "") {
				octopus.updateUrl(newURL);
			}
			if (newClicks !== null && newClicks !== "") {
				octopus.updateScore(newClicks);
			}
			octopus.updateViews();
		});
	},
	show: function(){
		this.form.style.visibility = "visible";
	},
	hide: function(){
		this.form.style.visibility = "hidden";
	},
	render: function(){
		var currentCat = octopus.getCurrentCat();
		document.getElementById("adminForm").reset();
		this.inputName.placeholder = currentCat.name;
		this.inputURL.placeholder = currentCat.url;
		this.numClicks.placeholder = currentCat.score;
	},
};


octopus.init();