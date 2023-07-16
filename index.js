// Code your solutions in this file


function writeCards(attendees, event) {
    const thankyous = [];
    for (let i = 0; i < attendees.length; i++) {
        thankyous.push(`Thank you, ${attendees[i]}, for the wonderful surprise gift!`)
    }
    return thankyous;
}





function countDown(i) {
    let countNum = i;
    while (countNum >= 0) {
        console.log(countNum)
        countNum--;
    }
}

countDown(17);