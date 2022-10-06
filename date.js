
exports.getDate=()=>{

    let day=new Date
    let option={
        weekday:`long`,
        day:`2-digit`,
        
        month:`long`
    }
    let today=day.toLocaleDateString(`en-gb`,option)
    return today
    
}


exports.getDay=()=>{

    let day=new Date
    let option={

        weekday:`long`,
        
    }
    let today=day.toLocaleDateString(`en-gb`,option)
    return today
    
}