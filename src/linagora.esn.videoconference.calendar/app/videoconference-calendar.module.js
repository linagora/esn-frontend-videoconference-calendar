'use strict';

angular.module('linagora.esn.videoconference.calendar', ['linagora.esn.videoconference', 'ngclipboard', 'esn.notification']);

require('../../linagora.esn.videoconference/app/services/video-conf-configuration.service');
require('esn-frontend-common-libs/src/frontend/components/ngclipboard/dist/ngclipboard.js');
require('esn-frontend-common-libs/src/frontend/js/modules/notification.js');

require('./components/calendar-videoconference-bluebar/calendar-videoconference-bluebar.component.js');
require('./components/calendar-videoconference-bluebar/calendar-videoconference-bluebar.controller.js');
require('./components/calendar-videoconference-form/calendar-videoconference.component.js');
require('./components/calendar-videoconference-form/calendar-videoconference.constants.js');
require('./components/calendar-videoconference-form/calendar-videoconference.controller.js');
require('./videoconference-calendar.config.js');
