import ToDoList from '../modules/todo.js';

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