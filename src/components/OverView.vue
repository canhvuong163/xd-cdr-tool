<template>
    <v-app>
        <div class="main">
            <h1>Tổng quan về công cụ</h1>

            <div class="menu">
                <v-btn color="primary" elevation="2" class="btn" @click="about">Giới thiệu</v-btn>
                <v-btn color="primary" elevation="2" class="btn" @click="examols">Ví dụ</v-btn>
                <v-btn color="primary" elevation="2" class="btn" @click="instructions">Hướng dẫn</v-btn>
            </div>

            <div class="contentover">
                <div id="firts">
                    <p>Nhấn vào các Tabs để biết thông tin quan trọng cho việc sử dụng công cụ.</p>
                    <p>Nhấn vào <span style="color: green;">BẮT ĐẦU</span> khi bạn đã sẵn sàng!</p>
                </div>

                <div id="about" style="display: none;">
                    <h2>Giới thiệu về công cụ xây dựng chuẩn đầu ra</h2>
                    <p>Trong bối cảnh giáo dục đại học ngày nay, Các trường Đại học, cao đẳng thay đổi phương pháp tiếp
                        cận từ mô hình dạy học dựa trên nội dung sang mô hình dạy học dựa trên năng lực. Mô hình này đòi
                        hỏi người dạy phải xây dựng chuẩn đầu ra môn học đo lường được, từ cơ sở đó thiết kế chương
                        trình dạy học phù hợp với năng lực đã đề ra. Ngoài ra, việc xây dựng chuẩn đầu ra đo lường được
                        đòi hỏi người dạy phải cập nhật các kiến thức về thiết kế chương trình đào tạo cũng như thiết kế
                        các hình thức dạy học và đánh giá phù hợp. Tuy nhiên, đa số người dạy khi áp dụng các lý thuyết
                        giáo dục để xây dựng chuẩn đầu ra vẫn còn gặp nhiều lỗi dẫn đến chuẩn đầu ra chưa thực sự phù
                        hợp. Chính vì lẽ đó Tôi và các công sự xây dựng bộ công cụ đo lường chuẩn đầu ra để hỗ trợ người
                        dạy xây dựng chuẩn đầu một cách hiệu quả.</p>
                </div>

                <div id="exampls" style="display: none;">
                    <h2>Ví dụ về công cụ xây dựng chuẩn đầu ra</h2>
                    <p>Công cụ xây dựng chuẩn đầu ra thường có ba yếu tố: động từ, chủ đề ( mô tả chuẩn đầu ra mong
                        muốn) và làm rõ thông tin. Bao gồm 6 cấp độ: </p>
                    <p><strong>1. Ghi nhớ (Remembering):</strong> Ghi nhớ là khả năng có thể nhắc lại các thông tin, kiến thức đã học.
                    </p>
                    <p><strong>2. Hiểu (Understanding):</strong> Hiểu là khả năng trình bày, giải thích các ý tưởng, khái niệm.</p>
                    <p><strong>3. Áp dụng (Applying):</strong> Áp dụng là khả năng vận dụng các thông tin, kiến thức đã học vào một tình
                        huống cụ thể.</p>
                    <p><strong>4. Phân tích (Analyzing):</strong> Phân tích là khả năng chia thông tin thành những phần nhỏ và chỉ ra mối
                        lien hệ của chúng tới tổng thể.</p>
                    <p><strong>5. Đánh giá (Evaluating):</strong> Đưa ra nhận định, phán quyết của bản thân đối với thông tin dựa tren
                        cac chuẩn mực, tiêu chi.</p>
                    <p><strong>6. Sáng tạo (Creating):</strong> Đây là cấp độ cao nhất của thang đo Bloom. Sáng tạo là khả năng ghép các
                        kiến thức, thông tin đã có lại với nhau để tạo thành một sản phẩm mới, thông tin mới, kiến thức
                        mới, ví dụ như thực hiện luận văn tốt nghiệp, nghiên cứu khoa học hoặc tạo ra mô hình, công thức
                        của một sản phẩm mới.</p>
                </div>

                <div id="instructions" style="display: none;">
                    <h2>Hướng dẫn về công cụ xây dựng chuẩn đầu ra</h2>
                    <p>Click vào <span style="color: green;">BẮT ĐẦU</span> để xây dựng một dự án. Hãy đọc kỹ tất cả các thông tin hưỡng dẫn sau:</p>
                    <p>Bước 1: Chọn cấp độ chuẩn đầu ra. </p>
                    <p>Bước 2: Chọn động từ liên quan. </p>
                    <p>Bước 3: Mô tả chuẩn đầu ra.</p>
                    <p>Công cụ sẽ hoàn thiện chuẩn đầu ra của bạn khi bạn hoàn thành các bước.</p>
                    <p>Dựa trên các lý thuyết trên, Tôi và các công sự đã xây dựng bộ công cụ ‘’Xây dựng chuẩn đầu ra ’’ hỗ
                        trợ Quý Thầy/Cô trong việc xây dựng chuẩn đầu ra một cách hiệu quả. Tôi mong rằng công cụ này sẽ
                        giúp quý Thầy/Cô tiết kiệm thời gian và đặc biệt là loại bỏ các sai xót trong quá trình xây
                        dựng.
                        Chúc Quý Thầy/Cô đầy năng lương, công tác tốt và luôn yêu nghề.
                    </p>
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
        onBegin() {
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
    background-color: #004aad;
    height: 100%;
    width: 100%;
}

.menu {
    display: flex;
    align-items: center;
    position: relative;
}

.btn {
    width: 100px;
    margin-right: auto;
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
    height: auto;
    padding: 20px;
    border-radius: 0.5rem;
}

h1 {
    color: white;
}
</style>