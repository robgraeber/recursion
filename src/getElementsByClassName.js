// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var array = checkChildren(document.body, className);
  console.log("getElementsByClassName");
  console.log(array);
  return array;
};
var checkChildren = function(element, className){
  var array = [];
  //console.log("asdf");
  if(element.className !== undefined && element.classList.length > 0){
    if(_.contains(element.classList, className)){
      console.log("className: "+element.className);
      console.log(element);
      array.push(element);
    }
  }
  for(var i = 0; i < element.childNodes.length; i++){
    array = array.concat(checkChildren(element.childNodes[i], className));
  }
  return array;
};
