function fromWhere(regNo){
    if (regNo.startsWith("CY")){
    return "Bellville";
    } else if (regNo.startsWith("CJ")){
    return "Paarl";
    }else if (regNo.endsWith("CA")){
    return "Cape Town";
    }else{
    return "Some other place!";
    }
    }