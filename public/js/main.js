$(document).ready(function() {
	var $searchBox = $('#search');
	var $resultsBox = $('.results');

	$searchBox.keypress(function(event) {
		if (event.keyCode === 13) {
			var queryString = $searchBox[0].value;
			console.log(queryString);
			$('#query').html(queryString);
			$(window).scrollTo('.results',800);
			getData();
		};
	});
});

function loadInData(data) {
	var $resultsBox = $('.people').html('');

	data.forEach(function(data){
		console.log(data);
		$resultsBox.append('<li>'+data['First Name']+' '+data['Surname']+'</li>');
	});
}

function getData() {
	$.ajax('data/people.json')
	.done(function(data) {
		console.log(data);
		loadInData(data);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
}