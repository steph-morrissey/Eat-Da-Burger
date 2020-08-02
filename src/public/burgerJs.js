$(".devour").on("click", function () {
  const id = $(this).data("id");

  const ajaxOptions = { type: "PUT" };

  $.ajax(`/api/burger/${id}`, ajaxOptions);
});
