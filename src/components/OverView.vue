<template>
    <v-app>
        <div class="main">
            <h1>Tổng quan về công cụ</h1>

            <div class="menu">
                <v-btn color="primary" elevation="2" class="btn" @click="about">Giới thiệu</v-btn>
                <v-btn color="primary" elevation="2" class="btn" @click="examols">Ví dụ</v-btn>
                <v-btn color="primary" elevation="2" class="btn" @click="instructions">Hưỡng dẫn</v-btn>
            </div>

            <div class="contentover">
                <div id="firts">
                    <p>Nhấp vào các Tabs để biết thông tin quan trọng cho việc sử dụng công cụ.</p>
                    <p>Nhấp vào <span style="color: green;">BẮT ĐẦU</span> khi bạn đã sẵn sàng!</p>
                </div>

                <div id="about" style="display: none;">
                    <h2>Giới thiệu về công cụ xây dựng chuẩn đầu ra</h2>
                    <p></p>
                </div>

                <div id="exampls" style="display: none;">
                    <h2>Ví dụ về công cụ xây dựng chuẩn đầu ra</h2>
                    <p></p>
                </div>

                <div id="instructions" style="display: none;">
                    <h2>Hưỡng dẫn về công cụ xây dựng chuẩn đầu ra</h2>
                    <p></p>
                </div>
            </div>

            <div class="menu-btn">
                <v-btn color="success" elevation="2" @click="onBegin" class="btn-start">Bắt đầu</v-btn>
            </div>
        </div>
    </v-app>
</template>

<script>
export default {
    name: 'CompOverView',

    components: {
    },

    data() {
        return {

        }
    },

    methods: {
        onBegin () {
            this.$emit("onBegin")
        },

        begin() {
            alert('Đi thôi')
        },

        about() {
            document.getElementById("firts").style.display = "none"
            document.getElementById("exampls").style.display = "none"
            document.getElementById("instructions").style.display = "none"
            document.getElementById("about").style.display = "block"
        },

        examols() {
            document.getElementById("firts").style.display = "none"
            document.getElementById("instructions").style.display = "none"
            document.getElementById("about").style.display = "none"
            document.getElementById("exampls").style.display = "block"
        },

        instructions() {
            document.getElementById("firts").style.display = "none"
            document.getElementById("about").style.display = "none"
            document.getElementById("exampls").style.display = "none"
            document.getElementById("instructions").style.display = "block"
        }
    }
};
</script>

<style lang="css">
.main {
    position: relative;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: thin solid rgba(84, 84, 87, 0.25);
    background-color: azure;
    height: 100%;
    width: 100%;
}

.menu {
    display: flex;
    align-items: center;
}

.btn {
    width: 100px;
    margin-right: 20px;
    margin-top: 20px;
}

.btn-start {
    width: 100px;
    margin-top: 20px;
    margin-left: auto;
}

.contentover {
    margin-top: 20px;
    background-color: white;
    height: 300px;
    padding: 20px;
}
</style>