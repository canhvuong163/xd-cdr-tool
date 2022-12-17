<template>
    <v-app>
        <div class="main">
            <div class="font-white">
                <h1>Bước 1: Chọn cấp độ chuẩn đầu ra theo từng miền</h1>
                <p>Đây là các cấp độ tương ứng với mức độ phức tạp và cụ thể của một chuẩn đầu ra.
                    Khi bạn đã chọn một cấp độ thích hợp. Hãy nhấn vào nút cấp độ để xem danh sách các động từ phân loại
                    thích hợp cho cấp độ đã chọn</p>
            </div>
            <div class="menu">
                <v-btn color="primary" elevation="2" class="btn" @click="nhanthuc">Nhận thức</v-btn>
                <v-btn color="primary" elevation="2" class="btn" @click="kynang">Kỹ năng</v-btn>
                <v-btn color="primary" elevation="2" class="btn" @click="thaido">Thái độ</v-btn>
            </div>
            <div v-if="stylemien === 'nhanthuc'" class="step1">
                <!-- <div class="step1-1"> -->
                <img src="../assets/img/6capdomnt.png" alt="err" class="img">
                <div class="menu-btn-st1">
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onSangtao">Sáng tạo</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onDanhgia">Đánh giá</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onPhantich">Phân tích</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onApdung">Áp dụng</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onHieu">Hiểu</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onGhinho">Ghi nhớ</v-btn>
                </div>
                <!-- </div> -->
            </div>
            <div v-if="stylemien === 'kynang'" class="step1">
                <img src="../assets/img/6capdomkn.png" alt="err" class="img">
                <div class="menu-btn-st1">
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onSangtao1">Sáng tạo</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onThichung">Thích ứng</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onHoanthanhtd">Hoàn thành</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onKyxao">Kỹ xảo</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onPhanhoicohd">Phản hồi</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onThietlap">Thiết lập</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onNhanthuc">Nhận thức</v-btn>
                </div>
            </div>
            <div v-if="stylemien === 'thaido'" class="step1">
                <img src="../assets/img/6capdomtd.png" alt="err" class="img">
                <div class="menu-btn-st1">
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onCanhanhoa">Cá nhân hóa
                    </v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onTochuc">Tổ chức</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onNhangiatri">Nhận giá trị
                    </v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onPhanhoi">Phản hồi</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onTiepnhan">Tiếp nhận</v-btn>
                </div>
            </div>
            <div class="menu-btn">
                <v-btn color="warning" elevation="2" class="btn-back-1" @click="onBack">Quay về</v-btn>
            </div>
        </div>
    </v-app>
</template>

