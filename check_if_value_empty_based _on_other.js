field_name: {
    required : function(element) {
        var action = $("#action").val();
        if(action == "insert") { 
            return true;
        } else {
            return false;
        }
    }
}
