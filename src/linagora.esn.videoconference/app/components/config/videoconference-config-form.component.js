(function(angular) {
  'use strict';

  angular.module('linagora.esn.videoconference')

  .component('videoconferenceConfigForm', {
    template: require("./videoconference-config-form.pug"),
    bindings: {
      configurations: '='
    }
  });

})(angular);
