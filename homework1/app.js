/* /1) დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას. */
// და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
//ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.

//2)შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
//და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
//დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
//და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!

//3)შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში.

//4)შექმენით უკუმთვლელი ტაიმერი, რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
//გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!

//5)შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.

//6) დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
//კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით!!


//1
/*
const processNumbers = (num1, num2, calc) => {
 return calc(num1, num2) * 2;
}


const add = (num1, num2) => {
 return num1 + num2;
}

const multiply = (num1, num2) => {
 return num1 * num2;
}

const minus = (num1, num2) => {
 return num1 - num2;
}


const divid = (num1, num2) => {
 return num1 / num2;
}

console.log(processNumbers(20, 10, add));
console.log(processNumbers(20, 10, multiply));
console.log(processNumbers(20, 10, minus));
console.log(processNumbers(20, 10, divid));
 */

//2

/*
const isValidUser = (fname, password) => {
 if (fname !== "" && password !== "") {
  console.log(true);
 } else {
  console.log(false);
 }
};
isValidUser("", "")
isValidUser("wd", " qwd") */


//3

/* const fibonacci = (n) => {
 if (n === 1) {
  return 0;
 }
 if (n === 2) {
  return 1;
 }
 return (fibonacci(n - 1) + fibonacci(n - 2));


}

console.log(fibonacci(7)); */

4//


/* let counter = 10;
const getCounter = () => {
 let getInterval = setInterval(function () {
  counter--;

  console.log(counter);
  if (counter === 0) {
   clearInterval(getInterval);
   alert('the end');
  }
 }, 1000)
 return getInterval;
}

console.log(getCounter());


 */


/* const getAge = (dob,) => {
 const currYear = new Date(2024);
 const myAge = currYear - dob
 console.log(`i am ${myAge} years old`);
}

getAge(1999,)
 */

const array = ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშბათი', 'პარასკევი', 'შაბათი']

const getDay = () => {
 const curentDate = new Date("2024- 01 - 25")
 const day = array[curentDate.getDay()];
 console.log(day);
}

getDay()
