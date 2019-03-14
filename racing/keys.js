function KeyboardInputManager() {
    this.events = {};
  
    if (window.navigator.msPointerEnabled) {
      //Internet Explorer 10 style
      this.eventTouchstart    = "MSPointerDown";
      this.eventTouchmove     = "MSPointerMove";
      this.eventTouchend      = "MSPointerUp";
    } else {
      this.eventTouchstart    = "touchstart";
      this.eventTouchmove     = "touchmove";
      this.eventTouchend      = "touchend";
    }
  
    this.listen();
  }
  
  KeyboardInputManager.prototype.on = function (event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  };
  
  KeyboardInputManager.prototype.emit = function (event, data) {
    var callbacks = this.events[event];
    if (callbacks) {
      callbacks.forEach(function (callback) {
        callback(data);
      });
    }
  };
  
  KeyboardInputManager.prototype.listen = function () {
    var self = this;
  
    var map = {
      38: 0, // Up
      39: 1, // Right
      40: 2, // Down
      37: 3, // Left
      75: 0, // Vim up
      76: 1, // Vim right
      74: 2, // Vim down
      72: 3, // Vim left
      87: 0, // W
      68: 1, // D
      83: 2, // S
      65: 3  // A
    };
  
    // Respond to swipe events
    var touchStartClientX, touchStartClientY;
    // var gameContainer = document.getElementsByClassName("game-container")[0];
    var gameContainer = document;
  
    gameContainer.addEventListener(this.eventTouchstart, function (event) {
      if ((!window.navigator.msPointerEnabled && event.touches.length > 1) ||
          event.targetTouches > 1) {
        return; // Ignore if touching with more than 1 finger
      }
  
      if (window.navigator.msPointerEnabled) {
        touchStartClientX = event.pageX;
        touchStartClientY = event.pageY;
      } else {
        touchStartClientX = event.touches[0].clientX;
        touchStartClientY = event.touches[0].clientY;
      }
  
      event.preventDefault();
    });
  
    gameContainer.addEventListener(this.eventTouchmove, function (event) {
      event.preventDefault();
    });


    // Custom Keydown Event Handler by smamran
    gameContainer.addEventListener(this.events, function(event){
      event.preventDefault();
    })

  
    gameContainer.addEventListener(this.eventTouchend, function (event) {
      if ((!window.navigator.msPointerEnabled && event.touches.length > 0) ||
          event.targetTouches > 0) {
        return; // Ignore if still touching with one or more fingers
      }
  
      var touchEndClientX, touchEndClientY;
  
      if (window.navigator.msPointerEnabled) {
        touchEndClientX = event.pageX;
        touchEndClientY = event.pageY;
      } else {
        touchEndClientX = event.changedTouches[0].clientX;
        touchEndClientY = event.changedTouches[0].clientY;
      }
  
      var dx = touchEndClientX - touchStartClientX;
      var absDx = Math.abs(dx);
  
      var dy = touchEndClientY - touchStartClientY;
      var absDy = Math.abs(dy);

      // Distance Difference
      var distDiff = Math.max(absDx, absDy)
      console.log(distDiff)
  
      if (Math.max(absDx, absDy) > 10) {
        // (right : left) : (down : up)
        self.emit("move", absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0));
        
        for(let i = 0; i <= distDiff; i += 3){
          setTimeout(() => {
            self.emit("move", absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0));
          }, i);
        }

      }
    });
  };