$(document).ready(function(){

	// calls our renderBurger function to populate the page with all burgers from the database 
	renderBurgers();

	// when called will render all burgers from the database onto the page
	function renderBurgers() {

		var originURL = document.location.origin; 

		// emptys the divs that will be populated
		$('#notEatenArea').empty()
		$('#eatenArea').empty()

		// AJAX call which will come back with info about the burgers in our database
		$.ajax({url: originURL + '/api', method: 'GET'}).done(function(response){

			console.log(response)

			// for each burger in the database create a div and sort them based on if they are eaten or not
			// burgers that haven't been eaten get a button which, when pressed, will changed them to eaten
			for (var i = 0; i < response.length; i++) {
				var div = $('<div>')
				var burgerp = $('<p>')
				burgerp.text(response[i].burger_name)
				var button = $('<button>')
				button.text('eat')
				button.attr('data-id', response[i].id)

				button.click(function(){
					var deleteInfo = {
						id: $(this).attr("data-id")
					};
					$.post(originURL + '/delete', deleteInfo).done(function(data){

					});
					renderBurgers();
				});

				if (response[i].devoured == 0) {
					$('#notEatenArea').append(div)
					div.append(burgerp)
					div.append(button)
					div.append('<br>')
					div.append('<br>')
				} else {
					$('#eatenArea').append(div)
					div.append(burgerp)
					div.append('<br>')
					div.append('<br>')
				};

			};

		});

	};

	// when the 'Submit' button is pressed make an AJAX call to the server which will then insert the burger into our database
	$('#button').click(function(){

		var originURL = document.location.origin; 

		var burgerInfo = {
			name: $('#burgerInput').val()
		};

		$('#burgerInput').val(null);

		$.post(originURL + '/api', burgerInfo).done(function(data){

	    	console.log(burgerName);

		});

		// renderBurgers again to reflect the changes in the database
		renderBurgers();

	});

});

module.exports = burgers;