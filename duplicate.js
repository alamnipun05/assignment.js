var name =[3 , 2, 5,45,3,2, 6,7];
var uniqueNamme=[];

for(var i=0; i<name.length;i++){
    var element = name[i];
    var index = uniqueNamme.indexOf(element);
    if (index==-1){
        uniqueNamme.push(element);
    }
}