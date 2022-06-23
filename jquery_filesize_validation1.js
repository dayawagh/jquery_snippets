$(document).ready(function() {       
    $('#logo').bind('change', function() {
        var a=(this.files[0].size);
        alert(a);
        if(a > 2000000) {
            alert('large');
        };
    });
});
