<template>
    <v-app>
        <div class="main">
            <h1>Bước 2: Chọn một động từ</h1>

            <div class="step2">
                <v-btn color="blue lighten-1" class="btn-st2" style="color: white;" @click="onExplain">Giải thích
                </v-btn>
                <v-btn color="blue lighten-1" class="btn-st2" style="color: white;" @click="onCompare">So sánh</v-btn>
                <v-btn color="blue lighten-1" class="btn-st2" style="color: white;" @click="onDiscussion">Thảo luận
                </v-btn>
                <v-btn color="blue lighten-1" class="btn-st2" style="color: white;" @click="onGuess">Dự đoán</v-btn>
                <v-btn color="blue lighten-1" class="btn-st2" style="color: white;" @click="onSummary">Tóm tắt
                </v-btn>
                <v-btn color="blue lighten-1" class="btn-st2" style="color: white;" @click="onRewrite">Viết lại</v-btn>
            </div>

            <div class="menu-btn-st2">
                <div id="select" class="select" style="display: none;">
                    <p>Vào cuối khóa học / mô-đun / bài học này, bạn sẽ có thể:</p>
                    <strong>{{describe}}...</strong>
                
                </div>
                <v-btn color="warning" class="btn-back-st2" @click="onBack">Quay về</v-btn>
                <v-btn color="warning" id="next" class="btn-next" @click="onNext">Tiếp tục</v-btn>
            </div>
        </div>
    </v-app>
</template>

<script>
export default {
    name: 'CompStep2Knowledge',

    components: {
    },

    data() {
        return {
            describe: '', 
        }
    },

    methods: {
        onNext() {
            if(document.getElementById("select").style.display == "none") {
                alert('vui lòng chọn một động từ để tiếp tục')
            }
            else {
                this.$emit("onNext", this.describe)
            }
        },

        onExplain() {
            document.getElementById("select").style.display="block"
            this.describe = "Giải thích"
        },

        onCompare() {
            document.getElementById("select").style.display="block"
            this.describe = "So sánh"
        },

        onDiscussion() {
            document.getElementById("select").style.display="block"
            this.describe = "Thảo luận"
        },

        onGuess() {
            document.getElementById("select").style.display="block"
            this.describe = "Dự đoán"
        },

        onSummary() {
            document.getElementById("select").style.display="block"
            this.describe = "Tóm tắt"
        },

        onRewrite() {
            document.getElementById("select").style.display="block"
            this.describe = "Viết lại"
        },

        onBack() {
            this.$emit("onBack")
        }
    }
};
</script>

<style lang="css">
</style>