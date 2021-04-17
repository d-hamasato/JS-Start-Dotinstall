'use strict';

// #1
// {
  // const score1 = 80;
  // const score2 = 90;
  // const score3 = 40;

//   const scores = [80, 90, 40];
//   console.log(scores);
// }

// #2
// {
  // const scores = [80, 90, 40];
  // console.log(scores[1]);

  // scores[2] = 44;
  // console.log(scores);

  // console.log(scores.length);
// }

// #3
// {
  // const scores = [80, 90, 40, 70];

  // console.log(`Score: ${scores[0]}`);
  // console.log(`Score: ${scores[1]}`);
  // console.log(`Score: ${scores[2]}`);

  // for (let i = 0; i < 3; i++) {
//   for (let i = 0; i < scores.length; i++) {
//     console.log(`Score ${i}: ${scores[i]}`);
//   }
// }

// #4
// {
//   const scores = [80, 90, 40, 70];
//   scores.push(60, 50);
//   scores.shift();

//   for (let i = 0; i < scores.length; i++) {
//     console.log(`Score ${i}: ${scores[i]}`);
//   }
// }

// #5
// {
//   const scores = [80, 90, 40, 70];
//   scores.splice(1, 1, 40, 50);

//   for (let i = 0; i < scores.length; i++) {
//     console.log(`Score ${i}: ${scores[i]}`);
//   }
// }

// #6
// {
//   const otherScores = [10, 20];
//   const scores = [80, 90, 40, 70, ...otherScores];
//   console.log(scores);

//   function sum(a, b) {
//     console.log(a + b);
//   }

//   sum(...otherScores);
// }

// #7
// {
  // const scores = [80, 90, 40, 70];

  // const [a, b, c, d] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);

  // const [a, b, ...others] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(others);

  // let x = 30;
  // let y = 70;
  // [x, y] = [y, x];
  // console.log(x);
  // console.log(y);
// }

// #8
// {
//   const scores = [80, 90, 40, 70];

//   // scores.forEach((score) => {
//   scores.forEach((score, index) => {
//     console.log(`Score ${index}: ${score}`);
//   });
// }

// #9
// {
  // const prices = [180, 190, 200];

  // const updatedPrices = prices.map((price) => {
  //   return price + 20;
  // });

//   const updatedPrices = prices.map(price => price + 20);
//   console.log(updatedPrices);
// }

// #10
// {
  // const numbers = [1, 4, 7, 8, 10];

  // const evenNumbers = numbers.filter(number => {
  //   if (number % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
//   const evenNumbers = numbers.filter(number => number % 2 === 0);

//   console.log(evenNumbers);
// }

// #11
// {
  // const point = [100, 180];

  // const point = {x: 100, y: 180};
//   const point = {
//     x: 100,
//     y: 180,
//   };
//   console.log(point);
// }

// #12
// {
//   const point = {
//     x: 100,
//     y: 180,
//   };

  // point.x = 120;
  // point['x'] = 120;

  // console.log(point.x);
  // console.log(point['y']);

//   point.z = 90;
//   delete point.y;
//   console.log(point);
// }

// #13
// {
//   const otherProps = {
//     r: 4,
//     color: 'red',
//   };

//   const point = {
//     x: 100,
//     y: 180,
//     ...otherProps,
//   };
  // console.log(point);

//   const {x, r, ...others} = point;
//   console.log(x);
//   console.log(r);
//   console.log(others);
// }

// #14
// {
//   const point = {
//     x: 100,
//     y: 180,
//   };

  // const keys = Object.keys(point);
  // keys.forEach(key => {
  //   console.log(`key: ${key} Value: ${point[key]}`);
  // });

//   const points = [
//     {x: 30, y: 20},
//     {x: 10, y: 50},
//     {x: 40, y: 40},
//   ]
//   console.log(points[1].y);
// }

// #15, 16
// {
  // let x = 1;
  // let y = x;
  // x = 5;
  // console.log(x);
  // console.log(y);

  // let x = [1, 2];
  // let y = x;
  // x[0] = 5;
  // console.log(x);
  // console.log(y);

//   let x = [1, 2];
//   let y = [...x];
//   x[0] = 5;
//   console.log(x);
//   console.log(y);
// }

// #17
// {
//   const str = 'hello';
  // console.log(str.length);

  // console.log(str.substring(2, 4));

  // console.log(str[1]);
// }

