<template>
    <v-app>
        <div class="main">
            <div class="font-white">
                <h1>Bước 1: Chọn cấp độ chuẩn đầu ra theo từng miền - Select a learning outcome level </h1>
                <p>Đây là các cấp độ tương ứng với mức độ phức tạp và cụ thể của một chuẩn đầu ra.
                    Khi bạn đã chọn một cấp độ thích hợp. Hãy nhấn vào nút cấp độ để xem danh sách các động từ phân loại
                    thích hợp cho cấp độ đã chọn.</p>
            </div>
            <div class="menu">
                <v-btn color="primary" elevation="2" class="btn" @click="kienthuc">Kiến thức/ Knowledge</v-btn>
                <v-btn color="primary" elevation="2" class="btn" @click="kynang">Kỹ năng/ Skills</v-btn>
                <v-btn color="primary" elevation="2" class="btn" @click="thaido">Thái độ/ Attitude</v-btn>
            </div>
            <div v-if="stylemien === 'kienthuc'" class="step1">
                <!-- <div class="step1-1"> -->
                <img src="../assets/img/6capdomnt.png" alt="err" class="img">
                <div class="menu-btn-st1">
                    <v-btn color="#03989e" class="btn-back"  @click="onSangtao">
                        Sáng tạo/ Creating
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip">
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png"
                                alt="information" />
                            <span class="tooltipText">Xác lập thông tin, sự vật mới trên cơ sở những thông tin, sự vật đã
                                có</span>
                        </div>
                    </v-btn>
                    <v-btn color="#03989e" class="btn-back" @click="onDanhgia">
                        Đánh giá/ Evaluating
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip">
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png"
                                alt="information" />
                            <span class="tooltipText">Đưa ra nhận định, phán quyết của bản thân đối với thông tin dựa trên
                                các chuẩn mực, tiêu chí</span>
                        </div>
                    </v-btn>
                    <v-btn color="#03989e" class="btn-back"  @click="onPhantich">
                        Phân tích/ Analyzing
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip">
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png"
                                alt="information" />
                            <span class="tooltipText">Chia thông tin thành những phần nhỏ và chỉ ra mối liên hệ của chúng
                                tới tổng thể</span>
                        </div>
                    </v-btn>
                    <v-btn color="#03989e" class="btn-back"  @click="onApdung">
                        Ứng dụng, vận dụng/ Applying
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip">
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png"
                                alt="information" />
                            <span class="tooltipText">Áp dụng thông tin, khái niệm đã biết vào một tình huống, điều kiện mới
                                để giúp giải quyết vấn đề</span>
                        </div>
                    </v-btn>
                    <v-btn color="#03989e" class="btn-back"  @click="onHieu">
                        Hiểu/ Understanding
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip">
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png"
                                alt="information" />
                            <span class="tooltipText">Nắm được ý nghĩa của thông tin, thể hiện qua khả năng diễn giải, suy
                                diễn, liên hệ, khái quát</span>
                        </div>
                    </v-btn>

                    <v-btn color="#03989e" class="btn-back"  @click="onGhinho">
                        Nhớ/ Remembering
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip">
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png"
                                alt="information" />
                            <span class="tooltipText">Có thể nhắc lại các thông tin đã được tiếp nhận trước đó</span>
                        </div>
                    </v-btn>
                </div>
                <!-- </div> -->
            </div>
            <div v-if="stylemien === 'kynang'" class="step1">
                <img src="../assets/img/6capdomkn.png" alt="err" class="img">
                <div class="menu-btn-st1">
                    <!-- <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onSangtao1">
                        Sáng tạo/ Create
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip" >
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png" alt="information"/>
                            <span class="tooltipText">Có thể nhắc lại các thông tin đã được tiếp nhận trước đó</span>
                        </div>
                    </v-btn>
                    <v-btn color="#03989e" class="btn-back" style="color: white;" @click="onThichung">
                        Thích ứng/ Adapt
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip" >
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png" alt="information"/>
                            <span class="tooltipText">Có thể nhắc lại các thông tin đã được tiếp nhận trước đó</span>
                        </div>
                    </v-btn> -->
                    <v-btn color="#03989e" class="btn-back"  @click="onHoanthanhtd">
                        Làm thuần thục/ Naturalization
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip">
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png"
                                alt="information" />
                            <span class="tooltipText">Thể hiện khả năng hoàn thành dễ dàng một hay nhiều kỹ năng và trở
                                thành tự nhiên, không đòi hỏi sự cố gắng về trí lực và thể lực</span>
                        </div>
                    </v-btn>
                    <v-btn color="#03989e" class="btn-back"  @click="onKyxao">
                        Phối hợp/ Articulation
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip">
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png"
                                alt="information" />
                            <span class="tooltipText">Thể hiện khả năng kết hợp được nhiều kỹ năng theo thứ tự chính xác,
                                nhịp nhàng và ổn định</span>
                        </div>
                    </v-btn>
                    <v-btn color="#03989e" class="btn-back"  @click="onPhanhoicohd">
                        Làm chính xác/ Precision
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip">
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png"
                                alt="information" />
                            <span class="tooltipText">Thể hiện khả năng lặp lại chính xác, nhịp nhàng, đúng đắn một kỹ năng,
                                thường thực hiện độc lập không cần phải hướng dẫn</span>
                        </div>
                    </v-btn>
                    <v-btn color="#03989e" class="btn-back"  @click="onThietlap">
                        Làm được/ Manipulation
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip">
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png"
                                alt="information" />
                            <span class="tooltipText">Thể hiện qua khả năng hoàn thành một kỹ năng theo như chỉ dẫn </span>
                        </div>
                    </v-btn>
                    <v-btn color="#03989e" class="btn-back"  @click="onkienthuc">
                        Bắt chước/ Imitation
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip">
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png"
                                alt="information" />
                            <span class="tooltipText">Thể hiện qua khả năng quan sát và lặp lại một kỹ năng nào đó; quan sát
                                và sao chép rập khuôn</span>
                        </div>
                    </v-btn>
                </div>
            </div>
            <div v-if="stylemien === 'thaido'" class="step1">
                <img src="../assets/img/6capdomtd.png" alt="err" class="img">
                <div class="menu-btn-st1">
                    <v-btn color="#03989e" class="btn-back"  @click="onCanhanhoa">
                        Hình thành/ Characterizing
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip">
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png"
                                alt="information" />
                            <span class="tooltipText">Thể hiện khả năng tích hợp niềm tin, tư tưởng và thái độ</span>
                        </div>
                    </v-btn>
                    <v-btn color="#03989e" class="btn-back"  @click="onTochuc">
                        Tổ chức/ Organizing
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip">
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png"
                                alt="information" />
                            <span class="tooltipText">Thể hiện hiểu, so sánh và tổng hợp được giá trị của thông tin tiếp
                                nhận</span>
                        </div>
                    </v-btn>
                    <v-btn color="#03989e" class="btn-back"  @click="onNhangiatri">
                        Đánh giá/ Valuing
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip">
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png"
                                alt="information" />
                            <span class="tooltipText">Thể hiện sự tiếp nhận thông tin, hiểu và tán thành/phản đối giá trị
                                thông tin, có cảm nhận tốt/xấu về thông tin</span>
                        </div>
                    </v-btn>
                    <v-btn color="#03989e" class="btn-back"  @click="onPhanhoi">
                        Đáp ứng/ Responding
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip">
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png"
                                alt="information" />
                            <span class="tooltipText">Thay đổi hành vi để phản ánh thái độ, chủ động và sẵn lòng tham
                                gia</span>
                        </div>
                    </v-btn>
                    <v-btn color="#03989e" class="btn-back"  @click="onTiepnhan">
                        Tiếp nhận/ Receiving
                        <div class="tooltip" @mouseover="showTooltip" @mouseout="hideTooltip">
                            <img width="32" height="32" src="https://img.icons8.com/small/32/information.png"
                                alt="information" />
                            <span class="tooltipText">Thể hiện mức độ cảm giác được sự tồn tại của sự vật, hiện tượng; bằng
                                lòng tiếp nhận </span>
                        </div>
                    </v-btn>
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
            stylemien: "kienthuc",
            mien: '',
            show: false

        }
    },

    methods: {
        showTooltip() {
            this.show = true;
        },
        hideTooltip() {
            this.show = false;
        },
        kienthuc() {
            this.stylemien = "kienthuc"
        },

        kynang() {
            this.stylemien = "kynang"
        },

        thaido() {
            this.stylemien = "thaido"
        },

        //Mien kien thuc
        onSangtao() {
            this.dataSend = ['thiết lập', 'tổng hợp', 'xây dựng', 'thiết kế', 'sáng tác', 'đề xuất', 'giả định',
             'sửa đổi', 'lập kế hoạch', 'sáng tạo', 'phát minh', 'sản xuất', 'hệ thống hóa']
            this.dataEng = ['assemble', 'build', 'design', 'construct', 'compose', 'develop', 'formulate', 'propose', 'hypothesize',
                'modify', 'generate', 'plan', 'invent', 'produce', 'systemize']
            this.$emit("onGhinho", this.dataSend)
            this.$emit("onEng", this.dataEng)
            this.mien = "Sáng tạo/ Creating"
            this.$emit("mien", this.mien)
            //
        },

        onDanhgia() {
            this.dataSend = ['thẩm định', 'khẳng định', 'biện hộ', 'đánh giá', 'xếp hạng', 'ưu tiên', 'lựa chọn', 'quyết định', 'phán quyết',
             'khuyến cáo', 'chỉnh sửa', 'phê chuẩn', 'dự báo', 'đề xuất']
            this.dataEng = ['appraise', 'assess', 'defend', 'evaluate', 'test', 'compare', 'select', 'conclude', 'critique', 'justify', 'judge', 'review', 'predict', 'recommend']
            this.$emit("onGhinho", this.dataSend)
            this.$emit("onEng", this.dataEng)
            this.mien = "Đánh giá/ Evaluating"
            this.$emit("mien", this.mien)
        },

        onPhantich() {
            this.dataSend = ['so sánh', 'phân tích','đối chiếu', 'kiểm tra', 'lý giải', 'phân biệt bản chất', 'chỉ ra', 'phân loại',
             'khám phá', 'thẩm định', 'kiểm định', 'bố trí', 'bóc tách', 'chia nhỏ', 'kết nối', 'suy luận', 'xác định', 'chẩn đoán']
            this.dataEng = ['Compare', 'contrast', 'Analasys','differentiate','distinguish','dissect', 'extrapolate',
                            'investigate', 'examine', 'inspect', 'separate', 'break down', 'correlate', 'relate', 'identify', 'diagnose'
                            ]
            this.$emit("onGhinho", this.dataSend)
            this.$emit("onEng", this.dataEng)
            this.mien = "Phân tích/ Analyzing"
            this.$emit("mien", this.mien)
        },

        onApdung() {
            this.dataSend = ['áp dụng', 'vận dụng', 'sử dụng', 'tính toán', 'kiểm tra', 'chứng minh', 'suy luận', 'phân biệt', 'giải quyết', 'thay đổi',
                'hoàn tất', 'phát triển', 'phát hiện', 'khai thác', 'thực hành', 'thực nghiệm', 'điều chỉnh', 'điều khiển', 'vận hành', 'tổ chức', 'tạo ra', 'lập kế hoạch', 'xây dựng lịch trình', 'trình diễn', 'phác họa', 'dự đoán']
            this.dataEng = ['Apply', 'use', 'utilize', 'employ', 'calculate', 'compute', 'extrapolate', 'compare', 'solve', 'change', 'complete', 'discover',
                'demonstrate', 'illustrate', 'practice', 'experiment', 'modify', 'execute', 'implement', 'manipulate', 'operate', 'schedule', 'predict']
            this.$emit("onEng", this.dataEng)
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Ứng dụng, vận dụng/ Applying"
            this.$emit("mien", this.mien)
        },

        onHieu() {
            this.dataSend = ['giải thích', 'thảo luận', 'so sánh', 'mô tả', 'nhận đinh', 'lựa chọn', 'tóm tắt', 'sắp xếp', 'liên kết', 'dự đoán',
                'tổng kết', 'giải mã', 'làm khác biệt', 'chuyển đổi', 'lượng giá', 'mở rộng', 'khái quát hóa', 'minh họa']
            this.dataEng = ['explain', 'clarify', 'discuss', 'differentiate between', 'discriminate',
                'describe', 'select', 'summarize', 'classify', 'interpret', 'infer', 'illustrate', 'paraphrase', 'translate', 'show']
            this.$emit("onEng", this.dataEng)
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Hiểu/ Understanding"
            this.$emit("mien", this.mien)
        },

        onGhinho() {
            this.dataSend = ["mô tả", "gọi tên", "liệt kê", "nhận diện", "xác định", "định nghĩa", "trình bày",
                "tường thuật", "trích dẫn", "nhắc lại", "kể lại", "tái tạo", "mô phỏng"]
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Nhớ/ Remembering"
            this.$emit("mien", this.mien)
            this.dataEng = ["Describe", "name", "list", "define", "find", "identify",
                "label", "match", "recognize", "state", "recite", 'recall',
                'quote', 'repeat', 'tell', 'tabulate']
            this.$emit("onEng", this.dataEng)


        },

        //Mien ky nang
        // onSangtao1() {
        //     this.dataSend = ["Sáng tạo","Sáng tác","Lập công thức", "Xây", "Đặt", "Khởi xướng", "Kết hợp", "Sửa đổi", "Thiết lập", "Phát minh", "Thiết kế lại",
        //     "Thiết kế", "Sắp xếp lại", "Giải quyết vấn đề"]
        //     this.$emit("onGhinho", this.dataSend)
        //     this.mien = "Sáng tạo (Miền kỹ năng)"
        //     this.$emit("mien", this.mien)
        //     this.dataEng = ["Create", "Formulate", "Build", "Put", "Initiate", "Combine", "Modify", "Set up", "Invent", "Redesign",
        //     "Design", "Reorder", "solve problems"]
        //     this.$emit("onEng", this.dataEng)
        //     //
        // },

        // onThichung() {
        //     this.dataSend = ["Thích ứng", "Điều chỉnh", "Duyệt lại", "Cải tổ", "Thay đổi"]
        //     this.$emit("onGhinho", this.dataSend)
        //     this.mien = "Thích ứng"
        //     this.$emit("mien", this.mien)
        //     this.dataEng = ["Adapt", "Adjust", "Review", "Reform", "Change"]
        //     this.$emit("onEng", this.dataEng)
        // },

        onHoanthanhtd() {
            this.dataSend = ['thiết kế', 'phát triển', 'phát minh', 'hỗ trợ', 'sửa chữa', 'trình diễn', 'hướng dẫn',  'quản lý', 'xác định']
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Làm thuần thục/ Naturalization"
            this.$emit("mien", this.mien)
            this.dataEng = ['Design', 'develop', 'invent', 'assess', 'assist',
                'correct', 'demonstrate', 'illustrate', 'inst ruct',
                'manage', 'specify']
            this.$emit("onEng", this.dataEng)
        },

        onKyxao() {
            this.dataSend = ['thích ứng', 'làm quen', 'phối hợp', 'thiết lập', 'xây dựng', 'sắp xếp', 'sáng tạo', 'thiết kế',
             'tích hợp', 'thay đổi', 'điều chỉnh', 'hiệu chỉnh', 'sản xuất', 'giải quyết']
            this.dataEng = ['adapt', 'combine', 'construct', 'coordinate',  'create', 'develop', 'build', 'design', 'integrate', 'modify', 'calibrate',
                'infer', 'manipulate','produce', 'solve']
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Phối hợp/ Articulation "
            this.$emit("mien", this.mien)
            this.$emit("onEng", this.dataEng)

        },

        onPhanhoicohd() {
            this.dataSend = ['kiểm tra', 'sáng tác', 'làm, thực hiện', 'hoàn thiện', 'điều khiển', 'kiểm soát', 'trình diễn',
             'sử dụng', 'chỉ rõ', 'phân biệt', 'lập công thức', 'tích hợp', 'phán đoán', 'lựa chọn', 'tổng hợp']
            this.dataEng = ['Calibrate', 'compose', 'perform', 'complete', 'control', 'demonstrate', 'execute', 'master', 'perfect',  'show',
             'distinguish', 'formulate', 'integrate', 'judge', 'perceive', 'select','synthesize']
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Làm chính xác/ Precision "
            this.$emit("mien", this.mien)
            this.$emit("onEng", this.dataEng)

        },

        onThietlap() {
            this.dataSend = ['Làm', 'thực hiện', 'thi hành', 'tái hiện lại', 'trình diễn']
            this.dataEng = ['Act', 'execute', 'implement', 'perform', 'recreate', 'reenact', 'display', 
                'follow', 'mimic', 'recreate','repeat', 'reproduce']
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Làm được/ Manipulation"
            this.$emit("mien", this.mien)
            this.$emit("onEng", this.dataEng)

        },

        onkienthuc() {
            this.dataSend = ['Quan sát', 'tuân thủ', 'làm theo', 'sao chép', 'bắt chước', 'nhắc lại', 'lặp lại',
             'tái tạo', 'mô phỏng', 'lựa chọn', 'nhận thấy']
            this.dataEng = ['observe', 'adhere', 'follow', 'copy', 'mimic', 'repeat', 'replicate', 'reproduce', 'relate', 'trace',
             'choose', 'detect', 'identify']
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Bắt chước / Imitation"
            this.$emit("mien", this.mien)
            this.$emit("onEng", this.dataEng)
        },

        //Mien thai do
        onCanhanhoa() {
            this.dataSend = ['Thực hiện', 'biểu lộ', 'biện hộ', 'ảnh hưởng', 'đề xuất', 'đại diện', 'kiểu mẫu', 'xác nhận giá trị', 'biện giải',
             'thôi thúc', 'duy trì', 'gìn giữ', 'kiên nhẫn', 'ủng hộ', 'cống hiến', 'đặc trưng cho tính cách']
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Hình thành/ Characterizing"
            this.$emit("mien", this.mien)
            this.dataEng = ['act', 'perform', 'display', 'practice','advocate', 'influence', 'propose',
                'embody', 'represent', 'pattern', 'exemplify', 'validate', 'defend', 'justify', 'encourgage', 'maintain',
                'preserve', 'retain', 'uphold', 'endure', 'support', 'devote', 'characterize']
            this.$emit("onEng", this.dataEng)
        },

        onTochuc() {
            this.dataSend = ['Thay đổi', 'điều chỉnh', 'tổ chức', 'so sánh', 'đánh giá', 'phát triển',
             'tích hợp', 'sắp xếp', 'hình thành', 'thiết lập', 'kết nối', 'trung thành' ,'gắn kết']
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Tổ chức  hoặc Thiết lập/ Organizing"
            this.$emit("mien", this.mien)
            this.dataEng = ['alter', 'adjust',  'modify', 'arrange',
             'compare', 'rate', 'develop', 'formulate', 'integrate', 'order', 'reconcile', 'rank', 'establish', 'relate', 'adhere']
            this.$emit("onEng", this.dataEng)
        },

        onNhangiatri() {
            this.dataSend = ['Thích ứng', 'cân bằng', 'phản kháng', 'phê bình', 'đối chiếu', 'so sánh',
             'phân biệt', 'bảo vệ', 'biện hộ', 'thuyết phục', 'tìm kiếm', 'thừa nhận', 'tán thành', 'đề nghị']
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Đánh giá hoặc Nội tâm hóa/ Valuing"
            this.$emit("mien", this.mien)
            this.dataEng = ['adapt', 'balance','challenge', 'critique', 'confront', 'differentiate',
             'defend', 'justify', 'persuade', 'seek', 'commit', 'endorse', 'accept', 'sanction', 'desire', 'propose']
            this.$emit("onEng", this.dataEng)
        },

        onPhanhoi() {
            this.dataSend = ['Hành xử', 'phản ứng', 'làm rõ', 'tuân theo', 'làm cho đúng', 'phối hợp', 'xem xét', 'dò xét', 'lựa chọn',
             'giải thích', 'luyện tập', 'bày tỏ', 'thuộc lòng', 'tán thành', 'theo đuổi', 'đóng góp', 'tình nguyện']
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Đáp ứng/ Responding"
            this.$emit("mien", this.mien)
            this.dataEng = ['behave', 'react', 'clarify', 'obey', 'comply', 'conform', 'cooperate', 'examine', 'inquire', 'select', 'explain',
                'practice', 'present', 'recite', 'report', 'consent', 'agree to', 'pursue', 'contribute', 'volunteer']
            this.$emit("onEng", this.dataEng)
        },

        onTiepnhan() {
            this.dataSend = ['Công nhận', 'nhận biết', 'chấp nhận', 'ý thức được', 'hỏi', 'để ý', 'mô tả', 'quan sát',
             'tuân thủ', 'nhận định', 'lắng nghe', 'nhìn nhận']
            this.$emit("onGhinho", this.dataSend)
            this.mien = "Tiếp nhận/ Receiving"
            this.$emit("mien", this.mien)
            this.dataEng = ['acknowledge', 'recognize','accept', 'be aware of', 'ask',
             'attend', 'describe', 'observe', 'follow', 'identify', 'listen', 'view', 'watch']
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
    background-color: white;
    display: grid;
    width: 100%;
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

.tooltip {
    position: relative;
    margin-left: auto;
}

.tooltip .tooltipText {
    visibility: hidden;
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    position: absolute;
    z-index: 1;
    bottom: -80%;
    left: -20%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    overflow-wrap: break-word;
    overflow: auto;
    white-space: pre-wrap;
}

.tooltip:hover .tooltipText {
    visibility: visible;
    opacity: 1;
}

.v-btn__content {
    color: white;
}


@media only screen and (max-width: 800px) {
    .step1 {
        display: block;
        text-align: center;
    }

    .img {
        max-width: 100%;
    }

    .v-btn__content{
        font-size: 10px;
        word-wrap: break-word;
        word-break: break-all;
    }
}
</style>