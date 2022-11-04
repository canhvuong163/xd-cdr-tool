<template>
    <v-app>
        <div class="main">
            <h1>Bước 2: Chọn một động từ</h1>
            <p class="font-white">Chọn một động từ theo chiều nhận thức <strong style="color: orange;">PHÂN TÍCH</strong> phù hợp với chuẩn đầu ra.</p>

            <div class="step2">
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onPhanbiet">Phân biệt</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onTochuc">Tổ chức</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onLienhe">Liên hệ</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onSosanh">So sánh</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onDoichieu">Đối chiếu</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onKiemtra">Kiểm tra</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onThunghiem">Thử nghiệm</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onDatcauhoi">Đặt câu hỏi</v-btn>
               

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
    name: 'CompStep2Analysis',

    components: {
    },

    data() {
        return {
            describe: '',
            dataBack: ''
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

        onPhanbiet() {
            document.getElementById("select").style.display = "block"
            this.describe = "Phân biệt"
        },

        onTochuc() {
            document.getElementById("select").style.display = "block"
            this.describe = "Tổ chức"
        },

        onLienhe() {
            document.getElementById("select").style.display = "block"
            this.describe = "Liên hệ"
        },

        onSosanh() {
            document.getElementById("select").style.display = "block"
            this.describe = "So sánh"
        },

        onDoichieu() {
            document.getElementById("select").style.display = "block"
            this.describe = "Đối chiếu"
        },

        onKiemtra() {
            document.getElementById("select").style.display = "block"
            this.describe = "Kiểm trea"
        },

        onThunghiem() {
            document.getElementById("select").style.display = "block"
            this.describe = "thử nghiệm"
        },

        onDatcauhoi() {
            document.getElementById("select").style.display = "block"
            this.describe = "Đặt câu hỏi"
        },

        onBack() {
            this.$emit("onBack")
        }
    }
};
</script>

<style lang="css">

</style>