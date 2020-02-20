$(document).ready(function() {
  if ($("body").width() >= 1200) {
    const checkOpened = () =>
      $(".js-closed_container").hasClass("js-open_container");
    const toggleOpen = () => {
      $(".js-closed_container").toggleClass("js-open_container");
      $(".js-portfolio").toggleClass("js-portfolio_origin");
    };

    $(".js-card").on("click", toggleOpen);

    $(".js-cardLink").on("click", e => {
      const isOpened = checkOpened();

      if (!isOpened) {
        e.preventDefault();
      }
    });
  }
});
