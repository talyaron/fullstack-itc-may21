"use strict";

function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  event.currentTarget.style.backgroundColor = 'yellow';
  event.currentTarget.style.borderRadius = '0px';
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  var idDraggable, idDropeable, draggableElement, dropzone, tasksData, tasks;
  return regeneratorRuntime.async(function onDrop$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          idDraggable = event.dataTransfer.getData('text');
          idDropeable = event.target.id;
          draggableElement = document.getElementById(idDraggable);
          dropzone = event.target;
          dropzone.appendChild(draggableElement);
          event.dataTransfer.clearData();
          _context.next = 8;
          return regeneratorRuntime.awrap(axios.put("/editStatusTask/".concat(idDraggable, "/").concat(idDropeable)));

        case 8:
          tasksData = _context.sent;
          tasks = tasksData.data.tasks;
          renderTask(tasks);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}