import ToDoList from "../modules/todo";

describe("Add to task list", () => {
  test("Testcase one", () => {
    document.body.innerHTML =
      "<div>" + '  <ul class="todo-list"></ul>' + "</div>";

    const Test = new ToDoList(true);
    Test.addTaskToList("Task one");
    Test.addTaskToList("Task two");
    expect(Test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll(".todo-list li");
    expect(list).toHaveLength(2);
  });

  test("Testcase two", () => {
    document.body.innerHTML =
      "<div>" + '  <ul class="todo-list"></ul>' + "</div>";

    const Test = new ToDoList(true);
    Test.addTaskToList("Task three");
    const list = document.querySelectorAll(".todo-list li");
    expect(list).toHaveLength(1);
  });

  test("Testcase three", () => {
    document.body.innerHTML =
      "<div>" + '  <ul class="todo-list"></ul>' + "</div>";

    const Test = new ToDoList(true);
    expect(Test.onLoadList()).not.toBeUndefined();
    Test.addTaskToList("Task four");
    Test.addTaskToList("Task five");
    Test.addTaskToList("Task six");
    Test.addTaskToList("Task seven");
    Test.addTaskToList("Task eight");
    expect(Test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll(".todo-list li");
    expect(list).toHaveLength(5);
  });

  test("Testcase four", () => {
    document.body.innerHTML =
      "<div>" + '  <ul class="todo-list"></ul>' + "</div>";

    const Test = new ToDoList(true);
    Test.addTaskToList("Task nine");
    Test.addTaskToList("Task ten");
    Test.addTaskToList("Task eleven");
    expect(Test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll(".todo-list li");
    expect(list).toHaveLength(3);
  });
  test("Testcase five", () => {
    document.body.innerHTML =
      "<div>" + '  <ul class="todo-list"></ul>' + "</div>";

    const Test = new ToDoList(true);
    Test.addTaskToList("Task twelve");
    Test.addTaskToList("Task thirteen");
    Test.addTaskToList("Task fourteen");
    expect(Test.onLoadList()).not.toBeUndefined();
    const list = document.querySelectorAll(".todo-list li");
    expect(list).toHaveLength(3);
  });

  test("Testcase six", () => {
    document.body.innerHTML =
      "<div>" + '  <ul class="todo-list"></ul>' + "</div>";

    const Test = new ToDoList(true);
    Test.addTaskToList("Task fifteen");
    Test.addTaskToList("Task sixteen");
    Test.addTaskToList("Task seventeen");
    Test.addTaskToList("Task eighteen");
    expect(Test.onLoadList()).not.toBeUndefined();
    expect(Test.onLoadList()).toHaveLength(4);
    const list = document.querySelectorAll(".todo-list li");
    expect(list).toHaveLength(4);
  });
});