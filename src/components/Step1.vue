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
                <v-btn color="primary" elevation="2" class="btn" @click="nhanthuc">Kiến thức/ Knowledge</v-btn>
                <v-btn color="primary" elevation="2" class="btn" @click="kynang">Kỹ năng/ Skill</v-btn>
                <v-btn color="primary" elevation="2" class="btn" @click="thaido">Thái độ/ Attitude</v-btn>
            </div>
            <div v-if="stylemien === 'nhanthuc'" class="step1">
                <!-- <div class="step1-1"> -->
                <img src="../assets/img/6capdomnt.png" alt="err" class="img">
                <div class="menu-btn-st1">
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onSangtao">Sáng tạo/ Creation</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onDanhgia">Đánh giá/ Evaluate</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onPhantich">Phân tích/ Analyze</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onApdung">Áp dụng/ Apply</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onHieu">Hiểu/ Understand</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onGhinho">Ghi nhớ/ Remember</v-btn>
                </div>
                <!-- </div> -->
            </div>
            <div v-if="stylemien === 'kynang'" class="step1">
                <img src="../assets/img/6capdomkn.png" alt="err" class="img">
                <div class="menu-btn-st1">
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onSangtao1">Sáng tạo/ Create</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onThichung">Thích ứng/ Adapt</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onHoanthanhtd">Hoàn thành/ Accomplish</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onKyxao">Kỹ xảo/ Technique</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onPhanhoicohd">Phản hồi/ Feedback</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onThietlap">Thiết lập/ Set</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onNhanthuc">Nhận thức/ Realize</v-btn>
                </div>
            </div>
            <div v-if="stylemien === 'thaido'" class="step1">
                <img src="../assets/img/6capdomtd.png" alt="err" class="img">
                <div class="menu-btn-st1">
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onCanhanhoa">Cá nhân hóa/ Personalize
                    </v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onTochuc">Tổ chức/ Organize</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onNhangiatri">Nhận giá trị/ Get Value
                    </v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onPhanhoi">Phản hồi/ Feedback</v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onTiepnhan">Tiếp nhận/ Adopt</v-btn>
                </div>
            </div>
            <div class="menu-btn">
                <v-btn color="warning" elevation="2" class="btn-back-1" @click="onBack">Quay về/ Back</v-btn>
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
            dataEng: [],
            stylemien: "nhanthuc",
            mien: ''
           
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
            this.dataEng = ["Integration", "Invent", "Craft", "Administer", "Modify", "Plan", "Create", "Propose", "Rewrite", "Gather",
             "Combine", "Compose", "Build", "Design", "Develop"]
            this.$emit("onGhinho", this.dataSend)
            this.$emit("onEng", this.dataEng)
            this.mien = "Sáng tạo (Miền nhận thức)"
            this.$emit("mien", this.mien)
            //
        },

        onDanhgia() {
            this.dataSend = ["Nhận định", "Chứng minh", "Xếp hạng", "Lựa chọn", "Xác nhận", "Kiểm tra", "Định giá", "Tranh luận", "Quyết định",
                "Thuyết phục", "Bình phẩm", "Bình luận", "Biện hộ", "Phân biệt", "Ước lượng", "Đánh giá"]
            this.dataEng = ["Confirmation", "Prove", "Ranking", "Choice", "Confirm", "Test", "Valuation", "argue", "determine", "persuade",
             "comment","advocate","discriminate","estimate","evaluate"]
            this.$emit("onGhinho", this.dataSend)
            this.$emit("onEng", this.dataEng)
            this.mien = "Đánh giá"
            this.$emit("mien", this.mien)
        },

        onPhantich() {
            this.dataSend = ["Xem xét", "Hệ thống hóa", "Phác thảo", "Nghiên cứu", "Đơn giản hóa", "Phân tích",
            "Phân chia ra", "Phân loại", "So sánh", "Đối chiếu", "Biểu đồ"]
            this.dataEng = ["consider" , "systematize", "outline", "study", "simplify", "analyse",
             "divide", "classify", "compare","chart"]
            this.$emit("onGhinho", this.dataSend)
            this.$emit("onEng", this.dataEng)
            this.mien = "Phân tích"
            this.$emit("mien", this.mien)
        },

        onApdung() {
            this.dataSend = ["Áp  dụng","Vận dụng", "Tính toán", "Thay đổi", "Biên soạn", "Làm thí nghiệm", "Thực hiện",
            "Vẽ sơ đồ", "Dự đoán", "Trình bày", "Thuật lại", "Chỉ ra", "Giải quyết"]
            this.dataEng = ["apply","calculate","change","compile","do an experiment","implement","draw diagram","predict","presentation"," report ","indicates","solves"]
            this.$emit("onEng", this.dataEng)
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Áp dụng"
            this.$emit("mien", this.mien)
        },

        onHieu() {
            this.dataSend = ["Liên kết", "Thảo luận", "Diễn đạt", "Mở rộng", "Minh họa",
                "Suy luận", "Giải thích", "Diễn giải", "Phát biểu lại", "Tóm tắt"]
            this.dataEng = ["link", "discussion", "express", "extend", "illustrate", "infer" , "explain", "interpret" , "restate" , "summarize"]
            this.$emit("onEng", this.dataEng)
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
            this.dataEng = ["Arrange", "Identify", "Describe", "Draw", "Repeat", "Find", "Recognize", "List", "Name",
                "Quote", "Recall", "Recovery", "Progress", "Speak", "Write"]
            this.$emit("onEng", this.dataEng)


        },
        //Mien ky nang
        onSangtao1() {
            this.dataSend = ["Sáng tạo","Sáng tác","Lập công thức", "Xây", "Đặt", "Khởi xướng", "Kết hợp", "Sửa đổi", "Thiết lập", "Phát minh", "Thiết kế lại",
            "Thiết kế", "Sắp xếp lại", "Giải quyết vấn đề"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Sáng tạo (Miền kỹ năng)"
            this.$emit("mien", this.mien)
            this.dataEng = ["Create", "Formulate", "Build", "Put", "Initiate", "Combine", "Modify", "Set up", "Invent", "Redesign",
            "Design", "Reorder", "Problem Solving"]
            this.$emit("onEng", this.dataEng)
            //
        },

        onThichung() {
            this.dataSend = ["Thích ứng", "Điều chỉnh", "Duyệt lại", "Cải tổ", "Thay đổi"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Thích ứng"
            this.$emit("mien", this.mien)
            this.dataEng = ["Adaptation", "Adjustment", "Review", "Reform", "Change"]
            this.$emit("onEng", this.dataEng)
        },

        onHoanthanhtd() {
            this.dataSend = ["Hành động thành thói quen", "Thu thập", "Cải tiến", "Kiểm soát", "Xác định", "Đạo diễn", "Hoàn thành", "Nổi trội", "Dựng",
                "Hướng dẫn", "Tháo", "Duy trì hiệu quả", "Hiển thị", "Quản lí", "Thành thạo", "Sửa chữa", "Tổ chức","Xay", "Tán", "Làm cho hoàn thiện", "Làm nóng","Thao tác thuần thục",
                "Thao tác khéo léo","Tiến hành","Đo lường","Chỉnh sửa"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Hoàn thành tự động"
            this.$emit("mien", this.mien)
            this.dataEng = ["Action to Habit", "Gather", "Improve", "Control", "Determine", "Direct", "Finish", "Spot", "Build",
                "Instructions", "Remove", "Maintain Efficiency", "Show", "Manage", "Professional", "Repair", "Organize", "Grill", "Cover", " Finishing", "Heating", "Mastering",
                "Flex work","Proceed","Measurement","Edit"]
            this.$emit("onEng", this.dataEng)
        },

        onKyxao() {
            this.dataSend = ["Điều hành","Lắp ráp", "Chứng minh", "Vận hành", "Hoàn thiện", "Cải thiện", "Tăng tốc", "Kiểm soát tốc độ",
                "Gán cho", "Thực hành", "Tạo hình","Bảo trì","Bảo dưỡng","Tháo lắp"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Kỹ xảo"
            this.$emit("mien", this.mien)
            this.dataEng = ["Assembly", "Prove", "Operate", "Finish", "Improve", "Accelerate", "Speed ​​Control",
                "Assign", "Practice", "Shaping","Maintenance","Maintenance","Disassembly"]
            this.$emit("onEng", this.dataEng)

        },

        onPhanhoicohd() {
            this.dataSend = ["Sao chép", "Nhân bản", "Thực hiện", "Thể hiện", "Mô phỏng", "Thao tác theo hướng dẫn", "Vận hành có giám sát", "Thuật lại", "Thử nghiệm",
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
            this.dataEng = ["Copy", "Clone", "Implement", "Demonstrate", "Simulate", "Instructed Operation", "Supervised Operation", "Narrator", "Test" ,
                 "Reply"]
            this.$emit("onEng", this.dataEng)

        },

        onNhanthuc() {
            this.dataSend = ["Chú ý","Phát hiện ra", "Lắng nghe", "Miêu tả", "Nghe thấy", "Quan sát", "Phân biệt", "Cảm thụ", "Cảm nhận",
                "Nhận ra", "Xem xét", "Tách", "Nhận biết", "Quan sát thấy", "Chọn lựa"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Nhận thức"
            this.$emit("mien", this.mien)
            this.dataEng = ["Attention", "Detect", "Listen", "Describe", "Hear", "Distinguish", "Feel", "Feel",
                "Realize", "Consider", "Separate", "Aware", "Observation", "Choose"]
            this.$emit("onEng", this.dataEng)
        },
        //Mien thai do
        onCanhanhoa() {
            this.dataSend = ["Đóng vai", "Hành động", "Tán thành","Chủ trương", "Thể hiện quan điểm", "Bảo vệ", "Thể hiện"," Minh họa", "Thể hiện minh họa bằng ví dụ thực tế", "Tạo ảnh hưởng linh hoạt", "Điều chỉnh hành vi", "Sửa đổi","Điều chỉnh", "Cống hiến", "Tận tụy",
                "Nội hóa","Chủ quan hóa","Có chủ kiến", "Rà soát", "Quản lý", "Làm sáng tỏ vấn đề"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Cá nhân hóa"
            this.$emit("mien", this.mien)
            this.dataEng = ["Play", "Action", "Approve", "Express opinion", "Defend", "Demonstrate"," Illustrate", "Demonstrate by example", "Practical", "Dynamic Influence", "Behavior Modification", "Modify", "Dedication",
                "Internalization", "Personalization", "Opinion", "Review", "Management", "Clarifying the problem"]
            this.$emit("onEng", this.dataEng)
        },

        onTochuc() {
            this.dataSend = ["Tổ chúc","Linh hoạt", "Thích ứng", "Phân loại", "Hình thành", "Thảo luận", "Hệ thống hóa", "Tổng hợp", "Thay thế", "Kết hợp",
                "So sánh", "Khái quát hóa", "Tích hợp"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Tổ chức"
            this.$emit("mien", this.mien)
            this.dataEng = ["Organize", "Flexible", "Adapt", "Classify", "Formulate", "Discussion", "Systematize", "Synthesis", "Replace", "Combine" ,
                "Compare", "Generalize", "Integrate"]
            this.$emit("onEng", this.dataEng)
        },

        onNhangiatri() {
            this.dataSend = ["Cam kết", "Theo đuổi", "Mời gọi", "Đề xuất", "Kiến nghị", "Ủng hộ", "Chia sẻ", "Cống hiến", "Bênh vực"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Nhìn nhận giá trị"
            this.$emit("mien", this.mien)
            this.dataEng = ["Pledge", "Pursue", "Invite", "Recommend", "Proposal", "Support", "Share", "Dedication", "Advocate"]
            this.$emit("onEng", this.dataEng)
        },

        onPhanhoi() {
            this.dataSend = ["Chấp nhận", "Chấp hành", "Tuân thủ", "Thực hành", "Thực hiện", "Tham gia", "Giao tiếp"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Đáp ứng, phản hồi"
            this.$emit("mien", this.mien)
            this.dataEng = ["Accept", "Compliance", "Practice", "Perform", "Participate", "Communicate"]
            this.$emit("onEng", this.dataEng)
        },

        onTiepnhan() {
            this.dataSend = ["Ghi nhận", "Tiếp nhận", "Nhận diện", "Nhận biết"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Tiếp nhận"
            this.$emit("mien", this.mien)
            this.dataEng = ["Recognize", "Receive", "Aware"]
            this.$emit("onEng", this.dataEng)
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
    width: 140px;
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