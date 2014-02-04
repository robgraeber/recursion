// this is what you would do if you liked things to be easy:
//var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var json = "";
  if(typeof obj === 'string'){
    obj = obj.replace(/\\/g, '\\\\');
    obj = obj.replace(/"/g, '\\"');
    json = '"'+obj+'"';
  }else if(typeof obj === 'number'){
    json = obj.toString();
  }else if(typeof obj === 'boolean'){
    json = obj.toString();
  }else if(obj == null){
    json = "null";
  }else if(Array.isArray(obj)){
    json += "[";
    for(var i = 0; i < obj.length; i++){
      json += stringifyJSON(obj[i]);
      if(i !== obj.length-1){
        json += ",";
      }
    }
    json += "]";
  }else if(typeof obj === 'object'){
    json += "{";
    for (var i = 0; i < Object.keys(obj).length; i++){
      var key = Object.keys(obj)[i];
      if(obj.hasOwnProperty(key)){
        json += '"'+key+'":';
        json += stringifyJSON(obj[key]);
        if(i !==  Object.keys(obj).length-1){
          json += ",";
        } 
      }
      
    }
    json += "}";
  }
  return json;
};
