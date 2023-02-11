/*
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<script src="src/jquery.table2excel.js"></script>

*/
$("button").click(function(){
2
  $("#table2excel").table2excel({
3
    // exclude CSS class
4
    exclude:".noExl",
5
    name:"Worksheet Name",
6
    filename:"SomeFile",//do not include extension
7
    fileext:".xls" // file extension
8
  });
9
});
