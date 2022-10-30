<template>
    <v-app>
        <div class="main">
            <h1>Bước 2: Chọn một động từ</h1>

            <div class="step2">
                <v-btn color="primary" class="btn-st2" style="color: white;" @click="onDescribe">Mô tả
                </v-btn>
                <v-btn color="primary" class="btn-st2" style="color: white;" @click="onSetName">Đặt tên</v-btn>
                <v-btn color="primary" class="btn-st2" style="color: white;" @click="onSearch">Tìm kiếm
                </v-btn>
                <v-btn color="primary" class="btn-st2" style="color: white;" @click="onListed">Liệt kê</v-btn>
                <v-btn color="primary" class="btn-st2" style="color: white;" @click="onContact">Liên hệ
                </v-btn>
                <v-btn color="primary" class="btn-st2" style="color: white;" @click="onPresent">Trình bày</v-btn>
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
    name: 'CompStep2Memorize',

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

        onSetName() {
            document.getElementById("select").style.display="block"
            this.describe = "Đặt tên"
        },

        onDescribe() {
            document.getElementById("select").style.display="block"
            this.describe = "Mô tả"
        },

        onSearch() {
            document.getElementById("select").style.display="block"
            this.describe = "Tìm kiếm"
        },

        onListed() {
            document.getElementById("select").style.display="block"
            this.describe = "Liệt kê"
        },

        onContact() {
            document.getElementById("select").style.display="block"
            this.describe = "Liên hệ"
        },

        onPresent() {
            document.getElementById("select").style.display="block"
            this.describe = "Trình bày"
        },

        onBack() {
            this.$emit("onBack")
        }
    }
};
</script>

<style lang="css">
.step2 {
    background-color: white;
    height: 300px;
}

.btn-st2 {
    width: 150px;
    margin: 20px;
}

.btn-next {
    width: 100px;
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
}

.btn-back-st2 {
    width: 100px;
    margin-top: 50px;
    margin-right: 10px;
    margin-left: auto;
}

.menu-btn-st2 {
    display: flex;
}

.select {
    margin-top: 20px;
    background-color: chartreuse;
    height: 100px;
    width: 92.5%;
    position: absolute;
    padding: 20px;
}
</style>