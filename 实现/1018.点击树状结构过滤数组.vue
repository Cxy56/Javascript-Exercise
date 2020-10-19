<template>
  <div>
    <div class="main-wrap" v-for="item in listTreeData" :key="item.codeKey">
      <span style="color: red;margin-right: 10px">{{item.codeValue}}</span>

      <div v-if="item.codeSon" class="second-wrap">
        <div v-for="child in item.codeSon" :key="child.codeKey" @click="selectSencond(item, child)" style="margin-right: 10px">
          <span :style="{color: activeKey === child.codeKey ? 'green' : 'pink'}">{{child.codeValue}}</span>

          <div v-if="child.codeSon && activeKey === child.codeKey">
            <div v-for="son in child.codeSon" :key="son.codeKey" @click.stop="selectSon(item, child, son)">
              <span :style="{color: sonActiveKey === son.codeKey ? 'green' : 'purple'}">{{son.codeValue}}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeKey: '', // 第二层选中的key,控制对应第三层的显示
      sonActiveKey: '', // 第三层选中的key
      listTreeData: [{
        codeKey: 'szColumn',
        codeSon: [{
          codeKey: 'zCA',
          codeSon: [],
          codeValue: '栏目A'
        },
        {
          codeKey: 'szCB',
          codeSon: [],
          codeValue: '栏目B'
        }
        ],
        codeValue: '栏目'
      },
      {
        codeKey: 'szCourseContent',
        codeSon: [
          {
            codeKey: 'szCCA',
            codeSon: [
              {
                codeKey: 'szCCAA',
                codeSon: [],
                codeValue: '课程内容A-A'
              },
              {
                codeKey: 'szCCAB',
                codeSon: [],
                codeValue: '课程内容A-B'
              }
            ],
            codeValue: '课程内容A'
          },
          {
            codeKey: 'szCCB',
            codeSon: [],
            codeValue: '课程内容B'
          }
        ],
        codeValue: '课程内容'
      }]
    }
  },
  methods: {
    // 第二层的点击
    selectSencond (item, child) {
      // 防止重复点击
      if (this.activeKey === child.codeKey) return
      this.activeKey = child.codeKey
      this.sonActiveKey = ''
      this.finalArray(item, child)
    },
    // 第三层的点击
    selectSon (item, child, son) {
      console.log('selectSon====son', son.codeValue)
      // 防止重复点击
      if (this.sonActiveKey === son.codeKey) return
      this.sonActiveKey = son.codeKey
      this.finalArray(item, child, son)
    },
    // 过滤数组，保存最终选中的数组结构
    finalArray (parent, child, son) {
      let res = []
      let newItem
      this.listTreeData.forEach(item => {
        if (item.codeKey === parent.codeKey) {
          // 此处深拷贝，不影响原数组
          newItem = this.deepCopy(item)
          newItem.codeSon = item.codeSon.filter(childItem => childItem.codeKey === child.codeKey)
        }
      })

      if (son) {
        if (newItem.codeSon[0].codeSon) {
          // 同样为了不破坏原数组
          let temp = this.deepCopy(newItem.codeSon)
          temp[0].codeSon = temp[0].codeSon.filter(sonItem => sonItem.codeKey === son.codeKey)
          newItem.codeSon = []
          newItem.codeSon.push(temp)
        }
      }
      console.log('newItem', newItem)
      res.push(newItem)
      // !! res就是最终过滤出来的选中的结果
    },
    // 数组或对象的深拷贝
    deepCopy (obj) {
      let res = Array.isArray(obj) ? [] : {}
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          res[key] = typeof obj[key] === 'object' ? this.deepCopy(obj[key]) : obj[key]
        }
      }
      return res
    }
  }
}
</script>
<style>
.main-wrap{
  line-height: 2;
  font-size: 20px;
  display: flex;
}
.second-wrap {
  display: flex;
}
</style>
