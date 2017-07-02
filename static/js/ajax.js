$.ajax({
    url:"/holidays",
    type: "GET",
    success: function(data){
        console.log(data);
    }
});