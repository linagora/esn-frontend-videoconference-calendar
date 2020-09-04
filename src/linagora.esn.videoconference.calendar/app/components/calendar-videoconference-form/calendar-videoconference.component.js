'use strict';

angular.module('linagora.esn.videoconference.calendar')
  .component('calendarVideoconferenceForm', {
    template: require('./calendar-videoconference.pug'),
    controller: 'calendarVideoconferenceFormController',
    bindings: {
      event: '=',
      canModifyEvent: '='
    }
  });

