$(() => {
  const noSuccess = () => {
    $("#question").val("error");
  };

  $("#8ball").submit((e) => {
    $.get("/8ball", {})
      .done((ans) => {
        $("#question").val(ans);
      })
      .fail(noSuccess);
    e.preventDefault();
  });
});
