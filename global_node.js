let count = 0;

const intervalID =setInterval(()=>{
      console.log("hello students!")
      count++;

      if (count === 5){


        clearInterval(intervalID)
      }
}, 1000);