/**
 * @module Starter
 * @name starter
 * @description A sample Ionic app using NUI.
 *
 */


angular.module('starter', ['ionic', 'nui.ionic', 'nui.ionic.box2d'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

// Demos
.controller('Box2DController', function($scope, nuiWorld, $timeout) {
    // Clean up. This proto version of nui-box2d needs a hack to reset the world:
    nuiWorld.reset();

    $scope.blocks = [];

    // just feeding in parameters for a regular div:
    for(var i=1; i < 10; i++){
        $scope.blocks.push({"shape": "box", "x": i * 10 + '%', "y": '20%', "width": "45px", "height": "45px"})
    }
    for(var i=1; i < 7; i++){
        $scope.blocks.push({"shape": "circle", "x": i * 15 + '%', "y": '10%', "width": "30px", "height": "30px"})
    }


  // DEMO - how to destroy an object properly:
  // The directive saves a reference to the physics engine world body under the DOM element (look for 'body'). 
  // FYI - likewise, it saves the ref the other way if you need it (check the source code) under body - fixture - userData.
  $scope.destroyMe = function(e, id){
    // Destroy the physics engine body. Fetch the click target from the mouse event target.
    var theDOMElement = e.target;
    var thePhysicsWorldBody = theDOMElement.body;
    nuiWorld.world.DestroyBody( thePhysicsWorldBody );
    // Destroy the corresponding DOM element. In Angular world, we'll remove the Array item that creates the DOM element via ng-repeat in this demo. Angular will take care of removing the DOM element because of data-binding.
    $scope.blocks.splice(id,1);
  }


    $scope.makeStyle = function(block){
        var br = (block.shape == "circle") ? block.width : 0;
        return({
            "width": block.width,
            "height": block.height,
            "border-radius": br
        });
    }

})
.controller('ListController', function($scope, nuiWorld) {
    // Clean up. This proto version of nui-box2d needs a hack to reset the world:
    nuiWorld.reset();
    $scope.blocks = [];
    for(var i=0; i < 5; i++){
        $scope.blocks.push({"x": i})
    }

});