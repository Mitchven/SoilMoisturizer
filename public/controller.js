// basic functionalities
$(document).ready(function () {
	client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
	client.on("connect", function () {
		console.log("Successfully connected");
	})
	client.on("message", function (topic, payload) {
		console.log("Received { topic:" + topic + "; payload: " + payload + " }");
		switch (topic) {
			case "soilMoisturizer":
				$('#tp').val(moment().format('MMMM Do YYYY, h:mm:ss a'));
				$('#ss').val(payload);
				break;
		}
		if (topic == 'soilMoisturizer') {
			console.log(moment().format('MMMM Do YYYY, h:mm:ss a'), payload)
			$('tbody').append('<tr><td style="color:white">' + moment().format('MMMM Do YYYY, h:mm:ss a') + '</td><td style="color:white">' + payload + '</td></tr>');
			}
	});

	$('#history').click(function() {
		
	})

	$(document).on('click', '#remove', function () {
		$('tbody tr').remove();
	});

	client.subscribe(
		'soilMoisturizer'
	)
})