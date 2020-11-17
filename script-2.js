// В HTML есть пустой список ul#ingredients.

// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const newArr = ingredients.map((value) => { 
    const liItem = document.createElement('li');
    liItem.textContent = value;
    return liItem;
})

// console.log(...newArr)

const list = document.querySelector('#ingredients');
list.append(...newArr)
