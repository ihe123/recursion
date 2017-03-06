// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// var result=[];
// var element = document.documentElement;
// var children = $(element).children();

var getElementsByClassName = function(className
) {
//no more siblings and no more children 

    // if ($(element).hasClass(className)){
    //     result.push(element);
    // }
    var results = [];
    return getElementsByClassNameHelper(className, document.documentElement, results);
};

function getElementsByClassNameHelper(className, element, results){
    if ($(element).hasClass(className)){
        results.push(element);
    }
    for (var i=0; i<$(element).children().length; i++){
        getElementsByClassNameHelper(className, $(element).children()[i], results);
    }

    return results;
}

// getElementsByClassName("targetClassName")("targetClassName", element)

