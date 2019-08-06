(function ($) {
    const Countdown = function () {
        this.endOfMonth = null;
        this.intervalId = null;
    };

    Countdown.prototype.init = function () {
        this.endOfMonth = new Date("Aug 31, 2019 00:00:00").getTime()
        this.intervalId = setInterval(() => {
            this.timer();
        }, 1000);
    }
    Countdown.prototype.timer = function () {
        // Set the date we're counting down to

// Update the count down every 1 second

            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = this.endOfMonth - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            // Display the result in the element with id="demo"
            document.getElementById('day').innerHTML = days;
            document.getElementById('hour').innerHTML = hours;
            document.getElementById('minute').innerHTML = minutes;


            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(this.intervalId);
                // document.getElementById("demo").innerHTML = "EXPIRED";
            }
    };
    (new Countdown()).init();

    const PointCounter = function () {
        this.initialPoint = 500;
        this.points = [0, 1000, 2500, 6500, 11500, 17500, 28000, 40000, 53500];
        this.intervalId = null;
    };

    PointCounter.prototype.init = function () {
        this.intervalId = setInterval(() => {
            this.counter();
        }, 75);
    };

    PointCounter.prototype.counter = function () {
        this.initialPoint = this.initialPoint + 100;


        if(this.initialPoint < 53501){
            $('.my-points-counter').html(this.initialPoint);
            $('.money-gained').html(this.initialPoint/100);
        }

        if(this.initialPoint > 500){
            $('.point-0').addClass('active');
            $('.rake-percent').html(10);
            $('.rank-lvl').html(1);
        }if(this.initialPoint > 1000){
            $('.point-1000').addClass('active');
            $('.rake-percent').html(15);
            $('.rank-lvl').html(2);
        }if(this.initialPoint > 2500){
            $('.point-2500').addClass('active');
            $('.rake-percent').html(20);
            $('.rank-lvl').html(3);
        }if(this.initialPoint > 6500){
            $('.point-6500').addClass('active');
            $('.rake-percent').html(25);
            $('.rank-lvl').html(4);
        }if(this.initialPoint > 11500){
            $('.point-11500').addClass('active');
            $('.rake-percent').html(30);
            $('.rank-lvl').html(5);
        }if(this.initialPoint > 17500){
            $('.point-17500').addClass('active');
            $('.rake-percent').html(35);
            $('.rank-lvl').html(6);
        }if(this.initialPoint > 28000){
            $('.point-28000').addClass('active');
            $('.rake-percent').html(40);
            $('.rank-lvl').html(7);
        }if(this.initialPoint > 40000){
            $('.point-40000').addClass('active');
            $('.rake-percent').html(45);
            $('.rank-lvl').html(8);
        }if(this.initialPoint > 53500){
            $('.point-53500').addClass('active');
            $('.rake-percent').html(50);
            $('.rank-lvl').html(9);
        }
    };

    (new PointCounter().init());
})(jQuery);