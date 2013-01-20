define(function() {
  /**
  * Method to get object with children elements until no more children elements found 
  *
  * @method getChildren
  * @param {Object} element jQuery Object
  * @return {Boolean} Returns true on success
  */
  var getChildren = function(element) {
    // console.log('element:', $(element).prop('tagName'), ', class:', $(element).attr('class'), ', id:', $(element).attr('id'), ', dc:', $(element).children().length);
    var el = element;

    if (el.children() !== 0) {
      $(el.children()).each(function(i) {
          // declare treeArr
          var treeArr = [];

          // declare future array object
          var tagObj = $(this).prop('tagName').toString();

          // initialize treeArr obj
          treeArr[i] = {};

          // initialize treeArr obj obj
          treeArr[i][tagObj] = {};

          // assign treeArr obj attributes
          treeArr[i][tagObj]['class'] = $(this).attr('class');
          treeArr[i][tagObj]['id'] = $(this).attr('id');
          treeArr[i][tagObj]['children'] = [];

        // treeArr['element'] = $(this).prop('tagName');
        // obj['class'] = $(this).attr('class');
        // obj['id'] = $(this).attr('id');
        // obj['children'] = [];
        // obj['children'][i] = getChildren($(this), obj['children']);

        // console.log($(this).prop('tagName') + '.' + $(this).attr('id'), ', this is child nbr:', i, ', class:', $(this).attr('class'), ', id:', $(this).attr('id') , ', dc:', $(this).children().length);
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