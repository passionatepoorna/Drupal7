// $Id: system.cron.js,v 1.1 2009/12/15 08:45:32 dries Exp $
(function ($) {

/**
 * Checks to see if the cron should be automatically run.
 */
Drupal.behaviors.cronCheck = {
  attach: function(context, settings) {
    if (settings.cronCheck || false) {
      $('body').once('cron-check', function() {
        // Only execute the cron check if its the right time.
        if (Math.round(new Date().getTime() / 1000.0) > settings.cronCheck) {
          $.get(settings.basePath + 'system/run-cron-check');
        }
      });
    }
  }
};

})(jQuery);
