// first we need to "create" the game. Phaser is a "library" we use
// to make games
var game = new Phaser.Game(400, 400, Phaser.CANVAS, '',
            {preload: preload, create: create, update: update});

// this is where images are loaded, you don't need to change this
function preload () {
    game.load.spritesheet('bean', 'images/red_bean.png', 82, 82);
    game.load.image('background', 'images/desert_background.png');
}


// this is where we set everything up before the game starts
function create() {
    game.add.image(0,0,'background');
    
    
}


// this function runs all the time, it runs forever
function update() {
    
    
}

// this game has lots of beans in it!
var Bean = function(x, y) {
    Phaser.Sprite.call(this, game, x, y, 'bean');
    
    // this is where write code for our beans
    
    
    
    
    
    
    // make sure you don't delete or change the code
    // after this line!!! the game won't work :(
    this.events.onKilled.add(function() {
        setTimeout(this.destroy.bind(this), 0);
    }, this);
};
Bean.prototype = Object.create(Phaser.Sprite.prototype);
Bean.prototype.constructor = Bean;
