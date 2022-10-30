<template>
    <v-app>
        <div class="main">
            <h1>Dự án cuối cùng</h1>
            <p>Sao chép và dán những thứ sau vào tài liệu của bạn</p>

            <div class="final">
                <p>{{ message }}</p>
                <input type="hidden" id="testing-code" :value="message">
            </div>

            <div class="menu">
                <v-btn color="primary" elevation="2" class="btn-final" @click.stop.prevent="copy">Sao chép đến màn hình
                </v-btn>
                <v-btn color="primary" elevation="2" class="btn-final" @click="onBack">Tạo dự án mới</v-btn>
            </div>



        </div>
    </v-app>
</template>

<script>
export default {
    name: 'CompFinal',
    props: {
        message: String
    },
    components: {
    },

    data() {
        return {

        }
    },

    methods: {
        copy() {
            let codeToCopy = document.querySelector('#testing-code')
            codeToCopy.setAttribute('type', 'text')
            codeToCopy.select();

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                alert('Sao chép thành công! ' + msg);
            } catch (err) {
                alert('Lỗi rồi, sao chép không thành công!');
            }

            codeToCopy.setAttribute('type', 'hidden')
            window.getSelection().removeAllRanges()

        },

        onBack() {
            this.$emit("onBack")
        }
    }
};
</script>

<style lang="css">
.final {
    height: 300px;
    background-color: white;
    padding: 20px;
}

.btn-final {
    width: 250px;
    margin: 10px;
}
</style>