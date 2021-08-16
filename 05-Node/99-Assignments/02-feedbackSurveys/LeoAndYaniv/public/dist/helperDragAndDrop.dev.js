"use strict";

function onDragStart(event) {
  //YS: Very nice!!! 
  try {
    event.dataTransfer.setData('text/plain', event.target.id);
    event.currentTarget.style.backgroundColor = 'yellow';
    event.currentTarget.style.borderRadius = '0px';
  } catch (error) {
    console.error(error);
  }

  ;
}

;

function onDragOver(event) {
  try {
    event.preventDefault();
  } catch (error) {
    console.error(error);
  }

  ;
}

;

function onDrop(event) {
  var idDraggable, idDropeable, draggableElement, dropzone, tasksData, tasks;
  return regeneratorRuntime.async(function onDrop$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          idDraggable = event.dataTransfer.getData('text');
          idDropeable = event.target.id;
          draggableElement = document.getElementById(idDraggable);
          dropzone = event.target;
          dropzone.appendChild(draggableElement);
          event.dataTransfer.clearData();
          _context.next = 9;
          return regeneratorRuntime.awrap(axios.put("/editStatusTask/".concat(idDraggable, "/").concat(idDropeable)));

        case 9:
          tasksData = _context.sent;
          tasks = tasksData.data.tasks;
          renderTask(tasks);
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 17:
          ;

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 14]]);
}

;