// Alternatively, don't inject this JS to utilize Amazon's JS, and instead just click on the 'Save for later' elements.
// I kind of just wanted to see if this would work, and it did.

var amazonUIPage = window.AmazonUIPageJS || window.P;

var bulkSaveForLaterIntervalID = 0;
function bulkSaveForLater($, cartBaseView) {
  var $saveForLaterLinks = $("input[name^=submit\\.save-for-later]");

  if ($saveForLaterLinks.length == 0) {
    console.log("BulkSaveForLater: Done.");
    clearInterval(bulkSaveForLaterIntervalID);
    bulkSaveForLaterIntervalID = 0;
    return;
  }

  $saveForLaterLinks.each(function(index, saveForLaterLink) {
    var $saveForLaterLink = $(saveForLaterLink);
    var itemID = $saveForLaterLink.attr('name').split('.')[2];

    cartBaseView.saveItemForLater(itemID, 'ox_sc_mtsfl_1');
  });
}

amazonUIPage.when("jQuery", "CartBaseView", "ready").execute(function($, cartBaseView) {
  $('form#activeCartViewForm input[name=submit\\.save-all-for-later]').click(function(ev) {
    ev.preventDefault();

    // Alternatively, disable Save all for later button OR go nuts and create an interval for each item (???)
    if (bulkSaveForLaterIntervalID != 0) {
      return;
    }

    console.log("BulkSaveForLater: Starting process.");
    bulkSaveForLaterIntervalID = setInterval(bulkSaveForLater, 1000, $, cartBaseView);
  });
});