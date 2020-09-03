'use strict';

angular.module('linagora.esn.videoconference')
  .config(registerI18N);

function registerI18N($translateProvider) {
  $translateProvider.translations('en', require('../i18n/en.json'));
  $translateProvider.translations('fr', require('../i18n/fr.json'));
  $translateProvider.translations('vi', require('../i18n/vi.json'));
  $translateProvider.translations('ru', require('../i18n/ru.json'));
  $translateProvider.translations('zh', require('../i18n/zh.json'));
}
