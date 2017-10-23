var amazonUIPage = window.AmazonUIPageJS || window.P;

amazonUIPage.when("jQuery", "CartBaseView", "ready").execute(function($, cartBaseView) {
  $('form#activeCartViewForm input[name=submit\\.save-all-for-later]').click(function(ev) {
    ev.preventDefault();

    $("input[name^=submit\\.save-for-later]").each(function(index, saveForLaterLink) {
      var $saveForLaterLink = $(saveForLaterLink);

      console.log($saveForLaterLink.attr('name'));
    });
  });
});