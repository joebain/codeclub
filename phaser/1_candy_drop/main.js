var game = new Phaser.Game(400, 400, Phaser.CANVAS, '', {preload: preload, create: create, update: update});

function preload () {
    game.load.spritesheet('bean', 'images/red_bean.png', 82, 82);
    game.load.image('background', 'images/desert_background.png');
}

function create() {
    game.add.image(0,0,'background');
    game.countdown = 0;
    game.score = 0;
    game.beanInterval = 1000;
    game.beanSpeed = 1;
    game.scoreBoard = game.add.text(10, 10, game.score, {font: '40px Arial', fill: 'white'});
}
    
function update() {
    if (!game.gameover) {
        if (game.countdown <= 0) {
            var bean = new Bean(Math.random() * (game.width - 100), 0);
            game.add.existing(bean);
            game.countdown = game.beanInterval;
            
            if (game.beanInterval > 300) {
                game.beanInterval -= 10;
                game.beanSpeed += 0.2;
            }
        }
        game.countdown = game.countdown - game.time.elapsed;
        game.scoreBoard.text = game.score;
    }
}

var Bean = function(x, y) {
    Phaser.Sprite.call(this, game, x, y, 'bean');
    this.inputEnabled = true;

    this.animations.add('explode', [1,2,3,4,5], 12);

    this.events.onInputDown.add(function() {
        this.animations.play('explode', 12, false, true);
        game.score++;
    }, this);
    
    this.update = function() {
        if (!game.gameover) {
            this.y = this.y + 1;
        }
        if (this.y > game.height) {
            game.add.text(80, 180, "Game Over", {font: '40px Arial', fill: 'white'});
            game.gameover = true;
        }
    };
    
    this.events.onKilled.add(function() {
        setTimeout(this.destroy.bind(this), 0);
    }, this);
};
Bean.prototype = Object.create(Phaser.Sprite.prototype);
Bean.prototype.constructor = Bean;
