$(document).ready(function() {
	var api_key = '1531a11b084341051b503c071373d583412407655918e4083afd2646b3faaec8';
	var api_param = '?apikey='
	var upcoming_sales_url = 'https://api.gilt.com/v1/sales/active.json'
	var uri = upcoming_sales_url + api_param + api_key;

	function randomIntFromInterval(min,max) {
	    return Math.floor(Math.random()*(max-min+1)+min);
	}

	$.getJSON(uri, function(data) {
		var idx = randomIntFromInterval(0, data.sales.length - 1);
		var imageSrc = data.sales[idx].image_urls['1536x640'][0].url;
		var href = data.sales[idx].sale_url;
		var name = data.sales[idx].name;
		var description = data.sales[idx].description;
		$('.background-image').attr('href', href).css('background-image', 'url(' + imageSrc + ')');
		$('.sale-description .name').text(name);
		$('.sale-description .description').text(description);
	});
})