// how many input, select, and buttons per fieldset

$('form#componentFormId fieldset').each(function(i){
  console.log('fieldset number:', i);
  console.log('input', $(this).find('input').length);
  console.log('select', $(this).find('select').length);
  console.log('button', $(this).find('button').length);
  console.log("");
});


// how many direct children each fieldset has
$('form#componentFormId fieldset').each(function(i){
  console.log('fieldset number:', i);
  console.log('Direct children:', $(this).children().length);
  console.log("");
});


// how many direct children each children has
$('form#componentFormId fieldset').each(function(i){
  console.log($(this).prop('tagName'), 'nbr:', i, ',', 'dc:', $(this).children().length);
  $($(this).children()).each(function(j) {
    console.log(' ', $(this).prop('tagName'), ',', 'dc:',  $(this).children().length);
  });
  console.log("");
});

// three levels deep
$('form#componentFormId fieldset').each(function(i){
  console.log($(this).prop('tagName'), 'nbr:', i, ',', 'dc:', $(this).children().length);
  $($(this).children()).each(function(j) {
    console.log(' ', $(this).prop('tagName'), ',', 'dc:',  $(this).children().length);
    $($(this).children()).each(function(j) {
      console.log('  ', $(this).prop('tagName'), ',', 'dc:',  $(this).children().length);
    });
  });
  console.log("");
});

// four levels deep
$('form#componentFormId fieldset').each(function(i){
  console.log($(this).prop('tagName'), 'nbr:', i, ', dc:', $(this).children().length);
  $($(this).children()).each(function(j) {
    console.log('  ', $(this).prop('tagName'), ', dc:',  $(this).children().length);
    $($(this).children()).each(function(j) {
      console.log('    ', $(this).prop('tagName'), ', dc:',  $(this).children().length);
      $($(this).children()).each(function(j) {
        console.log('      ', $(this).prop('tagName'), ', dc:',  $(this).children().length);
      });
    });
  });
  console.log("");
});

// five levels deep
$('form#componentFormId fieldset').each(function(i){
  console.log($(this).prop('tagName'), 'nbr:', i, ', dc:', $(this).children().length);
  $($(this).children()).each(function(j) {
    console.log('  ', $(this).prop('tagName'), ', dc:',  $(this).children().length);
    $($(this).children()).each(function(j) {
      console.log('    ', $(this).prop('tagName'), ', dc:',  $(this).children().length);
      $($(this).children()).each(function(j) {
        console.log('      ', $(this).prop('tagName'), ', dc:',  $(this).children().length);
        $($(this).children()).each(function(j) {
          console.log('        ', $(this).prop('tagName'), ', dc:',  $(this).children().length);
        });
      });
    });
  });
  console.log("");
});


// five levels deep show class and id for each
$('form#componentFormId div.cel-tabs fieldset').each(function(i){
  console.log('  ', $(this).prop('tagName'), 'child nbr:', i, ', class:', $(this).attr('class'), ', id:', $(this).attr('id') , ', dc:', $(this).children().length);
  $($(this).children()).each(function(i) {
    console.log('    ', $(this).prop('tagName'), 'child nbr:', i, ', class:', $(this).attr('class'), ', id:', $(this).attr('id') , ', dc:', $(this).children().length);
    $($(this).children()).each(function(i) {
      console.log('      ', $(this).prop('tagName'), 'child nbr:', i, ', class:', $(this).attr('class'), ', id:', $(this).attr('id') , ', dc:', $(this).children().length);
      $($(this).children()).each(function(i) {
        console.log('        ', $(this).prop('tagName'), 'child nbr:', i, ', class:', $(this).attr('class'), ', id:', $(this).attr('id') , ', dc:', $(this).children().length);
        $($(this).children()).each(function(i) {
          console.log('          ', $(this).prop('tagName'), 'child nbr:', i, ', class:', $(this).attr('class'), ', id:', $(this).attr('id') , ', dc:', $(this).children().length);
        });
      });
    });
  });
  console.log("");
});


/**
* Method to get object with children elements until no more children elements found 
*
* @method getChildren
* @param {Object} element jQuery Object
* @param {Object} curObject Object to populate with attributes and children
* @return {Boolean} Returns true on success
*/
function getChildren(element, obj) {
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

// five levels deep using getChildren
var el = $('form#componentFormId div.cel-tabs');
var objTree = {};
getChildren(el, objTree);


// example of treeObject
/*
var treeObject = {
  fieldset: {
    class: 'undefined',
    id: 'dataset-0',
    children: {
      legend: {
        class: 'ui-widget-header',
        id: 'undefined'
      },
      div: {
        class: 'formRow',
        id: 'undefined'
      }
    }
  }
};
*/

var treeObject = {
  el: {
    class: 'class',
    id: 'id',
    children: [
      {
        el: {
          class: 'class',
          id: 'id'
        }
      },
      {
        el: {
          class: 'class',
          id: 'id',
          children: [
            {
              el: {
                class: 'class',
                id: 'id'
              }
            },
            {
              el: {
                class: 'class',
                id: 'id'
              }     
            }
          ]
        }
      }
    ]
  }
};


var treeArr = [
  {
    el: {
      class: 'class',
      id: 'id',
      children: [
        {
          el: {
            class: 'class',
            id: 'id'
          }
        },
        {
          el: {
            class: 'class',
            id: 'id',
            children: [
              {
                el: {
                  class: 'class',
                  id: 'id'
                }
              },
              {
                el: {
                  class: 'class',
                  id: 'id'
                }     
              }
            ]
          }
        }
      ]
    }
  },
  {
    el: {
      class: 'class',
      id: 'id',
      children: [
        {
          el: {
            class: 'class',
            id: 'id'
          }
        },
        {
          el: {
            class: 'class',
            id: 'id',
            children: [
              {
                el: {
                  class: 'class',
                  id: 'id'
                }
              },
              {
                el: {
                  class: 'class',
                  id: 'id'
                }     
              }
            ]
          }
        }
      ]
    }
  }
];