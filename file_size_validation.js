$.validator.addMethod('filesize', function (value, element, param) {
    return this.optional(element) || (element.files[0].size <= param * 1000000)
}, 'File size must be less than {0} MB');

$('#update_profile').validate({
    rules: {
        FirstName: {
            required: true,
            maxlength: 20
        },
        image: {
            required: true,
            extension: "jep | jpeg",
            filesize : 5, // here we are working with MB
        }
    }
});
