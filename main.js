angular.module('goldRush', [])

angular.module('goldRush')
  .controller('topAppCtrl', topAppCtrl )

    function topAppCtrl(){
        var topApp = this
        topApp.coords = []

    topApp.showDigger = function($event){

      topApp.newLoc = {
             x : event.x,
             y : event.y,
       offsetX : event.offsetX -5,
       offsetY : event.offsetY -5,
    }

      topApp.coords.push({'x' : topApp.newLoc.offsetX, 'y' : topApp.newLoc.offsetY})
      console.log(topApp.newLoc)
    }
  }



  // "label": "Click",
  // "value": 100,
  // topApp.x : event.offsetX-50,
  // topApp.y : event.offsetY-50,
