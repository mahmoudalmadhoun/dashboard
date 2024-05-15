
const isEmail = (name) => {
    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(name)

}
// validation username
function ValidationUsername(valueEmail) {

    return valueEmail?.length >= Number(6)
}



// validation number 
function ValidationNumberStory(valueNumber) {
    //  console.log(valueNumber)
    return valueNumber?.length >= Number(10)

}

// validation number 
function ValidationPersonNumber(valueNumber) {
    //  console.log(valueNumber)
    return valueNumber?.length >= Number(12)

}

// validation password
function ValidationPassword(inputValue) {
    //    console.log(inputValue)
    return inputValue.length >= 3
}

// card number
function ValidayionCartNumber(name) {

    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    var amexpRegEx = /^(?:3[47][0-9]{13})$/;
    var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    var isValid = false;

    if (visaRegEx.test(name)) {
        isValid = true;
    } else if (mastercardRegEx.test(name)) {
        isValid = true;
    } else if (amexpRegEx.test(name)) {
        isValid = true;
    } else if (discovRegEx.test(name)) {
        isValid = true;
    }

    return isValid
}


// expiration
function ValtionExpiration(name) {
    return /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(name)
}



function ValtionCvvX(name) {
    return /^[0-9]{3,4}$/.test(name)

}

// DESCRIPTION
function ValtionDescription(name){

    return name?.trim().length >= 20
}


//  PRICE
function ValtionPrices(name) {

    return /^[1-9]\d*(\.\d+)?$/.test(name)

}

// name length == 3 
function ValidationName(name){
    // console.log(name)

    return name?.trim()?.length >= 3
}


// name length == 2 
function TimeNumber(name){
  

    return name?.length > Number(0)
}

export const ValtionMe = (name, key) => {
    switch (key) {

        case 'isEmail': return isEmail(name)
        case 'isUser': return ValidationUsername(name)
        case 'inputname': return ValidationName(name)
        case 'isPhone': return ValidationNumberStory(name)
        case 'IsPersonummber': return ValidationPersonNumber(name)
        case 'isPassword': return ValidationPassword(name)
        case 'cartnumber': return ValidayionCartNumber(name)
        case 'Expiration': return ValtionExpiration(name)
        case 'xPcVV': return ValtionCvvX(name)
        case 'description': return ValtionDescription(name)
        case 'Prices': return ValtionPrices(name)
        case 'TheTime': return TimeNumber(name)
        default: return key


    }

}

