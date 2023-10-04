const endDate = "30 September 2023 12:00 AM "

document.getElementById("endDate").innerText = endDate;

const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    if(diff < 0) return;
    console.log(diff);
    //Converting into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;

}

//Initial Call
clock()

// 1 day = 24 hours
// 1 hr = 60 min
// 1 min = 3600 sec

setInterval(
    () => {
        clock()
    },
    1000
)

