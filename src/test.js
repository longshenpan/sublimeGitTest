// //对象的笛卡儿积组合
// var objMultiCartesian = function(list)  {
//     console.log("list",list);
//     //parent上一级索引;count指针计数
//     var point = {};
//     var result = {};
//     var pIndex = null;
//     var tempCount = 0;
//     var temp  = {value: 0 };
//     var tempkey = [];
//     //根据参数列生成指针对象
//     for(var index in list)
//     {
//         if(typeof list[index] == 'object')
//         {
//             point[index] = {'parent':pIndex,'count':0};
//             pIndex = index;
//         }
//     }
//     //单维度数据结构直接返回
//     if(pIndex == null)
//     {
//         return list;
//     }
//     //动态生成笛卡尔积
//     while(true)
//     {
//         for(var index in list)
//         {
//             tempCount = point[index]['count'];
//             temp[index] = list[index][tempCount];
//             tempkey.push(temp[index].name);

//         }
//         //压入结果数组
//         var key = tempkey.join("-");
//         result[key] = temp;
//         tempkey = [];
//         temp = {value: 0 };
//         //检查指针最大值问题
//         while(true)
//         {
//             if(point[index]['count']+1 >= list[index].length)
//             {
//                 point[index]['count'] = 0;
//                 pIndex = point[index]['parent'];
//                 if(pIndex == null)
//                 {
//                     return result;
//                 }
//                 //赋值parent进行再次检查
//                 index = pIndex;
//             }
//             else
//             {
//                 point[index]['count']++;
//                 break;
//             }
//         }
//     }
// }
  // var arr = "ABB";
  // if(2>1){
  //   arr = "BCC";
  //   let arr;
  //   console.log(arr);
  // }
  if(!("a" in window)){
    var a = 1;
  }
  alert(a);