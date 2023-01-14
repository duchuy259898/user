// function joinWithCharacter(array, charactor) {

//     return array.join(charactor)
//     }
    
    
    
//     // Ví dụ khi sử dụng

//     var cars = ['Honda', 'Mazda', 'Mercedes'];
    
//     var result = joinWithCharacter(cars, ' - ');//    tạo biến có hàm có 2 tham số , 1 tham số là tên mảng , 1 tham số là tính năng 

    
//     console.log(result);    //gọi biến result
// function getLastElement(array){
//     return array.shift()
// }



// Ví dụ sử dụng
// var animals = ['Monkey', 'Tiger', 'Elephant'];
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals);
// function User(firstName, lastName , avatar){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// var author = new User('duc', 'huy');
// var user = new User('nga', 'ngo');
// console.log(author.getName());
// console.log(user);
// var date = new Date();
// var day = date.getDate();
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// console.log(`${day}/${month}/${year}`);

// var random = Math.floor(Math.random() * 100)  Tỉ lêj phần trăm ra 
// if(random < 60){
//     console.log('cuong hoa thanh cong')
// }

// var getRandomItem = function(array) {
//     array = [];
//     return array = Math.random;
// }

// function varRandNumber(max,min,length){   Tìm những số bất kì trong khoảng max min , i là số thứ tự trong mảng từ 0 , 
                                            // còn length là tổng các phẩn từ có trong mảng [1,2,3] length = 3
//     var arr = []
//     for(var i = 0;i < length;i++){
//         arr[i] = Math.random() * (max - min) + min
//     }
//     return arr
// }
// console.log(varRandNumber(1000,1,10))

// function getTotal(arr){  Tinhs tổng Gt trong array
//     var sum = 0
//     for(var i = 0;i < arr.length; i++){
//         sum = sum + arr[i]
//     }
//     return sum  
// }
// console.log(getTotal([1,2,3]))

// var arr = [ Lấy đc ra các phẩn từ của mảng
//     'nga',
//     'ngo',
//     'an',
//     'cut'
// ]
// for(var i = 0;i < arr.length;i++){
//     console.log(arr[i])
// }

// var orders = [                          tính tổng giá trị trong một mảng có objet củ thể ,
//     {                                       Ví dụ là tính số tiền đã đặt cho vào giỏ hàng
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]
// function getTotal(arr){
//     var sum = 0
//     for(var i = 0;i < arr.length;i++){
//         sum += arr[i].price
//     }
//     return sum
// }



// // Expected results:
// getTotal(orders) // Output: 8700000

// function run(object) {
//     var arr = [];
//     for (var key in object) {
//         arr.push("Thuộc tính" + key + "có giá trị"  + object[key])
//     }
//     return arr;
// }
// console.log(run({ name: 'Nguyen Van A', age: 16 }));

// var i = 0;

// while(i <= 100){
//     console.log(i);
//     ++i;
// }


// var myArray = [                      104. Vong lap long nhau
//     [1,2],
//     [3,4],
//     [5,6],
// ]
// for(var i = 0 ; i < myArray.length; i++){
//     for(var j = 0 ; j < myArray[i].length; j++ ){
//         console.log(myArray[i][j])
//     }
// }
// function ancut(){
//     ancut();
// }
// ancut();

// var sports = [           110.reduce
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 8
//     },
// ]

// function getTotal(arr){
//     var totalGold = arr.reduce(function(accumulator, currentValue){
//         return accumulator + currentValue.gold
//     },0)
//     return totalGold
// }
// console.log(getTotal(sports))




// var depthArray = [1,2, [3,4], 5, 6, [7,8,9]];

// var flatArray = depthArray.reduce(function(flatOutput,depthItem){
//     return flatOutput.concat(depthItem); 
// }, [])

// console.log(flatArray)

// var watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//   }
// ];
// function calculateRating(arr){
//   var directorFilms = arr.filter(function(directorFilm,index){
//     return directorFilm.Director === "Christopher Nolan";
//   })

