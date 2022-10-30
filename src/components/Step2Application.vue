<template>
    <v-app>
        <div class="main">
            <h1>Bước 2: Chọn một động từ</h1>

            <div class="step2">
                <v-btn color="teal lighten-3" class="btn-st2" style="color: white;" @click="onUse">Sử dụng
                </v-btn>
                <v-btn color="teal lighten-3" class="btn-st2" style="color: white;" @click="onComplete">Hoàn thành</v-btn>
                <v-btn color="teal lighten-3" class="btn-st2" style="color: white;" @click="onTest">Kiểm tra
                </v-btn>
                <v-btn color="teal lighten-3" class="btn-st2" style="color: white;" @click="onIllustration">Minh họa</v-btn>
                <v-btn color="teal lighten-3" class="btn-st2" style="color: white;" @click="onClassify">Phân loại
                </v-btn>
                <v-btn color="teal lighten-3" class="btn-st2" style="color: white;" @click="onHandle">Giải quyết</v-btn>
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
    name: 'CompStep2Application',

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

        onUse() {
            document.getElementById("select").style.display="block"
            this.describe = "Sử dụng"
        },

        onComplete() {
            document.getElementById("select").style.display="block"
            this.describe = "Hoàn thành"
        },

        onTest() {
            document.getElementById("select").style.display="block"
            this.describe = "Kiểm tra"
        },

        onIllustration() {
            document.getElementById("select").style.display="block"
            this.describe = "Minh họa"
        },

        onClassify() {
            document.getElementById("select").style.display="block"
            this.describe = "Phân loại"
        },

        onHandle() {
            document.getElementById("select").style.display="block"
            this.describe = "Giải quyết"
        },

        onBack() {
            this.$emit("onBack")
        }
    }
};
</script>

<style lang="css">
</style>