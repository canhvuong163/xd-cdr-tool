<template>
    <v-app>
        <div class="main">
            <h1>Bước 2: Chọn một động từ</h1>
            <p class="font-white">Chọn một động từ theo chiều nhận thức <strong style="color: orange;">HIỂU</strong> phù hợp với chuẩn đầu ra.</p>

            <div class="step2">
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onPhanloai">Phân loại</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onMota">Mô tả</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onThaoluan">Thảo luận</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onGiaithich">Giải thích</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onXacdinh">Xác định</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onBaocao">Báo cáo</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onNhanbiet">Nhận biết</v-btn>
                <v-btn color="#008037" class="btn-st2" style="color: white;" @click="onLuachon">Lựa chọn</v-btn>
               
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
    name: 'CompStep2Knowledge',

    components: {
    },

    data() {
        return {
            describe: '',
            dataBack:'knowledge'
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

        onPhanloai() {
            document.getElementById("select").style.display = "block"
            this.describe = "Phân loại"
        },

        onMota() {
            document.getElementById("select").style.display = "block"
            this.describe = "Mô tả"
        },

        onThaoluan() {
            document.getElementById("select").style.display = "block"
            this.describe = "Thảo luận"
        },

        onGiaithich() {
            document.getElementById("select").style.display = "block"
            this.describe = "Giải thích"
        },

        onXacdinh() {
            document.getElementById("select").style.display = "block"
            this.describe = "Xác định"
        },

        onBaocao() {
            document.getElementById("select").style.display = "block"
            this.describe = "Báo cáo"
        },

        onNhanbiet() {
            document.getElementById("select").style.display = "block"
            this.describe = "Nhận biết"
        },

        onLuachon() {
            document.getElementById("select").style.display = "block"
            this.describe = "Lựa chọn"
        },

        onBack() {
            this.$emit("onBack")
        }
    }
};
</script>

<style lang="css">

</style>