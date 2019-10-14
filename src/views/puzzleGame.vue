<template>
 <div class="box">
        <ul class="puzzle-wrap">
            <li 
                :class="{'puzzle': true, 'puzzle-empty': !puzzle}" 
                v-for="(puzzle, index) in puzzles"
                :key="puzzle"
                v-text="puzzle"
                @click="moveFn(index)"
            ></li>
        </ul>
        <button class="btn" @click="render">重置游戏</button>
    </div>
 
</template>

<script>
/**
 * 数字拼图游戏
 * 思路： 数组[1,2,3,4,5,6,7,8,9,10,11,12,131,4,15]随机排序,交换位置实现正序并闯关成功
 */
import testMinix from '@/mixins/index'
export default {
  name: 'puzzleGame',
  data () {
    return {
      puzzles: Array.from({ length: 15 }, (value, index) => index + 1) //组建数组里面值时1-15的数字
    }
  },
  mounted() {
    this.getData()
  },
  mixins: [testMinix],
  mounted() {
    this.render()
  },
  methods: {
      // 重置渲染
        render () {
            for (let i = 0; i < 14; i++) { //将数组中的数值位置随机分布
                let idx = Math.floor(Math.random() * i);
                [this.puzzles[idx], this.puzzles[i]] = [this.puzzles[i], this.puzzles[idx]];
            }
            this.puzzles.push('');
        },

        // 点击方块
        moveFn (index) {
            //获取点击位置及其上下左右的值
            let curVal = this.puzzles[index]; //获取当前点击的数值
            let leftVal = this.puzzles[index - 1];//获取当前点击的左边框的值
            let rightVal = this.puzzles[index + 1];//获取当前点击的右边框的值
            let topVal = this.puzzles[index - 4];//获取当前点击的上边框的值
            let bottomVal = this.puzzles[index + 4]//获取当前点击的下边框的值
            //与空的位置交换位置
            if (leftVal === '') { //用$set实现响应式的数据修改
                this.$set(this.puzzles, index - 1, curVal);
                this.$set(this.puzzles, index, '');
            } else if (rightVal === '') {
                this.$set(this.puzzles, index + 1, curVal);
                this.$set(this.puzzles, index, '');
            } else if (topVal === '') {
                this.$set(this.puzzles, index - 4, curVal);
                this.$set(this.puzzles, index, '');
            } else if (bottomVal === '') {
                this.$set(this.puzzles, index + 4, curVal);
                this.$set(this.puzzles, index, '');
            }
            this.passFn()
        },

        // 校验是否过关
        passFn () {
            if (this.puzzles[15] === '') {
                const newPuzzles = this.puzzles.slice(0, 15)
                const isPass = newPuzzles.every((e, i) => e === i + 1) //判断数值的位置是否正确
                if (isPass) {
                    alert ('恭喜，闯关成功！')
                }
            }
        }
  }
}
</script>

<style scoped>
    body {
        font-family: Arial, "Microsoft YaHei"; 
    }

    .box {
        width: 100%;
    }

    .puzzle-wrap {
        width: 100%;
        height: 400px;
        margin-bottom: 40px;
        padding: 0;
        background: #ccc;
        list-style: none;
    }

    .puzzle {
        float: left;
        width: 24%;
        height: 100px;
        line-height: 100px;
        font-size: 20px;
        text-align: center;
        color: #fff;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 4px;
        text-shadow: 1px 1px 1px #B9B4B4;
        background: #FFB6C1;
        cursor: pointer;
    }

    .puzzle-empty {
        background: #FF6A6A;
        box-shadow: inset 2px 2px 18px;
    }

    .btn {
        padding: 10px;
        border: none;
        border-radius: 5%;
        color: #fff;
    }
</style>
