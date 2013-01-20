define(function() {
  /**
  * Method to create DOM tree 
  *
  * @method createTree
  * @param {Object} element jQuery Object
  */
  var createTree = function(element) {
    var el = element;
    // declare structure array of objects
    var branch = [];

    // if el has children create new branch

    if (el.children() !== 0) {
      $(el.children()).each(function(i, outChild) {
        // assign branch obj attributes and add to branch
        branch[i] = {};
        branch[i] = createBranchEl($(outChild));

        // do only if tabObj children is not empty - FUTURE TASK
        // branch[i][tagObj]['children'] = [];
        var outChildChildren = $(outChild).children();
        if (outChildChildren !== 0) {
          // declare branch i children
          branch[i]['children'] = [];
          $(outChildChildren).each(function(j, inChild) {
            // assign branch
            branch[i]['children'][j] = createBranchEl($(inChild));
          });
        };



        /**
        * Method to create branch
        * and return object
        *
        * @method createBranch
        * @param {Object} element jQuery Object
        * @return {Object} branch
        */
        function createBranch(element) {
          // declare local variable of jQuery Object
          var el = element;

          var branch = [];

          // declare branch i children
          branch[i]['children'] = [];
          $(outChildChildren).each(function(j, inChild) {
            // assign branch
            branch[i]['children'][j] = createBranchEl($(inChild));
          });

          return branch;
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

          var branchEl = {};

          branchEl['el'] = el.prop('tagName').toLowerCase();
          branchEl['class'] = el.attr('class');
          branchEl['id'] = el.attr('id');

          return branchEl;
        };


      });
    } else {
      console.log("");
      return;
    };
  };

  return {
    createTree: createTree
  }

});