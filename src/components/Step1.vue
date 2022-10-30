<template>
    <v-app>
        <div class="main">
            <div class="menu-btn">
                <v-btn color="warning" elevation="2" class="btn-back" @click="onBack">Quay về</v-btn>
            </div>
            <h1>Bước 1: Chọn cấp độ chuẩn đầu ra</h1>

            <div class="step1">
                <img src="../assets/img/step1.png" alt="err">
                <div class="menu-btn">
                    <v-btn color="green darken-2" class="btn-back" style="color: white;" @click="onCreation">Sáng tạo</v-btn>
                    <v-btn color="success"  class="btn-back" @click="onEvaluate">Đánh giá</v-btn>
                    <v-btn color="green lighten-1"  class="btn-back" style="color: white;" @click="onAnalysis">Phân tích</v-btn>
                    <v-btn color="teal lighten-3"  class="btn-back" style="color: white;" @click="onApplication">Áp dụng</v-btn>
                    <v-btn color="blue lighten-1"  class="btn-back" style="color: white;" @click="onKnowledge">Hiểu biết</v-btn>
                    <v-btn color="primary"  class="btn-back" @click="onMemorize">Ghi nhớ</v-btn>
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
    }

    .menu-btn {
        display: grid ;
        margin-left: 10%;
        
        
    }

</style>