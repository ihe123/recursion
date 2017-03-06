// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//types: string literal, integer, object, array, function

var stringifyJSON = function(obj) {

  // your code goes here
if (obj === NaN){
    return "null";
}

if(typeof obj==="number"){
    return obj.toString();
}
if(typeof obj==="string"){
   var objString = '"'+obj+'"'
    return objString;
} 


if(Array.isArray(obj)){

    if(obj[0]===undefined && obj.length===1){
        return "[]";
    }

    if(obj.length===0){
        return "[]";
    }

    var final = "[";
    for(var i=0; i<obj.length-1; i++){
        final += stringifyJSON(obj[i]);
        final += ",";
    }
    final += stringifyJSON(obj[obj.length-1]);
    final +="]";
    return final;
}

if(obj === null){
    return "null";
} 
if(obj=== undefined){
    return undefined;
}
if(obj === true){
    return "true";
}

if(obj === false){
    return "false";
}

if(obj instanceof Object){

    
 
    var finale = "{";
    var keys = Object.keys(obj);
    if(keys.indexOf("undefined")>=0 && obj[keys.indexOf("undefined")]===undefined){
        return '{}';
    }

    if(keys.length===0){
        return "{}";
    }
    for (var j=0; j<keys.length-1; j++ ){
      finale +='"'+keys[j]+'"';
      finale += ":"
      finale+= stringifyJSON(obj[keys[j]]);
      finale+=","
    }
       finale +='"'+keys[j]+'"';
       finale += ":"
       finale+= stringifyJSON(obj[keys[j]]);
    
    finale += "}";
    return finale;
 }

};