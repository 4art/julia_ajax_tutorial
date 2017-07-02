/*function Validation(){
		var name = $("#name");
		var surname = $("#surname");
		var country = $("#country");
		name.change(function(){
			if(name.val().length < 3){
				$("#NameError").removeClass("hidden");
				$("#NameError").text("Fill this Field");
				name.addClass("error");
			}
		});
		surname.change(function(){
			if(surname.val().length < 3){
				$("#SurnameError").removeClass("hidden");
				$("#SurnameError").text("Fill this Field");
				surname.addClass("error");
			}
		});
		country.change(function(){
			if(country.val().length < 3){
				$("#CountryError").removeClass("hidden");
				$("#CountryError").text("Fill this Field");
				country.addClass("error");
			}
		});

}*/


function inputValidation(element){
	element.on("change, keyup, keydown", function(){
		emptyCheck(element);
	})
}
function emptyCheck(element){
		if(element.val().length < 3){
			element.parent().find("span").removeClass("hidden").text("Fill this Field");
			element.addClass("error");
		}
		else{
			element.parent().find("span").addClass("hidden").text(" ");
			element.removeClass("error");
		}
}

$(document).ready(function(){
    $.ajax({
        url:"/users",
        type: "GET",
        success: function(data){
            var users = JSON.parse(data);
            console.log(users);
        }
    });
	var name = $("#name");
	var surname = $("#surname");
	var country = $("#country");
	var button = $("#button");
	inputValidation(name);
	inputValidation(surname);
	inputValidation(country);

	button.click(function(){
		emptyCheck(name);
		emptyCheck(surname);
		emptyCheck(country);
	})

});


/*$(document).ready(function(){
    $.ajax({
        url:"/holidays",
        type: "GET",
        success: function(data){
            var ferien = JSON.parse(data);
            console.log(ferien.HE);
        }
    });
});*/