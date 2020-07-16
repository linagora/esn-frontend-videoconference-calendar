(function(angular) {
  'use strict';

  angular.module('linagora.esn.videoconference.calendar')
    .component('calendarVideoconferenceBluebar', {
      template: require("./calendar-videoconference-bluebar.pug"),
      controller: 'calendarVideoconferenceBluebarController',
      bindings: {
        videoconferenceLink: '='
      }
    });

})(angular);
