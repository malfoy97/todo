$(function(){
  $('.datepicker').datetimepicker({
    format : "YYYY/MM/DD",
    icons: {
      previous: "fa fa-arrow-left",
      next: "fa fa-arrow-right"
    }
  });
  $('.datetimepicker').datetimepicker({
    format : "YYYY/MM/DD HH:mm",
    icons: {
      time: "fa fa-clock-o",
      date: "fa fa-calendar",
      up: "fa fa-arrow-up",
      down: "fa fa-arrow-down",
      previous: "fa fa-arrow-left",
      next: "fa fa-arrow-right"
    }
  });
});
$(".datetimepicker").datetimepicker({
    format: "YYYY/MM/DD HH:mm",
    showClear: true,
    showClose: true,
    locale: 'ja'
   });
