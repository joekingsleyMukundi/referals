const date=()=>{
    var day=new Date();
    const options= {day:'numeric', month:'long', year:"numeric", timeZone: 'Africa/Nairobi'};
    const today=day.toLocaleDateString("en-IN", options);
    return today
}
module.exports=date