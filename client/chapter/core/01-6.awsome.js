








// 배열의 능력
// for..in 객체 순환 용도 
// for..of  iterable한 요소를 순환 
// 배열.forEach // 배열 순환 목적 
// 배열.reduce // 배열을 받아서 새로운 무언가(문자,숫자,  배열,객체)를 만들 때 
// 배열.map // 배열을 받아 새로운 배열을 반환 
// {...spread}
// 콜백은 화살표 함수를 쓰는 경우가 만다...

// const user = {
//   name:'tiger'
// }

// let arr = ['승택','혜인','종엽','주현'];

// let total = 0;
// for(let i = 0; i < arr.length;i++){
  // console.log(arr[i]);
// }

// console.log(total);

// let total = 0;
//  화살표 함수는 this 자체가 없어서 대체할 것도 없는것.

// arr.forEach(function(item,index){
  // console.log(this);
// },user)


// const data = {
//   "id": 5,
//   "name": "Chelsey Dietrich",
//   "username": "Kamren",
//   "email": "Lucio_Hettinger@annie.ca",
//   "address": {
//     "street": "Skiles Walks",
//     "suite": "Suite 351",
//     "city": "Roscoeview",
//     "zipcode": "33263",
//     "geo": {
//       "lat": "-31.8129",
//       "lng": "62.5342"
//     }
//   },
//   "phone": "(254)954-1289",
//   "website": "demarco.info",
//   "company": {
//     "name": "Keebler LLC",
//     "catchPhrase": "User-centric fault-tolerant solution",
//     "bs": "revolutionize end-to-end systems"
//   }
// }


const friends = [
    {
      name: '윤보라',
      age: 28,
      job: '마파두부',
    },
    {
      name: '이로운',
      age: 23,
      job: '로운스쿨',
    },
    {
      name: '오승택',
      age: 21,
      job: '진짜',
    }
  ];
  
  
  // let age = friends.reduce((acc,cur)=> acc + '' ,0)
  
  //  reduce  acc +           +=
  // let jobs = friends.reduce((acc,cur)=>{
  //     acc.push(cur.job)
  //     return acc;
  // },[])
  
  
  // console.log(jobs);
  
  
  
  
  let temp = friends.reduce((acc,cur,index)=>{
      return acc + `<div class="swiper-slide">${cur.job}</div>`
  },'')
  
  console.log(temp);
  
  document.querySelector('.swiper-wrapper').insertAdjacentHTML('beforeend',temp);
  
  
  // console.log(age);
  
  /* 
  let jobs = [];
  
  friends.forEach((item)=>{
    jobs.push(item.job)
  })
  
  
  console.log(jobs);
   */
  
  
  
  // .call()
  // .apply()
  // .bind()
  
  // console.log(total);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  