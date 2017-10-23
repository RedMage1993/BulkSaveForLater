$(document).ready(function() {
  function injectLink() {
    if ($("form#activeCartViewForm input[name=submit\\.save-all-for-later]").size) {
      return;
    }

    var linkHTML =
      "<div class=\"sc-action-links a-text-left a-float-left\">" +
      "  <p class=\"a-spacing-none a-spacing-top-mini\">" +
      "    <span class=\"a-size-medium\">" +
      "      <input type=\"submit\" name=\"submit.save-all-for-later\" value=\"Save all for later\">" +
      "    </span>" +
      "  </p>" +
      "</div>";

    $("form#activeCartViewForm .sc-subtotal").after(linkHTML);
  }

  injectLink();
});