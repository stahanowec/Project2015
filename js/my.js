
  $(function () {
    var btn = $('.nav_btn, .search_btn');
    btn.click(function(){
        btn.siblings().not(this).removeClass('active');
        $(this).toggleClass('active');
    });
  });




function setEqualHeight(columns)
{
var tallestcolumn = 0;
columns.each(
function()
{
currentHeight = $(this).height();
if(currentHeight > tallestcolumn)
{
tallestcolumn = currentHeight;
}
}
);
columns.height(tallestcolumn);
}
$(document).ready(function() {
setEqualHeight($(".b7"));
});
  
  