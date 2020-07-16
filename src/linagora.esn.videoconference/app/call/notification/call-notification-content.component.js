(function(angular) {
  'use strict';

  angular.module('linagora.esn.videoconference')
    .component('videoconferenceNotification', {
      bindings: {
        call: '=',
        onAccept: '&',
        onDeny: '&'
      },
      controllerAs: 'ctrl',
      controller: 'VideoConfNotificationController',
      template: require("./call-notification-content.pug")
    });

})(angular);
