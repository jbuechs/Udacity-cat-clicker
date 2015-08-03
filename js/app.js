$(function(){
	// Model
	var catsModel = {
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
			view.init_list(catsModel.cat);
			view.init_catinfo(catsModel.cat[1]);
		}

	};

	// View
	var view = {
		init_list: function(catArray) {
			for (var i = 0, len = catArray.length; i < len; i++) {
				var itemStr = '<li>' + catArray[i].name + '</li>';
				$('#catlist').append(itemStr);
			}
		},
		init_catinfo: function(catObject) {
			$('#catName').text(catObject.name);
		}
	};

	octopus.init();
});


/*

	for (var i = 0; i < catsModel.cat.length; i++) {
		elem.addEventListener('click', function() {
			alert(catsModel.cat[i].name);
		});
	}



var Cat = function(name, image) {
	this.name = name;
	this.image = image;
	this.score = 0;
	this.scoreId = this.name +"score";
	this.imgId = this.name + "img";
};


Cat.prototype.catpicClicked = function() {
	this.score++;
	console.log(this.score);
	var scoreText = 'Score: ' + this.score;
	$(this.scoreId).text(scoreText);
};


var cat1 = new Cat('Fido', 'img/cat1.jpg');
var cat2 = new Cat('Henry', 'img/cat2.jpg');
var catArray = [cat1, cat2];

catArray.forEach(function(cat, index) {
	cat.addDivs();
});

$('#' + cat1.imgId).click(cat1.catpicClicked);
*/