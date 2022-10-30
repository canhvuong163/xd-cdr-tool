<template>
    <v-app>
        <div class="main">
            <div class="menu-btn">
                <v-btn color="warning" elevation="2" class="btn-back" @click="onBack">Quay về</v-btn>
            </div>
            <div class="font-white">
                <h1>Bước 1: Chọn cấp độ chuẩn đầu ra</h1>
                <p>Đây là các cấp độ tương ứng với mức độ phức tạp và cụ thể của một chuẩn đầu ra. Nhấn vào các nút thông tin để xem mô tả của từng cấp độ.</p>
                <p>Khi bạn đã chọn một cấp độ thích hợp. Hãy nhấn vào nút để xem danh sách các động từ phân loại thích hợp cho cấp độ đã chọn</p>
            </div>
            <div class="step1">
                <img src="../assets/img/step1.png" alt="err" class="img">
                <div class="menu-btn-st1">
                    <v-btn color="#008037" class="btn-back" style="color: white;" @click="onCreation">Sáng tạo</v-btn>
                    <v-btn color="#03989e"  class="btn-back" style="color: white;" @click="onEvaluate">Đánh giá</v-btn>
                    <v-btn color="#008037"  class="btn-back" style="color: white;" @click="onAnalysis">Phân tích</v-btn>
                    <v-btn color="#03989e"  class="btn-back" style="color: white;" @click="onApplication">Áp dụng</v-btn>
                    <v-btn color="#008037"  class="btn-back" style="color: white;" @click="onKnowledge">Hiểu biết</v-btn>
                    <v-btn color="#03989e"  class="btn-back" style="color: white;" @click="onMemorize">Ghi nhớ</v-btn>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>
export default {
    name: 'CompStep1',

    components: {
    },

    data() {
        return {

        }
    },

    methods: {
        onCreation() {
            this.$emit("onCreation")
        },

        onEvaluate() {
            this.$emit("onEvaluate")
        },

        onAnalysis() {
            this.$emit("onAnalysis")
        },

        onApplication() {
            this.$emit("onApplication")
        },

        onKnowledge() {
            this.$emit("onKnowledge")
        },

        onMemorize() {
            this.$emit("onMemorize")
        },

        onBack() {
            this.$emit("onBack")
        }
    }
};
</script>

<style lang="css">
    .btn-back {
        width: 100px;
        margin-top: 20px;
        margin-left: auto;
    }

    .step1 {
        display: flex;
        border-radius: 0.5rem;
        background-color: white;
        padding: 20px;
        
    }

    .menu-btn-st1 {
        display: grid ;
        background-color: white;
        padding-right: 20px;
        
    }

    .menu-btn {
        display: grid ;
    }

    .img {
        max-width: 50%;
        max-height: 50%;
        border-radius: 0.5rem;
        
    }

    .font-white {
        color: white;
        
    }

</style>