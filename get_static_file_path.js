/**/
$(document).ready(() => {
    $("#video").change(function () {
        const file = this.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (event) {
                console.log(event.target.result);
                $("#video_preview").attr("src", event.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
});
