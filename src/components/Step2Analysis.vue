<template>
    <v-app>
        <div class="main">
            <h1>Bước 2: Chọn một động từ</h1>

            <div class="step2">
                <v-btn color="green lighten-1" class="btn-st2" style="color: white;" @click="onDetermined">Xác định
                </v-btn>
                <v-btn color="green lighten-1" class="btn-st2" style="color: white;" @click="onInvestigate">Điều tra</v-btn>
                
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
    name: 'CompStep2Analysis',

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

        onDetermined() {
            document.getElementById("select").style.display="block"
            this.describe = "Xác định"
        },

        onInvestigate() {
            document.getElementById("select").style.display="block"
            this.describe = "Điều tra"
        },

        onBack() {
            this.$emit("onBack")
        }
    }
};
</script>

<style lang="css">
</style>