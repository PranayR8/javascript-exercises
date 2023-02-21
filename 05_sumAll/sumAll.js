const sumAll = function(start, end) {
    let intReturner = 0;
    if (start < 0){
        return "ERROR"
    }
    
    else if (typeof end == "string"){
        return "ERROR"
    }
    else if (start < end){
        while(start<= end){
            intReturner += start;
            start++      
        }
    }

    else if (end < start){
        while(end<= start){
            intReturner += end;
            end++
        }
    }

    else{
        return "ERROR"
    }
    
    
    return intReturner;

};

// Do not edit below this line
module.exports = sumAll;