//   var totaldirectorFilms = directorFilms.length;

//   var totalPoint = arr.reduce(function(point,index){
//     return point + Number(index.imdbRating)
//   }, 0)
//   return totalPoint/totaldirectorFilms
// }


// // Expected results
// console.log(calculateRating(watchList))

// Array.prototype.reduce2 = function(callback, result){
//     let i = 0
//     if(arguments.length < 2){           // kiểm tra hàm xem có đối số thứ hai hay ko ,vd : nếu có là 0 , biến lữu trữ là total sẽ bằng 0,và 
//                                             //i sẽ bắt đầu băng
//         i = 1 
//         result = this[0]
//     }
//     for(; i < this.length; i++){
//         result = callback(result, this[i], i, this)
//     }
//     return result                       //return cái gì thì lưu trữ cái đó
// }
// var arr = [1,2];                             //đầu sẽ xét xem có đối số thử hai ko , nếu có thì sẽ xét i = 0 , xét vào trong vòng for 
//                                             // trả về lại function ban đầu với các đối số callback(0 ,1,1,arr) , cứ như thế i++ => ;xét tiếp từ i = 1
//                                             //và lại trả về result = callback(1,2,2,arr)  tùy vào để bài là GT lữ trữ + với GT hiện thì kq sẽ khác nhau
// var result = arr.reduce2(function(total,number){
//     return number + total
// },0)
// console.log(result)
//   reduce 
//1. Ứng dụng với số , là tính được tổng của các object trong mảng , vvv
// 2. Ứng dụng với chữ là có thể lấy đc các phần tử mình muốn trong mỗi arr, object từ trong mảng lớn 





// 115
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];

// function arrToObj(arr){             //ở đây ta sẽ lấy các phần tử là  'sơn đặng ' và 18 ra , rồi return lại với reduce với i = 1,và = 0
//     var reduce = arr.reduce(function(total,index){
//         return total.concat(index[1])
//     }, [])
//     // return {name :reduce[0],age:reduce[1]}
//     return reduce
// }
// console.log(arrToObj(arr))

//Callback

// function sumCb(a, b) {
//     return a + b;
// };
// function subCb(a, b) {
//     return a - b;
// };
// function multiCb(a, b) {
//     return a * b;
// };
// function divCb(a, b) {
//     return a / b;
// };

// function caculate(a, b, cb) {
//     return cb(a, b);
// }

// console.log(caculate(1, 2, sumCb))
// console.log(caculate(1, 2, subCb))
// console.log(caculate(1, 2, multiCb))
// console.log(caculate(3, 1, divCb))

// Array.prototype.myMap = function(callback){
//     var Output = [], arraylength = this.length;


//     for( var i = 0; i < arraylength ; i++ ){
//        var result= callback(this[i],i)
//        Output.push(result)
//     }
//     return  Output
// }
// var numbers = [1,2,3]

// courses.map2(function(course){
//     console.log(course)
// })

// var result = console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]
//  console.log(numbers.myMap(function (number, index) {
//         return number * index;
//     })) // Output: [0, 2, 6]


// var courses = [                      forEach
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// courses.forEach(function(course, index, array){
//     console.log(course, index, array)           //course là phẩn tử của mảng đã cho , nó sẽ đi qua từng phần tử của mảng 
//                                                 // index là số thứ tử length của mảng 0,1,2,3
//                                                 //array là mảng 
//                                                 // cứ mỗi lần chạy thì callback sẽ trả lại 3 phần tử này lại về để xét tiếp
// })


