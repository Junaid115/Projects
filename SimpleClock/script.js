setInterval(function () {
    let Current_date = new Date();
    document.getElementsByClassName("hour")[0].innerHTML = 
        Current_date.getHours();
    document.getElementsByClassName("minute")[0].innerHTML =
        Current_date.getMinutes();
    document.getElementsByClassName("second")[0].innerHTML =
        Current_date.getSeconds();

    switch (Current_date.getDay()) {
        case 0:
            document.getElementsByClassName('sun')[0].classList.add('day')
            break;
        case 1:
            document.getElementsByClassName('mon')[0].classList.add('day')
            break;
        case 2:
            document.getElementsByClassName('tue')[0].classList.add('day')
            break;
        case 3:
            document.getElementsByClassName('wed')[0].classList.add('day')
            break;
        case 4:
            document.getElementsByClassName('thu')[0].classList.add('day')
            break;
        case 5:
            document.getElementsByClassName('fri')[0].classList.add('day')
            break;
        case 6:
            document.getElementsByClassName('sat')[0].classList.add('day')
            break;
    }

    if(Current_date.getHours < 12){
        document.getElementsByClassName('ampm')[0].innerText = "AM"
    }
    else{
        document.getElementsByClassName('ampm')[0].innerText = "PM"
    }

    
    let x = Current_date.getHours()
    if(x > 18 && x <= 23){
        document.getElementsByTagName('body')[0].setAttribute('class','dark')
    }
    else if(x >= 0 && x < 6){
        document.getElementsByTagName('body')[0].setAttribute('class','dark')
    }
    else{
        document.getElementsByClassName('ampm')[0].innerText = "PM"
    }

}, 1000);