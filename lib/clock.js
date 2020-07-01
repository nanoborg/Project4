let date = document.querySelector('.date')

let currentDate = new Date()//<--- get time date object
    
    
const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes
    
    var strTime = `${hours}:${minutes} ${ampm.toUpperCase()}`
    
    return strTime
}
    

const pageClock = () => {
    
    const getTime = () => {
        
        let currentDate = new Date()//<--- get time date object
        date.textContent = formatAMPM(currentDate)
        return
    }
    
    setInterval(getTime, 60000)
    return
}

date.textContent = formatAMPM(currentDate);

pageClock()
        
