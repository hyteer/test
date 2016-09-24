angular
  .module('app', [])
  .component('chat', {
    controller: function($interval) {
      this.messages = [
        { content: 'Message 1' },
        { content: 'Message 2' }
      ];
      
      var i = 3;
      $interval(angular.bind(this, function() {
        this.messages.push({ content: 'Message ' + i++ });
      }), 500);
      
      this.onScrollTop = function() {
        console.log('reached top');
      }
    },
    template: '<message message="message" ng-repeat="message in $ctrl.messages"></message>'
  })
  .component('message', {
    bindings: {
      message: '<'
    },
    template: '{{ $ctrl.message | json }}'
  })
  .directive('scrollGlue', function($window, $timeout) {
    return {
      require: 'chat',
      link: function(scope, $el, attrs, controller) {
        var el = $el[0], glued = true;
        
        function scrollIfGlued() {
          if( glued && !(el.scrollTop + el.clientHeight + 1 >= el.scrollHeight))
            el.scrollTop = el.scrollHeight;
        }
        
        function onScroll() {
          if(el.scrollTop === 0)
            controller.onScrollTop();
            
          glued = (el.scrollTop + el.clientHeight + 1 >= el.scrollHeight);
        }
        
        scope.$watch(scrollIfGlued);
        
        $timeout(scrollIfGlued, 0, false);
        
        $el.bind('scroll', onScroll);
      }
    }
  });