// var courses = [                     //filter : Dùng để lọc các phần tử thỏa mãn Đk ,và trả về một mảng mới
//                                     // Vd : nó sẽ lọc các phần tử có số coin > 700 và trả về
//                                     // Khác với find thì find chỉ trả về phần tử đầu tiên thỏa mãn điều kiện 
//     {
//         name: 'Javascrip',
//         coin: 680
//     },
//     {
//         name: 'PHP',
//         coin: 860
//     },
//     {
//         name: 'Ruby',
//         coin: 720
//     },
// ]
// Array.prototype.filter2 = function(callback){
//     var Output = [];
//     for(var index in this ){
//         if(this.hasOwnProperty(index)){         // để ko cho duyệt qua filter2
//            var result = callback(this[index],index, this)
//            if(result){
//             Output.push(this[index]);
//            }
//         }       
//     }
//     return Output
// }
// var filterCourse = courses.filter2(function(course,index,arr){
//     return course.coin > 700;
// })
// console.log(filterCourse)


// var courses = [
//             {
//                 name: 'Javascrip',
//                 coin: 680,
//                  isFinish:true
//             },
//             {
//                 name: 'PHP',
//                 coin: 860,
//                 isFinish: true
//             },
//             {
//                 name: 'Ruby',
//                 coin: 720,
//                  isFinish: true
//             }
// ]


// Array.prototype.some2 = function(callback){                              //some : cho các bạn biến là có tối thiểu 1 phần thỏa mãn trong mảng hay ko 
                                                                            // và trả về true or false
                                                                            //khác với every , every sẽ kt tất cả các ptu nếu thỏa mãn đk thì sẽ trả về true , 
                                                                            //chỉ cần 1 element ko thỏa mãn sẽ trả về false
                                                                            //một khi nó gặp element ko thỏa mãn nó sẽ ngừng ngay tại đó và trả về false    
//     for(var index in this ){
//         if(this.hasOwnProperty(index)){         // để ko cho duyệt qua some2
                // if(callback(this[index],index, this)){
                //     return true
                // }
//            }
//         }       
//     return false
//     }
// var result = courses.some2(function(course, index, array){
//     return course.isFinish
// });
// console.log(result)


// Array.prototype.every2 = function(callback){
//     var output = true;
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             var result = callback(this[index], index, this)
//             if(!result){
//                 output = false;
//                 break;
//             }
//         }
//     }
//     return output;
// }
// var result = courses.every2(function(course,index,array){
//     return course.isFinish
// });
// console.log(result)


// var productsListElement = document.getElementsByClassName('products-list')
// console.log(productsListElement)
// var firstProductElement = document.querySelector('.product:first-child')
// console.log(firstProductElement)
// var buttonElements = document.getElementsByTagName('button')
// console.log(buttonElements)

// var headingElemet = document.querySelector('h1');
// headingElemet.title = 'F8 - Học lập trình để đi làm';
// headingElemet.setAttribute('data-title','F8 - Học lập trình để đi làm');
// var aatribute = document.querySelector('a');
// aatribute.setAttribute('href','https://fullstack.edu.vn/')
// aatribute.setAttribute('target','_blank')

// var boxElement = document.querySelector('.box');

// boxElement.innerHTML = '<h1>New heaing</h1>';
// console.log(document.querySelector('h1').innerText)

// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']  

// function render(courses){
//     var result = courses.map(function(course){
//         return `<li>${course}</li>`
//     })
//     document.querySelector('.box').innerHTML = result.join('')
// }
// (render(courses))

// var courses =[
//     'duc','nga'
// ]   
// function render(courses){
//     var result = courses.map(function(course,index){
//         return `<li> ${course}</li>`
//     })
//     document.querySelector('.box').innerHTML = result.concat('')
// }
// render(courses)

// render(courses)
// // function render(html){
//     var ulElement = document.querySelector('ul');
//     ulElement.innerHTML = (html)
//     return document.querySelector('ul').innerText
// }

// render(`
//     <li>Khóa học HTML</li>
//     <li>Khóa học JS</li>
//     <li>Khóa học PHP</li>
// `)


// function hell(value, cb) {
//     cb(value);
// }