<script>
export default {
    name: 'CompStep1',
    props: {
    },
    
    components: {
    },

    data() {
        return {
            dataSend: [],
            stylemien: "nhanthuc",
            mien: '',
           
        }
    },

   beforeMount() {
    console.log(this.stylemien,"123")
   },

    methods: {
        nhanthuc() {
            this.stylemien = "nhanthuc"
        },

        kynang() {
            this.stylemien = "kynang"
        },

        thaido() {
            this.stylemien = "thaido"
        },
        //Mien nhan thuc
        onSangtao() {
            this.dataSend = ["Tích hợp", "Phát minh", "Chế tạo", "Điều hành", "Sửa đổi", "Lập kế hoạch", "Tạo ra", "Đề xuất",
             "Viết lại", "Tập hợp", "Kết hợp", "Sáng tác", "Xây dựng", "Sáng tạo", "Thiết kế", "Phát triển", "Đề ra"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Sáng tạo (Miền nhận thức)"
            this.$emit("mien", this.mien)
            //
        },

        onDanhgia() {
            this.dataSend = ["Nhận định", "Chứng minh", "Xếp hạng", "Lựa chọn", "Xác nhận", "Kiểm tra", "Định giá", "Tranh luận", "Quyết định",
                "Thuyết phục", "Bình phẩm", "Bình luận", "Biện hộ", "Phân biệt", "Ước lượng", "Đánh giá"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Đánh giá"
            this.$emit("mien", this.mien)
        },

        onPhantich() {
            this.dataSend = ["Xem xét", "Hệ thống hóa", "Phác thảo", "Nghiên cứu", "Đơn giản hóa", "Phân tích",
            "Phân chia ra", "Phân loại", "So sánh", "Đối chiếu", "Biểu đồ"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Phân tích"
            this.$emit("mien", this.mien)
        },

        onApdung() {
            this.dataSend = ["Áp  dụng","Vận dụng", "Tính toán", "Thay đổi", "Biên soạn", "Làm thí nghiệm", "Thực hiện",
            "Vẽ sơ đồ", "Dự đoán", "Trình bày", "Thuật lại", "Chỉ ra", "Giải quyết"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Áp dụng"
            this.$emit("mien", this.mien)
        },

        onHieu() {
            this.dataSend = ["Liên kết", "Thảo luận", "Diễn đạt", "Mở rộng", "Minh họa",
                "Suy luận", "Giải thích", "Diễn giải", "Phát biểu lại", "Tóm tắt"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Hiểu"
            this.$emit("mien", this.mien)
        },

        onGhinho() {
            this.dataSend = ["Sắp xếp", "Xác định", "Miêu tả", "Vẽ", "Lặp lại", "Tìm ra", "Nhận ra", "Liệt kê", "Gọi tên",
                "Trích dẫn", "Nhớ lại", "Nhắc lại", "Phục hồi", "Tiến trình", "Nói", "Viết"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Ghi nhớ"
            this.$emit("mien", this.mien)


        },
        //Mien ky nang
        onSangtao1() {
            this.dataSend = ["Sáng tạo","Sáng tác","Lập công thức", "Xây", "Đặt", "Khởi sướng", "Kết hợp", "Sửa đổi", "Thiết lập", "Phát minh", "Thiết kế lại",
            "Thiết kế", "Sắp xếp lại", "Giải quyết vấn đề"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Sáng tạo (Miền kỹ năng)"
            this.$emit("mien", this.mien)
            //
        },

        onThichung() {
            this.dataSend = ["Thích ứng", "Điều chỉnh", "Duyệt lại", "Cải tổ", "Thay đổi"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Thích ứng"
            this.$emit("mien", this.mien)
        },

        onHoanthanhtd() {
            this.dataSend = ["Hành động thành thói quen", "Thu thập", "Cải tiến", "Kiểm soát", "Xác định", "Đạo diễn", "Hoàn thành", "Nổi trội", "Dựng",
                "Hướng dẫn", "Tháo", "Duy trì hiệu quả", "Hiển thị", "Quản lí", "Thành thạo", "Sửa chữa", "Tổ chức","Xay", "Tán", "Làm cho hoàn thiện", "Làm nóng","Thao tác thuần thục",
                "Thao tác khéo léo","Tiến hành","Đo lường","Chỉnh sửa"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Hoàn thành tự động"
            this.$emit("mien", this.mien)
        },

        onKyxao() {
            this.dataSend = ["Điều hành","Lắp ráp", "Chứng minh", "Vận hành", "Hoàn thiện", "Cải thiện", "Tăng tốc", "Kiểm soát tốc độ",
                "Gán cho", "Thực hành", "Tạo hình","Bảo trì","Bảo dưỡng","Tháo lắp","Sửa chữa"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Kỹ xảo"
            this.$emit("mien", this.mien)

        },

        onPhanhoicohd() {
            this.dataSend = ["Sao chép", "Nhân bản", "Thực hiện", "Thể hiện", "Mô phỏng", "Thao tác theo hưỡng dẫn", "Vận hành có giám sát", "Thuật lại", "Thử nghiệm",
                "Xây dựng", "Đáp lại"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Phản hồi có hưỡng dẫn"
            this.$emit("mien", this.mien)

        },

        onThietlap() {
            this.dataSend = ["Giải thích","Sắp xếp", "Khởi đầu","Di chuyển", "Chuẩn bị", "Tác động", "Tuyên bố", "Tự nguyện", "Trả lời"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Thiết lập"
            this.$emit("mien", this.mien)

        },

        onNhanthuc() {
            this.dataSend = ["Chú ý","Phát hiện ra", "Lắng nghe", "Miêu tả", "Nghe thấy", "Quan sát", "Phân biệt", "Cảm thụ", "Cảm nhận",
                "Nhận ra", "Xem xét", "Tách", "Nhận biết", "Quan sát thấy", "Chọn lựa"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Nhận thức"
            this.$emit("mien", this.mien)
        },
        //Mien thai do
        onCanhanhoa() {
            this.dataSend = ["Đóng vai", "Hành động", "Tán thành","Chủ trương", "Thể hiện quan điểm", "Bảo vệ", "Thể hiện"," Minh họa", "Thể hiện minh họa bằng ví dụ thực tế", "Tạo ảnh hưởng linh hoạt", "Điều chỉnh hành vi", "Sửa đổi","Điều chỉnh", "Cống hiến", "Tận tụy",
                "Nội hóa","Chủ quan hóa","Có chủ kiến", "Rà soát", "Quản lý", "Làm sáng tỏ vấn đề"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Cá nhân hóa"
            this.$emit("mien", this.mien)
        },

        onTochuc() {
            this.dataSend = ["Tổ chúc","Linh hoạt", "Thích ứng", "Phân loại", "Hình thành", "Thảo luận", "Hệ thống hóa", "Tổng hợp", "Thay thế", "Kết hợp",
                "So sánh", "Khái quát hóa", "Tích hợp"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Tổ chức"
            this.$emit("mien", this.mien)
        },

        onNhangiatri() {
            this.dataSend = ["Cam kết", "Theo đuổi", "Mời gọi", "Đề xuất", "Kiến nghị", "Ủng hộ", "Chia sẻ", "Cống hiến", "Bênh vực"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Nhìn nhận giá trị"
            this.$emit("mien", this.mien)
        },

        onPhanhoi() {
            this.dataSend = ["Chấp nhận", "Chấp hành", "Tuân thủ", "Thực hành", "Thực hiện", "Tham gia", "Giao tiếp"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Đáp ứng, phản hồi"
            this.$emit("mien", this.mien)
        },

        onTiepnhan() {
            this.dataSend = ["Ghi nhận", "Tiếp nhận", "Nhận diện", "Nhận biết"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Tiếp nhận"
            this.$emit("mien", this.mien)
        },

        onBack() {
            this.$emit("onBack")
        }
    }
};
</script>

<style lang="css">
.inf {
    width: 100px;
    margin-top: 20px;
    margin-left: auto;
}

.btn-back {
    width: 100%;
    height: auto;
    margin-top: 20px;
    margin-right: auto;
    flex-wrap: wrap;
}

.btn-back-1 {
    width: 100px;
    margin-top: 20px;
    margin-left: auto;
}

.step1 {
    display: flex;
    border-radius: 0.5rem;
    background-color: white;
    padding: 20px;
    padding-left: 0;
}

/* .step1-1 {
        display: flex;
        background-color: white;
        margin: auto;
    } */

.menu-btn-st1 {
    display: grid;
    background-color: white;

}

.menu-btn {
    display: grid;
}

.img {
    max-width: 68%;
    max-height: 68%;
    border-radius: 0.5rem;

}

.font-white {
    color: white;

}
</style>