const PI = 3.14;
const getCircleArea = r => r * r * PI;

// module.exports = {
//     PI,
//     getCircleArea
// }

// default로 선언하면 객체 자체를 받아야한다.
// 없다면, import { getCircleAread } from './mathUtil'; 방식으로 접근해아한다.
export default{
  PI, getCircleArea
}