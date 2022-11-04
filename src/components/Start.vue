<template>
    <v-app>
        <div class="container">
            <div class="content">
                <h1>Công cụ xây dựng chuẩn đầu ra</h1>
                <p>Bộ công cụ này hỗ trợ Quý Thầy/Cô xây dựng chuẩn đầu ra một cách chính xác và ngắn gọn.</p>
                <v-btn @click="onStart">Bắt đầu dự án</v-btn>
            </div>
        </div>
    </v-app>
</template>

<script>
export default {
    name: 'CompStart',

    components: {
    },

    methods: {
        onStart() {
            this.$emit("onStart")
        }
    }
};
</script>

<style lang="css">
.container {
    height: 100%;
    width: 100%;
    color: white;
    background-color: #004aad;
}

.content {
    position: relative;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: thin solid rgba(84, 84, 87, 0.25);
    text-align: center;
    margin-top: 250px;
    background-color: rgba(0, 183, 255, 0.377);
}
</style>