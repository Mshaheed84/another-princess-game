function getValues(start, finish){
    var rv = []
    var hasFive = true
    for(let i = start; i <= finish; i++){
        var num = i.toString()    // Conver to string in a loop
        for(let n = 0; n< num.length; n++){
            if(num[n] == '5'){   // check for a 5
                hasFive = false
            }
        }
        if(hasFive){
            //console.log(i) // if 5 doesnt exist print the number
            rv.push(i)
        }
        hasFive = true// Reset boolean
    }
    return rv
}
console.log(getValues(4550,4660))
//rest
//

//spread