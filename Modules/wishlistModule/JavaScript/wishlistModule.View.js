// @module JJ.wishlistExtension.wishlistModule
define('JJ.wishlistExtension.wishlistModule.View'
,	[
	'jj_wishlistextension_wishlistmodule.tpl'
	
	,	'JJ.wishlistExtension.wishlistModule.SS2Model'
	
	,	'Backbone'
    ]
, function (
	jj_wishlistextension_wishlistmodule_tpl
	
	,	wishlistModuleSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class JJ.wishlistExtension.wishlistModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: jj_wishlistextension_wishlistmodule_tpl

	,	initialize: function (options) {

		
    this.container = options.container;
    this.model = options.model;
 
    if (!this.model) {
        console.warn('Model not passed to mywishlidtmoduleView');
    } else {
        console.log('Model received in wishlist view:', this.model.toJSON());
    }


			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new wishlistModuleModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });

			
		}

	,	events: {
		
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return JJ.wishlistExtension.wishlistModule.View.Context
	,	getContext: function getContext()
		{
			//@class JJ.wishlistExtension.wishlistModule.View.Context
			// this.message = this.message || 'Hello World!!'
			// return {
			// 	message: this.message
			// };
		}


	});
});
