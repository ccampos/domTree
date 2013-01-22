define(function() {
  /**
  * Method to create DOM tree 
  *
  * @method createBranch
  * @param {Object} element jQuery Object
  * @return {Array} branch
  */
  var createBranch = function(element) {
    var el = element;
    // declare structure array of objects
    var branch = [];

    // if el has children create new branch
    if (hasChildren(el)) {
      $(el.children()).each(function(i, child) {
        branch[i] = createBranchEl($(child));
      });
    };

    // log branch for inspection
    console.log('branch:', branch);

    return branch;
  };

  /**
  * Method to determine if has children
  * and return object
  *
  * @method hasChildren
  * @param {Object} element jQuery Object
  * @return {boolean}
  */
  function hasChildren(element) {
    // declare local variable of jQuery Object
    var el = element;

    return el.children().length !== 0;
  };

  /**
  * Method to create branch object
  * and return object
  *
  * @method createBranchEl
  * @param {Object} element jQuery Object
  * @return {Object} branch
  */
  function createBranchEl(element) {
    // declare local variable of jQuery Object
    var el = element;

    // branch structure
    var branchEl = {};

    // get element's attributes into branch
    branchEl['el'] = el.prop('tagName').toLowerCase();
    branchEl['class'] = el.attr('class');
    branchEl['id'] = el.attr('id');

    // if element has children then create new array of elements
    // and return branch element
    if (hasChildren(el)) {
      branchEl['children'] = [];
      $(el.children()).each(function(i, child) {
        branchEl['children'][i] = createBranchEl($(child));
      });
    };
    
    return branchEl;
  };

  return {
    createBranch: createBranch
  };
});