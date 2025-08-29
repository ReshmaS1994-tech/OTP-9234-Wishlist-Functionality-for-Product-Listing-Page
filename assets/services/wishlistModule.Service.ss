
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJ.wishlistExtension.wishlistModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJ.wishlistExtension.wishlistModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}