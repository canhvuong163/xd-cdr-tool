<template>
    <v-app>
        <div class="main">
            <h1>Bước 2: Chọn một động từ</h1>

            <div class="step2">
                <v-btn color="green darken-2" class="btn-st2" style="color: white;" @click="onPlanning">Lập kế hoạch
                </v-btn>
                <v-btn color="green darken-2" class="btn-st2" style="color: white;" @click="onInvention">Phát minh</v-btn>
                <v-btn color="green darken-2" class="btn-st2" style="color: white;" @click="onComposed">Sáng tác
                </v-btn>
                <v-btn color="green darken-2" class="btn-st2" style="color: white;" @click="onDesign">Thiết kế</v-btn>
                <v-btn color="green darken-2" class="btn-st2" style="color: white;" @click="onBuild">Xây dựng
                </v-btn>
                <v-btn color="green darken-2" class="btn-st2" style="color: white;" @click="onSynthetic">Tổng hợp</v-btn>
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
    name: 'CompStep2Creation',

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

        onPlanning() {
            document.getElementById("select").style.display="block"
            this.describe = "Lập kế hoạch"
        },

        onInvention() {
            document.getElementById("select").style.display="block"
            this.describe = "Phát minh"
        },

        onComposed() {
            document.getElementById("select").style.display="block"
            this.describe = "Sáng tác"
        },

        onDesign() {
            document.getElementById("select").style.display="block"
            this.describe = "Thiết kế"
        },

        onBuild() {
            document.getElementById("select").style.display="block"
            this.describe = "Xây dựng"
        },

        onSynthetic() {
            document.getElementById("select").style.display="block"
            this.describe = "Tổng hợp"
        },

        onBack() {
            this.$emit("onBack")
        }
    }
};
</script>

<style lang="css">
</style>