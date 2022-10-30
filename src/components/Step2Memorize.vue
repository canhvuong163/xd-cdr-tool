<template>
    <v-app>
        <div class="main">
            <h1>Bước 2: Chọn một động từ</h1>
            <p class="font-white">Chọn một động từ theo chiều nhận thức <strong>Ghi nhớ</strong> phù hợp với chuẩn đầu ra.</p>

            <div class="step2">
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onDescribe">Mô tả
                </v-btn>
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onSetName">Đặt tên</v-btn>
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onSearch">Tìm kiếm
                </v-btn>
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onListed">Liệt kê</v-btn>
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onContact">Liên hệ
                </v-btn>
                <v-btn color="#03989e" class="btn-st2" style="color: white;" @click="onPresent">Trình bày</v-btn>
            </div>
            <div id="select" class="select" style="display: none;">
                    <p>Tại thời điểm kết thúc khóa học/mô -đun, bài học người học có thể:</p>
                    <strong>{{describe}}...</strong>
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
    height: auto;
    border-radius: 0.5rem;
    padding: 30px;
}

.btn-st2 {
    width: 120px;
    margin: 10px;
}

.btn-next {
    width: 100px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
}

.btn-back-st2 {
    width: 100px;
    margin-top: 20px;
    margin-right: 10px;
    margin-left: auto;
}

.menu-btn-st2 {
    display: flex;
}

.select {
    position: relative;
    padding: 30px;
    margin-top: 10px;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: thin solid rgba(84, 84, 87, 0.25);
    background-color: rgb(117, 201, 166);
    height: auto;
    width: 100%;
}
</style>