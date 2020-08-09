
function getArraySum(num) {
        var sum =0;
    for(i=0;i<num.length;i++){
        var element = num[i];
        sum = sum +element;

    }
    return sum;
}
var num =[23 ,45, 67, 78 ,23 ,43];
var result =getArraySum(num);
console.log(result);