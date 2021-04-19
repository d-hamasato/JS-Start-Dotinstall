'use strict';

// #1, 2
// {
//   function update() {
//     // document.querySelector('h1').textContent = 'Changed!';
//     // document.querySelector('#target').textContent = 'Changed!';
//     document.getElementById('target').textContent = 'Changed!';
//   }

//   setTimeout(update, 1000);
// }

// // #3
// {
//   function update() {
//     document.getElementById('target').textContent = 'Changed!';
//     // document.querySelector('p').textContent = 'Changed!';
//     // document.querySelectorAll('p')[1].textContent = 'Changed!';
//     document.querySelectorAll('p').forEach((p, index) => {
//       p.textContent = `${index}番目のpです！`;
//     });
//   }

//   setTimeout(update, 1000);
// }

// #5
// {
//   document.querySelector('button').addEventListener('click', () => {
//     document.getElementById('target').textContent = 'Changed!';
//   });
// }

// #6
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('target');

//     targetNode.textContent = 'Changed!';
//     targetNode.title = 'This is title!';
//     targetNode.style.color = 'red';
//     targetNode.style.backgroundColor = 'skyblue';
//   });
// }

// #7
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('target');

//     // targetNode.className = 'my-color';
//     targetNode.className = 'my-color my-border';
//   });
// }

// #8
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('target');

//     // targetNode.className = 'my-color my-border';
//     // targetNode.classList.add('my-color');
//     // if (targetNode.classList.contains('my-color') === true) {
//     //   targetNode.classList.remove('my-color');
//     // } else {
//     //   targetNode.classList.add('my-color');
//     // }
//     targetNode.classList.toggle('my-color');
//   });
// }

// #9
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('target');

//     targetNode.textContent = targetNode.dataset.translation;
//   });
// }

// #10
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const item2 = document.createElement('li');
//     item2.textContent = 'item 2';

//     // const ulNode = document.querySelector(ul);
//     const ul = document.querySelector('ul');
//     ul.appendChild(item2);
//   });
// }

// #11
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const item0 = document.querySelectorAll('li')[0];
//     const copy = item0.cloneNode(true);

//     const ul = document.querySelector('ul');
//     const item2 = document.querySelectorAll('li')[2];
//     ul.insertBefore(copy, item2);
//   });
// }

// #12
{
  document.querySelector('button').addEventListener('click', () => {
    const item1 = document.querySelectorAll('li')[1];

    // item1.remove();
    document.querySelector('ul').removeChild(item1);
  });
}