const number = [5, 10, 15, 20, 25, 30];
const double1 = number.map(function(number) {
  return number * 2;
});
const double2 = number.map(number => {
  return number * 2;
});

console.log('double1', double1);
console.log('double2', double2);

const greet = name => {
  console.log(`Hello ${name}`);
};
greet('Alex');

const Abby = {
  name: 'Abby',
  age: 21,
  hobbies: ['Coding', 'Sleeping', 'Reading'],
  printHobby: function() {
    self = this;
    console.log(this);
    this.hobbies.map(function(hobby) {
      console.log(`${self.name} loves ${hobby}`);
    });
  }
};

const Alex = {
  name: 'Alex',
  age: 22,
  hobbies: ['Playing', 'traveling', 'Watching'],
  printHobby: function() {
    console.log(this);
    //箭头函数绑定父级函数的this
    this.hobbies.map(hobby => {
      console.log(`${this.name} loves ${hobby}`);
    });
  }
};

Abby.printHobby();
Alex.printHobby();

const person = 'John';
const age = 22;
//原版
var sentence1 = person + ' is ' + age + ' years old';
console.log('sentence1', sentence1);
//ES6
const sentence2 = `${person} is ${age} years old`;
console.log('sentence2', sentence2);

const Jelly = {
  name: 'Jelly',
  age: 22,
  date: '2020-3-11',
  todos: [
    { name: 'Go to Store', completed: false },
    { name: 'Watch Movie', completed: true },
    { name: 'Running', completed: true }
  ]
};

function renderTodos(todos) {
  return `<ul>
    ${Jelly.todos
      .map(
        todo => `
      <li>
        ${todo.name} ${todo.completed ? '✔' : '❌'}
      </li>`
      )
      .join('')}
  <ul>`;
}

const template = `
  <div>
    <div>${Jelly.name}</div>
    <div>${renderTodos(Jelly.todos)}</div>
    <div>${Jelly.date}</div>
  </div>
`;
document.body.innerHTML = template;

console.log();
