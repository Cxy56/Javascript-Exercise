<template>
  <div>
    <div class="main-wrap" v-for="(item, index) in listTreeData" :key="item.codeKey">
      <span style="color: red;margin-right: 10px">{{item.codeValue}}</span>

      <div v-if="item.codeSon" class="second-wrap">
        <div v-for="child in item.codeSon" :key="child.codeKey" @click="selectSencond(index, item, child)" style="margin-right: 10px">
          <span :style="{color: sensondActiveArr[index] && sensondActiveArr[index].activeKey === child.codeKey ? 'green' : 'pink'}">{{child.codeValue}}</span>

          <div v-if="child.codeSon && sensondActiveArr[index] && sensondActiveArr[index].activeKey === child.codeKey">
            <div v-for="(son, order) in child.codeSon" :key="son.codeKey" @click.stop="selectSon(index, item, child, son, order)">
              <span :style="{color: sensondActiveArr[index].son && sensondActiveArr[index].son[order] === son.codeKey ? 'green' : 'purple'}">{{son.codeValue}}</span>
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
      sensondActiveArr: [], // 最终保存选中结果的数组，对应index { activeKey: '', son: []}
      selectResult: [],
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
            codeSon: [{
              codeKey: 'szCCBA',
              codeSon: [],
              codeValue: '课程内容B-A'
            },
            {
              codeKey: 'szCCBB',
              codeSon: [],
              codeValue: '课程内容B-B'
            }],
            codeValue: '课程内容B'
          }
        ],
        codeValue: '课程内容'
      }]
    }
  },
  methods: {
    // 最终效果图https://cdn.hhdd.com/frontend/as/i/2007030f-94e8-55a0-949d-479a03d38311.png
    // 第二层的点击
    selectSencond (index, item, child) {
      // 防止重复点击
      console.log(index)
      if (this.sensondActiveArr[index] && this.sensondActiveArr[index].activeKey === child.codeKey) return

      if (this.sensondActiveArr[index]) {
        this.sensondActiveArr.splice(index, 1, { activeKey: child.codeKey })
      } else {
        this.$set(this.sensondActiveArr, index, { activeKey: child.codeKey })
      }
      console.log(this.sensondActiveArr)
    },
    // 第三层的点击
    selectSon (index, item, child, son, order) {
      console.log('selectSon====son', son.codeValue)
      // 防止重复点击
      if (this.sensondActiveArr[index].son && this.sensondActiveArr[index].son[order] === son.codeKey) return
      this.$set(this.sensondActiveArr[index], 'son', [])
      this.$set(this.sensondActiveArr[index].son, order, son.codeKey)
      console.log(this.sensondActiveArr)
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
