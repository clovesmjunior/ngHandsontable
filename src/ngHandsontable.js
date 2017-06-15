angular.module('ngHandsontable.services', []);
angular.module('ngHandsontable.directives', []);
angular.module('ngHandsontable', [
    'ngHandsontable.services',
    'ngHandsontable.directives'
  ]);

Handsontable.hooks.add('afterContextMenuShow', function() {
  if(!Handsontable.eventManager)
  {
    Handsontable.eventManager = {};
  }
  Handsontable.eventManager.isHotTableEnv = false;
});
