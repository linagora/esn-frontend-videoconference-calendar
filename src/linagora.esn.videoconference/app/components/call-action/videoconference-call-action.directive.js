(function(angular) {
  'use strict';

  angular.module('linagora.esn.videoconference')
    .directive('videoconferenceCallAction', videoconferenceCallAction);

    function videoconferenceCallAction() {
      return {
        replace: true,
        restrict: 'E',
        template: require("./videoconference-call-action.pug"),
        controller: 'videoconferenceCallActionController',
        controllerAs: '$ctrl'
      };
    }
})(angular);
