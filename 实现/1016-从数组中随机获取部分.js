// 考虑到性能问题，如何快速从一个巨大的数组中随机获取部分元素 
/*
注意力放在两点：
1，一是针对结果，也就是最终结果，我只要100个随机的不重复的结果。那就只随机一个数字然后剔除掉随机范围，1000，999，998······一直到900为止。
2，二是针对随机数，毕竟是数组，index对应的就是0-999。我着重于随机出0-999内100个不同的随机数即可，随机一次，假设有十个重复，那就直接把90个没重复的剔除掉0-999范围，然后继续随机筛选，一直到有100个随机不同的数，也就是100个不同的index值，去1000个人员里面对应找出即可
*/

// 我倾向于扔到集合(Set)里面做，有就跳过，没有就add
const MAXIMUM = 10;
const UID_COUNT = 100000
function random_with_set(){
    let set = new Set();
    console.log(set.size)
    while(set.size < MAXIMUM){
      let tmp = parseInt(Math.random()*UID_COUNT, 10);

      if(set.has(tmp)) continue;
      set.add(tmp);
    }

    return Array.from(set);
}

console.log(random_with_set())