sap.ui.jsview("html501.view.HelloWorld", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.HelloWorld
	 */
	getControllerName: function() {
		return "html501.controller.HelloWorld";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.HelloWorld
	 */
	createContent: function(oController) {
		return new sap.m.Page({
			title: "Hello World",
			content: [

			]
		});
	}

});