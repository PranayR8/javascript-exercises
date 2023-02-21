

const repeatString = function(string, num) {
    i = 0
    retStr = ""
    while (i<num){
        retStr += string;
        i++;
    }
    if(num < 0){
        retStr = "ERROR";
    }
    return retStr;

};

// Do not edit below this line
module.exports = repeatString;
