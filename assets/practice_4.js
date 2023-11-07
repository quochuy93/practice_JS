var courses = [
  {
    id: 1,
    name: 'Javascript',
    price: 300,
  },
  {
    id: 2,
    name: 'HTML, CSS',
    price: 250,
  },
  {
    id: 3,
    name: 'Ruby',
    price: 50,
  },
  {
    id: 4,
    name: 'PHP',
    price: 400,
  },
  {
    id: 5,
    name: 'ReactJS',
    price: 500,
  },
  {
    id: 6,
    name: 'Ruby',
    price: 0,
  },
]

//? B1: Sắp xếp theo giá tiền từ lớn về bé từ mảng courses (trong github)
var new_course = courses.concat();
new_course.sort((a,b) => a.price>b.price?1:-1);
console.log(new_course);
//? B2: Tìm vị trí của khóa học đắt nhất
var x = new_course.length;
console.log(`The position of the most expensive class is: ${new_course[x-1].id}`)
//? B3: Tìm các khóa học có chứa chữ 'a' trong tên khóa học
var courseHaveA = courses.filter((course) => course.name.includes('a'));
console.log(courseHaveA);
//? B4: Dùng map biến đổi từng phần tử của mảng đưa vào thẻ chuỗi thẻ li bao gồm các thông tin: [số thứ tự]. [tên khóa học]: [Giá khóa học]
var change_course = courses.map((course) =>course.id + '.' + course.name +':' + course.price);
console.log(change_course);
//? B5: Tìm những người cả john và sara cùng follow
johnFollowers=['Tim','Matin','Sinestra','Mr.Bean','Kayle','Sara']
saraFollowers=['John','Matin','Kayle','Peter','Sinestra','Robin']
var bothfollower = [];
for (var i in johnFollowers) {
    if (saraFollowers.includes(johnFollowers[i])) {
        bothfollower.push(johnFollowers[i]);
    }
}
console.log(bothfollower);
