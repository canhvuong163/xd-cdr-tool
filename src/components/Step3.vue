<template>
    <v-app>
        <div class="main">
            <div class="font-white">
            <h1>Bước 3: Mô tả chuẩn đầu ra</h1>
            <p>Mong muốn chuẩn đầu ra một cách hoàn thiện? Đây thường là một danh từ hoặc cụm danh từ. Hãy chắc chắn
                rằng mô tả chuẩn đầu ra đạt mức độ mong muốn hoặc mức độ hiệu suất có thể chấp nhận được.</p>
            <p>Khi bạn hài lòng với chuẩn đầu ra, hãy nhấn vào <span style="color: orange">TIẾP TỤC</span>.</p>
        </div>

            <div class="step3">
                
                    <v-textarea name="input-7-1" filled label="Nhập nội dung của bạn" auto-grow class="input-text"
                        v-bind:value="describe" v-on:keyup="text = $event.target.value">
                    </v-textarea>
                
            </div>
            <div id="select" class="select">
                <p>Tại thời điểm kết thúc khóa học/mô -đun, bài học người học có thể:</p>
                <p>{{ text }}</p>

            </div>
            <div class="menu-btn-st2">
                <v-btn color="warning" class="btn-back-st2" @click="onBack">Quay về/ Back</v-btn>
                <v-btn color="warning" id="next" class="btn-next" @click="addText">Tiếp tục/ Next</v-btn>
            </div>

        </div>
    </v-app>
</template>

<script>
export default {
    name: 'CompStep3',
    props: {
        describe: String,
        databack: String
    },
    components: {
    },

    data() {
        return {
            text: '',
            message: '',
            arrCdr: []
        }
    },

    methods: {
        onBack() {
            this.$emit("onBack", this.databack)
        },

        addText() {
            if (this.text == "") {
                alert('Vui lòng nhập mô tả')
            }
            else {
                this.message = this.text
                this.$emit("onFinal", this.message)
            }
        }

    }
};
</script>

<style lang="css">
.step3 {
    background-color: white;
    height: auto;
}

.input-text {
    height: auto;
    border-radius: 0.5rem;
}
</style>