<template>
    <v-app>
        <div class="main">
            <h1>Hoàn thành chuẩn đầu ra - Complete the learning outcome </h1>
            <p class="font-white">Sao chép và nhúng chuẩn đầu ra đã hoàn thành vào tài liệu của Quý Thầy/Cô - Coppy the learning outcome and paste it to your document.</p>
            

            <div class="final">
                <p>{{ message }}</p>
                <input type="hidden" id="testing-code" :value="message">
            </div>

            <div class="menu">
                <v-btn color="primary" elevation="2" class="btn-final" @click.stop.prevent="copy">Sao chép
                </v-btn>
                <v-btn color="primary" elevation="2" class="btn-final" @click="onBack">Tạo mới</v-btn>
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
    height: auto;
    background-color: white;
    padding: 20px;
    border-radius: 0.5rem;
}

.btn-final {
    width: 100px;
    margin: 20px 40px;
    position: relative;
}
</style>