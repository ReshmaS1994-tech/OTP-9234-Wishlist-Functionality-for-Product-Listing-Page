// Model.js
// -----------------------
// @module Case
define("JJ.wishlistExtension.wishlistModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/wishlistModule/SuiteScript2/wishlistModule.Service.ss"
            ),
            true
        )
});
});
