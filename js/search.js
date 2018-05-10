$(function () {

    $('#search').click(function(){
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        PlaceSearch.Search(keyword, type, radius).then(function(data){
            for(var i=0;i<data.length;i++){
                var row = 
                '<a href="detail.html?placeid=' + data[i].id + '">' +  '<br>' + 
                '<div class="back search-result">'+
                '<div class="row ">' + 
                '<div class="col-xs-6 col-sm-6 col-md-3 col-lg-2">'+'<img style="height:250px; width:250px;" src=' + data[i].photo + 
                ' class="thumbnail" />'+
                '</div>' +

                '<div class="col-xs-6 col-sm-6 col-md-9 col-lg-10 text-center title" style="margin : auto;">' +
                "Lacation"+

                '<h3>' + data[i].name  + '</h3>'+ 
                "Rating"+

                '<p>'+ '<center>' +data[i].rating + '</center>' + '</p>' +
                '<center><span class="rating-static rating-'+ data[i].rating*10+'"></span></center>';
                '</div>' +'</div>'+'</div>'+
                '</a>';
                $('#searchresult').append(row);
            }
        });
    });    
});