var min = function(list){
    let sorted = list.sort((a,b) => a-b);
    return sorted[0];
}

var max = function(list){
    let sorted = list.sort((a,b) => b-a);
    return sorted[0];
}