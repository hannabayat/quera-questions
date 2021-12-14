function subasaGoals(goalNum,extraTimes,goalTimes){
    
    if(typeof(goalNum)!='number'
    ||typeof (extraTimes[0])!='number'
    ||typeof (extraTimes[1])!='number'
    ||0>goalNum>100 ||0>extraTimes>10||0>extraTimes[0]>10)
        return "correct input" ;
    goalTimes.map(item=>{
        if (typeof(item)!='number'||0>item>100) ;
         return "correct input";
    })

                                                                //algorithm:
    if(goalNum!==goalTimes.length)
     return "No"
    for(let i=0;i<goalTimes.length;i++)
    {
        if (goalTimes[i]>=goalTimes[i+1]) 
        {
            if(goalTimes[i]>(45+extraTimes[0]))
             return "No";
        }
        if (goalTimes[i]>(90+extraTimes[1])) 
        return "No";
    }
    return "Yes";
}

console.log(subasaGoals(6,[2,4],[4,38,46,90]));
console.log(subasaGoals(5,[3,2],[8,24,45,88,91]));
console.log(subasaGoals(4,[2,2],[7,76,45,80]));
console.log(subasaGoals(2,[3,2],[4,44,54,70,85,94]));