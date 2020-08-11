(function(angular) {
  'use strict';

  var MODULE_NAME = 'linagora.esn.videoconference';

  angular.module(MODULE_NAME, ['esn.configuration']);
})(angular);

require('esn-frontend-common-libs/src/frontend/js/modules/config/config.module.js');

require('./services/video-conf-configuration.service.js');
require('./videoconference.config.js');
