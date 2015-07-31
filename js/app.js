var score = 0;

function catpicClicked() {
	score++;
	var scoreText = 'Score: ' + score;
	document.getElementById('score').innerHTML = scoreText;
}

var Cat = function(name, image) {
	this.name = name;
	this.image = image;
	this.addDivs = function() {
		this.newRow = document.createElement('div');
		this.newRow.className = 'row';
		this.newCol = document.createElement('div');
		this.newCol.className = 'col-sm-12';
		this.newName = document.createElement('h2');
		this.newName.innerHTML = this.name;
		this.newCol.appendChild(this.newName);
		this.newImg = document.createElement('img');
		this.newImg.src = this.image;
		this.newImg.alt = 'click me I\'m a cat image';
		this.newImg.className = 'catimg img-responsive center-block';
		this.newCol.appendChild(this.newImg);
		this.newRow.appendChild(this.newCol);
		document.getElementById('container').appendChild(this.newRow);
	};
};

Cat.prototype.clickListener = function() {
	addEventListener('click', catpicClicked, false);
};

var cat1 = new Cat('Fido', 'img/cat1.jpg');
var cat2 = new Cat('Henry', 'img/cat2.jpg');
cat1.addDivs();
cat2.addDivs();
cat1.clickListener();
cat2.clickListener();
