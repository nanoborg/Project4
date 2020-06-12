const date = document.querySelector('.date')

let currentDate = new Date()//<--- get time date object
    date.textContent = currentDate.toLocaleTimeString()
    


const pageClock = () => {

    const getTime = () => {
    
    let currentDate = new Date()//<--- get time date object
    date.textContent = currentDate.toLocaleTimeString()
    }

    setInterval(getTime, 60000)
    }


pageClock()
        