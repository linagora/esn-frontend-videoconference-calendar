(function(angular) {
  'use strict';

  angular.module('linagora.esn.videoconference')
    .component('videoconferenceCallButton', {
      template: require("./videoconference-call-button.pug"),
      controller: 'videoconferenceCallButtonController',
      bindings: {
        userId: '@',
        objectType: '@',
        isCurrentUser: '<'
      }
    });
})(angular);
