angular.module('goldRush', [])

angular.module('goldRush')
  .controller('topAppCtrl', topAppCtrl )

    function topAppCtrl(){
        var topApp = this
        topApp.coords = []
        topApp.clickSpot = [0,0]

    topApp.showDigger = function($event){

      topApp.newLoc = {
             x : event.pageX / document.body.clientWidth * 100,
             y : event.pageY / document.body.clientHeight * 100
      //  offsetX : event.offsetX -5,
      //  offsetY : event.offsetY -5,
    }

      topApp.coords.push(topApp.clickSpot)
      console.log(topApp.newLoc)
    }
    topApp.removeDigger = function(index){
        topApp.coords.splice(index, 1)
    }
  }

// {'x' : topApp.newLoc.offsetX, 'y' : topApp.newLoc.offsetY}
