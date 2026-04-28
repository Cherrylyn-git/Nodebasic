var attempts = 0;

var timer = setInterval(function(){
    attempts += 1;
    if (attempts <= 4){
        console.log(timer + " Accessing " + __filename);
    }else{
        console.log('Logging Complete. System exiting...');
        clearInterval(timer);
    }
}, 3000);