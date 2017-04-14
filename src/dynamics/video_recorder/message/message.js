Scoped.define("module:VideoRecorder.Dynamics.Message", [
    "dynamics:Dynamic"
], [
    "dynamics:Partials.ClickPartial"
], function(Class, Templates, scoped) {
    return Class.extend({
        scoped: scoped
    }, function(inherited) {
        return {

            template: "<%= template(dirname + '/video_recorder_message.html') %>",

            attrs: {
                "css": "ba-videorecorder",
                "message": ''
            },

            functions: {

                click: function() {
                    this.trigger("click");
                }

            }

        };
    }).register("ba-videorecorder-message");
});