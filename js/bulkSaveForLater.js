var amazonUIPage = window.AmazonUIPageJS || window.P;

var bulkSaveForLaterIntervalID = 0;
function bulkSaveForLater($, cartBaseView) {
  var $saveForLaterLinks = $("input[name^=submit\\.save-for-later]");

  if ($saveForLaterLinks.length == 0) {
    console.log("BulkSaveForLater: Done.");
    clearInterval(bulkSaveForLaterIntervalID);
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
    console.log("BulkSaveForLater: Starting process.");
    bulkSaveForLaterIntervalID = setInterval(bulkSaveForLater, 1000, $, cartBaseView);
  });
});