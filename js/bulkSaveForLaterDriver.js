$(document).ready(function() {
  function injectScript() {
    var script = document.createElement('script');

    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', chrome.extension.getURL('js/bulkSaveForLater.js'));

    $('body').append(script);
  }

  function injectLink() {
    if ($('form#activeCartViewForm input[name=submit\\.save-all-for-later]').size) {
      return;
    }

    var linkHTML =
      '<div class="sc-action-links a-text-left a-float-left">' +
      '  <p class="a-spacing-none a-spacing-top-mini">' +
      '    <span class="a-size-medium">' +
      '      <input type="submit" name="submit.save-all-for-later" value="Save all for later">' +
      '    </span>' +
      '  </p>' +
      '</div>';

    $('form#activeCartViewForm .sc-subtotal').after(linkHTML);
  }

  injectScript();
  injectLink();
});