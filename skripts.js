
const countdownDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000); 

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = $;{hours}$;{minutes}$;{seconds};

    if (distance < 10) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Время вышло!";
    }
}, 1000);