// #18
// {
//   const d = [2019, 11, 14];

  // console.log(d.join('/'))
  // console.log(d.join(''))

  // const t = '17:08:24';
  // console.log(t.split(':'));
//   const [hour, minute, second] = t.split(':');
//   console.log(hour);
//   console.log(minute);
//   console.log(second);
// }

// #19
// {
//   const scores = [10, 3, 9];

//   let sum = 0;

//   scores.forEach(score => {
//     sum += score;
//   });

//   const avg = sum / scores.length;

  // console.log(sum);
  // console.log(avg);

  // console.log(Math.floor(avg));
  // console.log(Math.ceil(avg));
  // console.log(Math.round(avg));
  // console.log(avg.toFixed(3));

//   console.log(Math.random());
// }

// #20
// {
//   console.log(Math.random());

  // 0, 1, 2
  // Math.floor(Math.random() * 3)
  // 0, ..., n
  // Math.floor(Math.random() * (n + 1))
  // min, ..., max
  // Math.floor(Math.random() * (max + 1 - min)) + min

//   console.log(Math.floor(Math.random() * 6) + 1);
// }

// #21
// {
//   const d = new Date();
//   // console.log(d);

//   console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日 `)
// }

// #22
// {
//   const d = new Date(2019, 10);
//   d.setHours(10, 20, 30);
//   d.setDate(31);
//   d.setDate(d.getDate() + 3);
//   console.log(d);
// }

// #23
// {
  // alert('hello');

//   const answer = confirm('削除しますか？');
//   if (answer) {
//     console.log('削除しました');
//   } else {
//     console.log('キャンセルしました');
//   }
// }

// #24
// {
//   let i = 0;

//   function showTime() {
//     console.log(new Date());
//     i++;
//     if (i >2) {
//       clearInterval(intervalId);
//     }
//   }

//   const intervalId = setInterval(showTime, 1000);
// }

// #25
// {
//   let i = 0;

//   function showTime() {
//     console.log(new Date());
//     const timeoutId = setTimeout(showTime, 1000);
//     i++;
//     if (i > 2) {
//       clearTimeout(timeoutId);
//     }
//   }

//   showTime();
// }

// #27
// {
  // const name = 'taguchi';
//   const name = 2;

//   try {
//     console.log(name.toUpperCase());
//   } catch (e) {
//     console.log(e);
//   }

//   console.log('finish!');
// }

// #28
// {
//   const posts = [
//     {
//       text: 'JavaScriptの勉強中...',
//       likeCount: 0,
//     },
//     {
//       text: 'プログラミング楽しい！',
//       likeCount: 0,
//     },
//   ];

//   function show(post) {
//     console.log(`${post.text} - ${post.likeCount}いいね`);
//   }

//   show(posts[0]);
// }

// #29
// {
//   const posts = [
//     {
//       text: 'JavaScriptの勉強中...',
//       likeCount: 0,
      // show:   function() {
      //   console.log(`${this.text} - ${this.likeCount}いいね`);
      // },
//       show() {
//         console.log(`${this.text} - ${this.likeCount}いいね`);
//       },
//     },
//     {
//       text: 'プログラミング楽しい！',
//       likeCount: 0,
//       show() {
//         console.log(`${this.text} - ${this.likeCount}いいね`);
//       },
//     },
//   ];

//   // show(posts[0]);
//   posts[0].show();
//   posts[1].show();
// }

// #30, 31, 32
// {
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }
//     show() {
//       console.log(`${this.text} - ${this.likeCount} likes`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }
//   }

//   const posts = [
//     new Post('JavaScriptの勉強中...'),
//     new Post('プログラミング楽しい！'),
//   ];

//   posts[0].like();

  // posts[0].show();
  // posts[1].show();
// }

// #33
// {
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }
//     show() {
//       console.log(`${this.text} - ${this.likeCount} likes`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }

//     // 静的メソッド
//     // thisは使えない
//     static showInfo() {
//       console.log('Post class version 1.0');
//     }
//   }

//   const posts = [
//     new Post('JavaScriptの勉強中...'),
//     new Post('プログラミング楽しい！'),
//   ];

//   // posts[0].like();
//   Post.showInfo();
// }

// #34, 35
{
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }
    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  }

  class SponsoredPost extends Post {
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor;
    }

    show() {
      super.show();
      console.log(`...sponsored by ${this.sponsor}`);
    }
  }

  const posts = [
    new Post('JavaScriptの勉強中...'),
    new Post('プログラミング楽しい！'),
    new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
  ];

  posts[2].show();
  posts[2].like();
}