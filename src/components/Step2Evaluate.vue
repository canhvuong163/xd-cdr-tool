<template>
    <v-app>
        <div class="main">
            <h1>Bước 2: Chọn một động từ</h1>
            <p class="font-white">Chọn một động từ theo chiều nhận thức <strong>Đánh giá</strong> phù hợp với chuẩn đầu ra.</p>

            <div class="step2">
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onWatchLightning">Xem sét
                </v-btn>
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onEvaluate">Đánh giá</v-btn>
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onPrioritize">Xếp ưu tiên
                </v-btn>
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onOffer">Đề xuất</v-btn>
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onRating">Phân hạng
                </v-btn>
            </div>
            <div id="select" class="select" style="display: none;">
                <p>Tại thời điểm kết thúc khóa học/mô -đun, bài học người học có thể:</p>
                <strong>{{ describe }}...</strong>

            </div>
            <div class="menu-btn-st2">

                <v-btn color="warning" class="btn-back-st2" @click="onBack">Quay về</v-btn>
                <v-btn color="warning" id="next" class="btn-next" @click="onNext">Tiếp tục</v-btn>
            </div>
        </div>
    </v-app>
</template>

<script>
export default {
    name: 'CompStep2Evaluate',

    components: {
    },

    data() {
        return {
            describe: '',
        }
    },

    methods: {
        onNext() {
            if (document.getElementById("select").style.display == "none") {
                alert('vui lòng chọn một động từ để tiếp tục')
            }
            else {
                this.$emit("onNext", this.describe)
            }
        },

        onWatchLightning() {
            document.getElementById("select").style.display = "block"
            this.describe = "Xem sét"
        },

        onEvaluate() {
            document.getElementById("select").style.display = "block"
            this.describe = "Đánh giá"
        },

        onPrioritize() {
            document.getElementById("select").style.display = "block"
            this.describe = "Xếp ưu tiên"
        },

        onOffer() {
            document.getElementById("select").style.display = "block"
            this.describe = "Đề xuất"
        },

        onRating() {
            document.getElementById("select").style.display = "block"
            this.describe = "Phân hạng"
        },

        onBack() {
            this.$emit("onBack")
        }
    }
};
</script>

<style lang="css">

</style>