// // Không sử dụng Promise dẫn đến tạo ra callback hell 
// hell(1, function (valueFromA) {
//     hell(valueFromA + 1, function (valueFromB) {
//         hell(valueFromB + 1, function (valueFromC) {
//             hell(valueFromC + 1, function (valueFromD) {
//                 console.log(valueFromD + 1);
//             });
//         });
//     });
// });
// function viec1(){   
//     console.log('viec 1')
// }
// function viec2(){
//     console.log('viec 2')
// }
// var btn = document.getElementById('btn');
// btn.addEventListener('click',viec1)
// btn.addEventListener('click',viec2)
// setTimeout(function(){
//     btn.removeEventListener('click',viec2)
// },3000)

// var users = [
//     {
//         id:1,
//         name:'Do Nga'
//     },
//     {
//         id:2,
//         name:'Anh Duc'
//     }
// ]

// var comments = [
//     {
//         id:1,
//         user_id:1,
//         content:'Anh Duc oi'
//     },
//     {
//         id:2,
//         user_id:2,
//         content:'Anh day'
//     },
//     {
//         id:3,
//         user_id:1,
//         content:'Anh an com chua ?'
//     }
// ];

// function getComment(){                  //dùng để lấu user?id từ commnet
//     return new Promise (function(resolve){
//         setTimeout(function(){
//             resolve(comments)
//         },1000)
//     })
// }

// function getUsersByIds(userIds){            //từ comment dùng map để lấy đc các phần tử là user_id là số 1,2
//     return new Promise(function(resolve){       
//         var result = users.filter(function(user){       //ta dùng filter để xét các phần tử lấy đc từ userIds là 1,2 có có trong users ko, nếu có thì nó trả về cả object
//             return userIds.includes(user.id)            // dùng includes để xét xem trong phần tử lấy đc có value là id , có id : 1, id :2 có hay ko
//         })                                              //lọc ra nhưng id có trong list userIds 
//         setTimeout(function(){
//             resolve(result)                     //cho kq đúng để cho ra kq
//         },1000)
//     })
// }



// getComment()                //dùng map để nhặt ra id1,2 từ comment
//     .then(function(comments){
//         var userIds = comments.map(function(comment){
//             return comment.user_id
//         });
//         return getUsersByIds(userIds)           // vì là đang return promise nên dưới lại phải có .then
//         .then(function(users){
//             return {
//                 users: users,
//                 comments: comments
//             }
//         });
//     })
//     .then(function(data){
        
//         var commentBlock = document.getElementById('box');
//         var html = '';
//         data.comments.forEach(function(comment){
//             var user = data.users.find(function(user){
//                 return user.id === comment.user_id
//             });
//             html += `<li>${user.name}:${comment.content}</li>`;
//         });
//         commentBlock.innerHTML = html
//     })


// var postApi = 'https://jsonplaceholder.typicode.com/users'

// fetch(postApi)
//     .then(function(response){
//         return response.json();
//         //JSON.parse: JSON => Javascreip typeof
//     })
//     .then(function(posts){
//         var htmls = posts.map(function(post){
//             return `<li>
//             <h1>${post.name}</h1>
//             <h1>${post.username}</h1>
//             <h1>${post.email}</h1>
//             </li>`
//         })
//         document.getElementById('box').innerHTML = htmls
//     })
//     .catch(function(err){
//         console.log(err)
//     })


var postApi = 'https://jsonplaceholder.typicode.com/posts'
fetch(postApi)
    .then(function(response){
        return response.json()          //response.json() cái này là nó đã tự gọi promise và JSON.parenk cho mình 
                                    //và trả về Javascript typeof cho mình luôn r
    })
    .then(function(posts){
        var htmls = posts.map(function(post){
            return `<li>
            <h1>${post.id}<h1>
            <p>${post.title}<p>
            <p>${post.body}<p>     
            </li>`
        })
        document.getElementById('box').innerHTML = htmls
    })




