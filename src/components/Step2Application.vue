<template>
    <v-app>
        <div class="main">
            <h1>Bước 2: Chọn một động từ</h1>
            <p class="font-white">Chọn một động từ theo chiều nhận thức <strong style="color: orange;">ÁP DỤNG</strong> phù hợp với chuẩn đầu ra.</p>

            <div class="step2">
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onThuchien">Thực hiện</v-btn>
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onGiaiquyet">Giải quyết</v-btn>
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onSudung">Sử dụng</v-btn>
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onChungminh">Chứng minh</v-btn>
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onDiengiai">Diễn giải</v-btn>
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onVanhanh">Vận hành</v-btn>
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onLenlich">Lên lịch</v-btn>
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onPhacthao">Phác thảo</v-btn>
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
    name: 'CompStep2Application',

    components: {
    },

    data() {
        return {
            describe: '',
            dataBack: "application"
        }
    },

    methods: {
        onNext() {
            if (document.getElementById("select").style.display == "none") {
                alert('vui lòng chọn một động từ để tiếp tục')
            }
            else {
                this.$emit("onNext", this.describe)
                this.$emit("dataBack", this.dataBack)
            }
        },

        onThuchien() {
            document.getElementById("select").style.display = "block"
            this.describe = "Thực hiện"
        },

        onGiaiquyet() {
            document.getElementById("select").style.display = "block"
            this.describe = "Giải quyết"
        },

        onSudung() {
            document.getElementById("select").style.display = "block"
            this.describe = "Sử dụng"
        },

        onChungminh() {
            document.getElementById("select").style.display = "block"
            this.describe = "Chứng minh"
        },

        onDiengiai() {
            document.getElementById("select").style.display = "block"
            this.describe = "Diễn giải"
        },

        onVanhanh() {
            document.getElementById("select").style.display = "block"
            this.describe = "Vận hành"
        },

        onLenlich() {
            document.getElementById("select").style.display = "block"
            this.describe = "Lên lịch"
        },

        onPhacthao() {
            document.getElementById("select").style.display = "block"
            this.describe = "Phác thảo"
        },

        onBack() {
            this.$emit("onBack")
        }
    }
};
</script>

<style lang="css">

</style>