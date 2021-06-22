<template>
  <div>
    <div class="params" v-if="Object.keys(params).length !== 0">
      <div class="rules">
        <table>
          <tr v-for="(iten,indey) in params.rules[0]" :key="indey">
            <td v-for="(iteo,indez) in iten" :key="indez">
              {{iteo}}
            </td>
          </tr>
        </table>
      </div>
      <div class="infos">
        <table>
          <tr v-for="(item,index) in params.infos" :key="index">
            <td>{{item.key}}</td>
            <td class="pink">{{item.value}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div v-else>
      暂无参数
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParams',
  props:{
    params:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.params{
  padding: 0 10px;
  font-size: 15px;
}
table{
  width: 100%;
  // border-bottom: 2px solid #ccc;
  border-collapse: collapse;
  tr{
    display: flex;
    width: 100%;
    border-bottom: 1px solid rgba(100,100,100,.2);
    padding: 15px 0;
  }
}
.rules{
  tr{
    display: flex;
    td{
      flex: 1;
    }
  }
}
.infos{
  td{
    min-width: 80px;
  }
}
.pink{
  color: var(--color-high-text);
}
</style>