const DayName = ["Sunday", 
                 "Monday", 
                 "Tuesday", 
                 "Wednesday",
                 "Thursday", 
                 "Friday", 
                 "Saturday"];
function isWeekday(DayName){
if (DayName.startsWith("M")){
return true;
}else if (DayName.startsWith("T")){
return true;
}else if (DayName.startsWith("W")){
return true;
}else if (DayName.startsWith("F")){
return true;
}else{
return false;
}
}