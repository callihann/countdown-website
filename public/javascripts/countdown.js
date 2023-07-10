function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function dateToEpoch() {
    let dt = getCookie('dt')
    let epochDt = new Date(dt).getTime();
    return epochDt
}

function countdownDisplay(remaining) {
    let dateDisplay = document.getElementById('countdown')
    const dateNow = Math.round(Date.now() / 1000)
    i = (remaining / 1000) - dateNow
    setInterval(function () {
        if (i >= 0, i--) {
            let days = Math.floor(i/86400)
            let hours = Math.floor((i - (86400 * days)) / (60 * 60))
            let minutes = Math.floor((i - (days*86400 + hours*3600)) / 60)
            let seconds = (i - (days*86400 + hours*3600 + minutes * 60))
            dateDisplay.innerHTML = `${days} day(s), ${hours} hour(s), ${minutes} minute(s), ${seconds} second(s)` 
        } else {}
    }, 1000)
}
