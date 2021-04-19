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
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const item1 = document.querySelectorAll('li')[1];

//     // item1.remove();
//     document.querySelector('ul').removeChild(item1);
//   });
// }

// #13
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const li = document.createElement('li');
//     const text = document.querySelector('input');
//     li.textContent = text.value;
//     document.querySelector('ul').appendChild(li);

//     text.value = '';
//     text.focus();
//   });
// }

// ＃14
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const li = document.createElement('li');
//     const color = document.querySelector('select');
//     li.textContent = `${color.value} - ${color.selectedIndex}`;
//     document.querySelector('ul').appendChild(li);
//   });
// }

// #15, 16
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const colors = document.querySelectorAll('input');
//     let selectedColor;

//     colors.forEach(color => {
//       if (color.checked === true) {
//         selectedColor = color.value;
//       }
//     });

//     const li = document.createElement('li');
//     li.textContent = selectedColor;
//     document.querySelector('ul').appendChild(li);
//   });
// }

// #17
// {
//   document.querySelector('button').addEventListener('dblclick', () => {
//     console.log('Double Clicked!');
//   });

//   document.addEventListener('mousemove', () => {
//     console.log('moved!');
//   });
// }

// #18
// {
//   document.querySelector('button').addEventListener('dblclick', () => {
//     console.log('Double Clicked!');
//   });

//   // document.addEventListener('mousemove', e => {
//   //   // console.log('moved!');
//   //   console.log(e.clientX, e.clientY);
//   // });

//   document.addEventListener('keydown', e => {
//     console.log(e.key);
//   });
// }

// #19
// {
//   const text = document.querySelector('textarea');

//   // text.addEventListener('focus', () => {
//   //   console.log('focus');
//   // });

//   // text.addEventListener('blur', () => {
//   //   console.log('blur');
//   // });

//   text.addEventListener('input', () => {
//     // console.log('input');
//     console.log(text.value.length);
//   });

//   text.addEventListener('change', () => {
//     console.log('change');
//   });
// }

// #20
// {
//   document.querySelector('form').addEventListener('submit', e => {
//     e.preventDefault();
//     console.log('submit');
//   });
// }

// #21
{
  document.querySelector('ul').addEventListener('click', e => {
    console.log(e.currentTarget);
    // if (e.target.nodeName === 'LI') {
    //   e.target.classList.toggle('done');
    // }
  });
}