var game = new Phaser.Game(400, 400, Phaser.CANVAS, '', {preload: preload, create: create, update: update});

function preload () {
//    var image_web_site = "https://s3-eu-west-1.amazonaws.com/joebain/candy/";
    var image_web_site = "images/";
//    this.load.image('blue-bean', image_web_site + 'bean_blue.png');
    this.load.spritesheet('blue-bean', image_web_site + 'bean_blue_with_explosion.png', 82, 82);
//    this.load.image('red-bean',  image_web_site + 'bean_red.png');
    this.load.spritesheet('red-bean', image_web_site + 'bean_red_with_explosion.png', 82, 82);
}

function create() {
    layoutBeans();
}
    
function update() {
}

function layoutBeans() {
    game.beans = [];
    for (var i = 0 ; i < 9 ; i++) {
        game.beans[i] = [];
        for (var j = 0 ; j < 9 ; j++) {
            var bean = new Bean(i*40, j*40, 'red');
            game.beans[i][j] = bean;
            game.add.existing(bean);
        }
    }
}


var Bean = function(x, y, colour) {
    Phaser.Sprite.call(this, game, x, y, colour + '-bean');
    this.inputEnabled = true;
    this.input.pixelPerfectClick = true;

    this.animations.add('explode', [1,2,3,4,5], 12);

    this.events.onInputDown.add(function() {
        this.animations.play('explode', 12, false, true);
    }, this);
};
Bean.prototype = Object.create(Phaser.Sprite.prototype);
Bean.prototype.constructor = Bean;
