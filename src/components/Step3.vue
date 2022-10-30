<template>
    <v-app>
        <div class="main">
            <h1>Bước 3: Mô tả những gì người học sẽ làm</h1>

            <div class="step3">
                <v-container fluid>
                    <v-textarea name="input-7-1" filled label="Nhập nội dung của bạn" auto-grow class="input-text" v-bind:value="text" v-on:keyup="text = $event.target.value">
                        
                    </v-textarea>
                </v-container>
            </div>

            <div class="menu-btn-st2">
                <div id="select" class="select">
                    <p>Vào cuối khóa học / mô-đun / bài học này, bạn sẽ có thể:</p>
                    <p>{{ describe }} {{text}}</p>

                </div>
                <v-btn color="warning" class="btn-back-st2" @click="onBack">Quay về</v-btn>
                <v-btn color="warning" id="next" class="btn-next" @click="addText">Tiếp tục</v-btn>
            </div>

        </div>
    </v-app>
</template>

<script>
export default {
    name: 'CompStep3',
    props: {
        describe: String
    },
    components: {
    },

    data() {
        return {
            text: '',
            message: '',
        }
    },

    methods: {
        onBack() {
            this.$emit("onBack")
        },

        addText() {
            if(this.text == "") {
                alert('Vui lòng nhập mô tả')
            }
            else {
                this.message = this.describe + " " + this.text
                this.$emit("onFinal", this.message)
            }
        }

    }
};
</script>

<style lang="css">
.step3 {
    background-color: white;
    height: 300px;
}

.select {
    margin-top: 20px;
    background-color: coral;
    height: 100px;
    width: 92.5%;
    position: absolute;
    padding: 20px;
}

.input-text {
    height: 300px;
}
</style>