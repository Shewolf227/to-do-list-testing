import ToDoList from '../modules/todo.js';

// Adding Test

describe('Add to task list', () => {
  test('Testcase one', () => {
    document.body.innerHTML = '<div><ul class="todo-list"></ul></div>';

    const Test = new ToDoList(true);
    Test.addTaskToList('Task one');
    Test.addTaskToList('Task two');
    expect(Test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(2);
  });
});

// Removing Test

describe('Delete a task from the list', () => {
  test('Test case 1', () => {
    document.body.innerHTML = '<div><ul class="todo-list"></ul></div>';

    const Test = new ToDoList(true);
    Test.addTaskToList('7th Test');
    Test.addTaskToList('8th Test');
    Test.addTaskToList('9th Test');
    Test.addTaskToList('10th Test');
    Test.deleteTask(0);
    expect(Test.onLoadList()).not.toBeUndefined();
    expect(Test.onLoadList()).toHaveLength(3);
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(3);
  });
});

// Editing task

describe('Edit Task Description', () => {
  test('Test case 1', () => {
    document.body.innerHTML = '<div><ul class="todo-list"></ul></div>';

    const Test = new ToDoList(true);
    Test.addTaskToList('task to edit');
    Test.addTaskToList('task saved');
    const newDescription = 'This task value has changed';
    expect(Test.editTaskList(0, newDescription)).toEqual(newDescription);
  });
});

// Updating completion status

describe('Update Task completion status', () => {
  test('Test case 1', () => {
    document.body.innerHTML = '<div><ul class="todo-list"></ul></div>';

    const Test = new ToDoList(true);
    Test.addTaskToList('task to edit');
    expect(Test.checkTask(0, false)).toBeTruthy();
  });

  test('Test case 2', () => {
    document.body.innerHTML = '<div><ul class="todo-list"></ul></div>';

    const Test = new ToDoList(true);
    Test.addTaskToList('task to edit');
    expect(Test.checkTask(0, true)).toBeFalsy();
  });
});
