$(function(){
	// Model
	var catsModel = {
		'currentCat' : null,
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
				'name' : 'Steven',
				'url' : 'img/cat3.jpg',
				'score' : 0,
			},
			{
				'name' : 'Eloise',
				'url' : 'img/cat4.jpg',
				'score' : 0,
			},
			{
				'name' : 'Ugly',
				'url' : 'img/cat5.jpg',
				'score' : 0,
			},
			{
				'name' : 'Hortensia',
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
		}

	};

	// Cat Detail View
	var catView = {
		init: function() {
			$('#catImage').click(function(){
				octopus.increment_score();
			});
			this.render();
		},
		render: function() {
			var catObject = octopus.getCurrentCat();
			$('#catName').text(catObject.name);
			$('#catImage').attr('src', catObject.url);
			$('#catScore').text('Number of clicks: ' + catObject.score);
		}
	};

	// Cat List View
	var catListView = {
		init: function() {
			this.render();
		},
		render: function() {
			var cat, elem, i;
			var catArray = octopus.getCats();
			for (i = 0; i < catArray.length; i++) {
				cat = catArray[i]; // The current cat we're looping over
				elem = document.createElement('li');
				elem.textContent = cat.name;

				// on click, setCurrentCat and render the catView
				// this uses a closure-in-a-loop trick to connect the value
				// of the cat variable to the click event function
				elem.addEventListener('click', (function(catCopy) {
					return function() {
						octopus.setCurrentCat(catCopy);
						catView.render();
					};
				})(cat));

				// add the element to the list
				$('#catlist').append(elem);
			}
		}
	};

	octopus.init();
});