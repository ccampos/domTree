define(function() {
  /**
  * Method to get object with children elements until no more children elements found 
  *
  * @method getChildren
  * @param {Object} element jQuery Object
  * @param {Object} curObject Object to populate with attributes and children
  * @return {Boolean} Returns true on success
  */
  var getChildren = function(element, obj) {
    // console.log('element:', $(element).prop('tagName'), ', class:', $(element).attr('class'), ', id:', $(element).attr('id'), ', dc:', $(element).children().length);
    if (element.children() !== 0) {
      $(element.children()).each(function(i) {

        obj['element'] = $(this).prop('tagName');
        obj['class'] = $(this).attr('class');
        obj['id'] = $(this).attr('id');
        obj['children'] = {
          // getChildren($(this), obj);
        }

        console.log($(this).prop('tagName') + '.' + $(this).attr('id'), ', this is child nbr:', i, ', class:', $(this).attr('class'), ', id:', $(this).attr('id') , ', dc:', $(this).children().length);
        // getChildren($(this));
      });
    } else {
      console.log("");
      return;
    };
  };

  return {
    getChildren: getChildren
  }

});