const Counter = function(id, count, speed) {
    var counter = 0;
    
    for(var i = 0; i < count; i++) {
        (function(i) {
            setTimeout(
                function() {
                    counter += 1;
                    document.getElementById(id).innerHTML = counter;
                }, speed * (i + 1)
            );
        })(i);
    }
};