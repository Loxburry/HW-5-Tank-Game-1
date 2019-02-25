const Phaser = require('phaser');

class Enemy {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = 20;
      this.isActive = false;
  
      this.activeTime = 0;
    }
  
    activate(x, y) {
      this.x = x;
      this.y = y;
      
      this.isActive = true;
      this.activeTime = 2000;
    }
  
    deactivate() {
      this.isActive = false;
    }
  
    update(deltaTime) {
    //   if (this.isActive) {
    //     // Calculate forward vector
    //     const forwardX = -Math.sin(this.forward);
    //     const forwardY = Math.cos(this.forward);
    //     this.x += this.moveSpeed * forwardX * deltaTime / 1000;
    //     this.y += this.moveSpeed * forwardY * deltaTime / 1000;
  
    //     // Deactivate bullet when it's been alive for too long 
    //     this.activeTime -= deltaTime;
    //     if (this.activeTime < 0) {
    //       this.deactivate();
    //     }
    //   }
    }
  
    draw(graphics) {
      if (this.isActive) {
        graphics.save();
        graphics.translate(this.x, this.y);
        graphics.fillCircle(0, 0, this.radius);
        graphics.restore();
      }
    }
  }
  
  module.exports = Enemy;
  