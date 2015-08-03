$(function(){
	// Model
	var catsModel = {
		'currentCat' : null,
		'cat' : [
			{
				'name' : 'Fido',
				'url' : 'img/cat1.jpg',
				'score' : 1,
			},
			{
				'name' : 'Frank',
				'url' : 'img/cat2.jpg',
				'score' : 123,
			},
			{
				'name' : 'Steven',
				'url' : 'img/cat3.jpg',
				'score' : 4,
			},
			{
				'name' : 'Eloise',
				'url' : 'img/cat4.jpg',
				'score' : 5,
			},
			{
				'name' : 'Ugly',
				'url' : 'img/cat5.jpg',
				'score' : 12,
			},
			{
				'name' : 'Hortensia',
				'url' : 'img/cat6.jpg',
				'score' : 7,
			},
			{
				'name' : 'Kitty',
				'url' : 'img/cat7.jpg',
				'score' : 8,
			},
		],
	};

	// Octopus
	var octopus = {
		init: function() {
			catsModel.currentCat = catsModel.cat[0];
			view.init_list();
			view.init_catinfo();
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
			view.render_catinfo();
		}

	};

	// View
	var view = {
		init_list: function() {
			var catArray = octopus.getCats();
			for (var i = 0, len = catArray.length; i < len; i++) {
				var itemStr = '<li id="cat'+ i +'">' + catArray[i].name + '</li>';
				$('#catlist').append(itemStr);
			}
		},
		init_catinfo: function() {
			$('#catImage').click(function(){
				octopus.increment_score();
			});
			this.render_catinfo();
		},
		render_catinfo: function() {
			var catObject = octopus.getCurrentCat();
			$('#catName').text(catObject.name);
			$('#catImage').attr('src', catObject.url);
			$('#catScore').text('Number of clicks: ' + catObject.score);
		}
	};

	octopus.init();
//	octopus.list_clicked();
});