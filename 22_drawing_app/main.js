const App = {
    template: `
    <canvas width="800" height="800" 
    id="canvas" 
    ref="canvas"
    @mousedown="handleMousedown"
    @mouseup="handleMouseup"
    @mousemove="handleMousemove"
    ></canvas>
    <div class="toolbox">
        <button id="decrease" @click="() => size--">-</button>
        <span id="size" @click="isInput=true">
            {{ isInput? '' : size }}
            <input type="text" v-model="size" v-if="isInput" @change="() => isInput = false"/>
        </span>
        <button id="increase" @click="() => size++">+</button>
        <input type="color" id="color" @change="(e) => color=e.target.value">
        <button id="clear" @click="() => ctx.reset()">X</button>
    </div>
    `,
    data() {
        return {
            size: 10,
            ctx: null,
            isPressed: false,
            x: undefined,
            y: undefined,
            color: 'black',
            isInput: false,
        }
    },
    methods: {
        drawCircle(x, y) {
            // x, y: 圆心坐标
        
            this.ctx.beginPath();
            this.ctx.arc(x, y, this.size, 0, Math.PI * 2);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        },
        drawLine(x1, y1, x2, y2) {
            // x1, y1: 起点
            // x2, y2: 终点
        
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.strokeStyle = this.color;
            this.ctx.lineWidth = 2 * this.size;
            this.ctx.stroke();
        },
        handleMousedown(e) {
            this.isPressed = true;

            // 记录起点
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        handleMouseup() {
            this.isPressed = false;

            this.x = undefined;
            this.y = undefined;
        },
        handleMousemove(e) {
            if (this.isPressed) {
                // 当前鼠标位置
                const x2 = e.offsetX;
                const y2 = e.offsetY;
        
                // 以当前鼠标位置画圆
                // 再以上一次鼠标位置为起点，当前鼠标位置为终点，画直线
                this.drawCircle(x2, y2);
                this.drawLine(this.x, this.y, x2, y2);
        
                // 用变量记录当前鼠标位置
                this.x = x2;
                this.y = y2;
            }
        }
    },
    mounted() {
        this.ctx = this.$refs.canvas.getContext('2d');
    }
}

Vue.createApp(App).mount('#app')