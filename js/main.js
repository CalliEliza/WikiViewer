/**
 * Created by chewy on 12/25/16.
 */
$(document).ready(function() {
    //when search is clicked run
    $('#searchSubmit').click(function(){
        //gets input
        var searchTerm = $("#search").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";

        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function(data) {
                $('#output').html('');
                for (var i =0;i<data[1].length;++i) {
                    $('#output').prepend("<li id='data'><a href= "+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
                }
            },
            error: function(errorMsg) {
                alert("Error");
            }
        });
    });
});