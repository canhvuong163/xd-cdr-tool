<template>
    <v-app>
        <div class="main">
            <h1>Bước 2: Chọn một động từ</h1>
            <p class="font-white">Chọn một động từ theo chiều nhận thức <strong style="color: orange;">SÁNG TẠO</strong> phù hợp với chuẩn đầu ra.</p>

            <div class="step2">
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onDanhgia">Đánh giá</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onTranhluan">Tranh luận</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onXacdinh">Xác định</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onLuachon">Lựa chọn</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onHotro">Hỗ trợ</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onPhebinh">Phê bình</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onCannhac">Cân nhắc</v-btn>
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
    name: 'CompStep2Creation',

    components: {
    },

    data() {
        return {
            describe: '',
            dataBack:'creation'
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

        onDanhgia() {
            document.getElementById("select").style.display = "block"
            this.describe = "Đánh giá"
        },

        onTranhluan() {
            document.getElementById("select").style.display = "block"
            this.describe = "Tranh luận"
        },

        onXacdinh() {
            document.getElementById("select").style.display = "block"
            this.describe = "Xác định"
        },

        onLuachon() {
            document.getElementById("select").style.display = "block"
            this.describe = "Lựa chọn"
        },

        onHotro() {
            document.getElementById("select").style.display = "block"
            this.describe = "Hỗ trợ"
        },

        onPhebinh() {
            document.getElementById("select").style.display = "block"
            this.describe = "Phê bình"
        },

        onCannhac() {
            document.getElementById("select").style.display = "block"
            this.describe = "Cân nhắc"
        },

        onBack() {
            this.$emit("onBack")
        }
    }
};
</script>

<style lang="css">

</style>