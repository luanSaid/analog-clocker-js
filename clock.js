    const hourHand = document.querySelector('.hand-hour');
    const minuteHand = document.querySelector('.hand-minute');
    const secondHand = document.querySelector('.hand-seconds');
    
    function getTime() {
        const timeNow = new Date();
    
        secondHand.style.transform = `rotate(${convertToDegree(timeNow.getSeconds())}deg)`
        minuteHand.style.transform = `rotate(${convertToDegree(timeNow.getMinutes())}deg)`
        hourHand.style.transform = `rotate(${convertHoursToDegree(timeNow.getHours(), timeNow.getMinutes())}deg)`
    }

    function convertToDegree(time) {
       return (((time / 60) * 360) + 90)
    }
    
    function convertHoursToDegree (hours, minutes){
        return convertToDegree((hours * 5) + (minutes/12))
    }

    setInterval(getTime, 1000);