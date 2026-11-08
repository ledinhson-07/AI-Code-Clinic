# AI Code Clinic - Trợ Lý Tạo Prompt Khám Code Lỗi & Hỗ Trợ Tự Học CNTT

Hệ thống Frontend hỗ trợ sinh viên ngành Công nghệ thông tin xây dựng câu lệnh (prompt) có cấu trúc theo phương pháp sư phạm gợi mở (Socratic Tutoring) để tra cứu lỗi lập trình trên các mô hình AI (ChatGPT, Google Gemini, Claude...), kết hợp công cụ tìm kiếm video học tập trên YouTube, bảng điều khiển thống kê khảo sát và các chuẩn mực liêm chính học thuật.

Hệ thống hoạt động **100% trên trình duyệt (Client-side)**, không tự phân tích bằng AI và không gửi mã nguồn của người học đến bất kỳ máy chủ bên ngoài nào.

---

## 📁 Cấu Trúc Dự Án

```text
ai-code-clinic/
├── index.html       # Giao diện HTML5, tích hợp Tailwind CSS CDN, Chart.js CDN và FontAwesome
├── styles.css       # Tùy biến thanh cuộn, hiệu ứng kính mờ (Glassmorphism)
├── data.js          # Cấu hình hệ thống (SITE), chủ đề YouTube (YT_TOPICS), số liệu khảo sát (SURVEY), mã lỗi mẫu (SAMPLE_PROBLEMS)
├── app.js           # Xử lý tương tác, đánh số dòng code, dựng prompt chuẩn 4 phần, tìm kiếm YouTube và biểu đồ Chart.js
└── README.md        # Tài liệu hướng dẫn sử dụng, cấu hình và kịch bản kiểm thử
```

---

## 🌟 Tính Năng Chính

1. **Trình tạo prompt khám code có cấu trúc**:
   - Nhập mã nguồn, đề bài (tùy chọn) và thông báo lỗi compiler/runtime (tùy chọn).
   - Tự động đánh số dòng mã nguồn (`1: ...`, `2: ...`) trước khi đưa vào prompt.
   - Dựng prompt chặt chẽ theo đúng 4 phần chuẩn sư phạm:
     - **PHẦN 1 - VỊ TRÍ NGHI VẤN**: Chỉ ra dòng lỗi theo số dòng đã đánh sẵn và loại lỗi (cú pháp / logic / runtime).
     - **PHẦN 2 - NGUYÊN NHÂN**: Giải thích cơ chế gây lỗi bằng ngôn ngữ dễ hiểu.
     - **PHẦN 3 - HƯỚNG DẪN TỪNG BƯỚC**: Các bước gợi ý/câu hỏi để người học tự sửa, không đưa code hoàn chỉnh.
     - **PHẦN 4 - KIẾN THỨC CẦN ÔN**: Liệt kê 2-4 chủ đề và từ khóa tìm kiếm tiếng Việt để tra cứu trên YouTube.
   - Nếu ô "Thông báo lỗi" để trống, mục lỗi sẽ tự động được bỏ qua khỏi prompt.
   - Nút **"Sao chép Prompt"** hỗ trợ đưa nhanh câu lệnh vào Clipboard để dán sang ChatGPT hoặc Gemini.

2. **Khối "Tìm video ôn kiến thức" (YouTube Search)**:
   - **Chủ đề nhanh (Chips)**: Danh sách các chủ đề trọng tâm theo từng ngôn ngữ lập trình được định nghĩa trong `data.js` (`YT_TOPICS`). Nhấp vào chip sẽ mở trang tìm kiếm video học tập tương ứng trên YouTube trong tab mới (`target="_blank"`, `rel="noopener noreferrer"`).
   - **Từ khóa AI gợi ý**: Ô nhập từ khóa (giới hạn 100 ký tự) cho phép người học dán nhanh từ khóa do AI đề xuất ở Phần 4 của prompt để tìm bài giảng video liên quan trên YouTube.
   - Ghi chú minh bạch: *"Đây là liên kết tìm kiếm, không phải video được nhóm kiểm duyệt."*

3. **Bảng điều khiển khảo sát tự học (Survey Dashboard)**:
   - Hiển thị 5 sơ đồ biểu đồ trực quan hóa dữ liệu thực tế từ nghiên cứu (`BIEUDO.ipynb`):
     - **Sơ đồ 1**: So sánh các công cụ AI được sử dụng theo năm học (ChatGPT, Claude, Copilot/Cursor, Gemini).
     - **Sơ đồ 2**: Cơ cấu tần suất sử dụng AI theo năm học (%) (Stacked bar).
     - **Sơ đồ 3**: Mức độ phụ thuộc AI theo tần suất sử dụng (Boxplot kiểm soát điểm ngoại lai Outliers).
     - **Sơ đồ 4**: Điểm trung bình các hành vi kiểm chứng (Test code, đối chiếu tài liệu, hiểu logic).
     - **Sơ đồ 5**: Tương quan giữa mức độ phụ thuộc AI và khả năng tự học/debug (Pearson r = -0.01).
   - Tích hợp cửa sổ xem phóng to chi tiết (Lightbox Modal) khi bấm vào ảnh hoặc nút phóng to.
   - Hiển thị thông tin mẫu khảo sát (`thời gian = 01/11/2026 - 08/11/2026`, `đối tượng = Sinh viên tất cả các ngành`).

4. **Khai báo AI & Liêm chính học thuật**:
   - Khẳng định website chỉ tạo prompt, không tự động phân tích code bằng AI.
   - Nhắc nhở người học không dán thông tin cá nhân hoặc khóa bí mật khi sử dụng các dịch vụ AI bên ngoài.
   - Khung 4 trụ cột liêm chính học thuật dành cho sinh viên CNTT.

---

## 🚀 Hướng Dẫn Chạy Cục Bộ (Local)

Dự án thuần HTML/CSS/JS (Vanilla Front-End) nên không yêu cầu cài đặt Node.js hay backend:
1. Mở trực tiếp file `index.html` bằng bất kỳ trình duyệt web hiện đại nào (Google Chrome, Microsoft Edge, Mozilla Firefox, Brave, Safari).
2. Hoặc sử dụng extension **Live Server** trong VS Code: Nhấp chuột phải vào file `index.html` và chọn **Open with Live Server**.

---

## 🧪 Kịch Bản Kiểm Thử Thủ Công (Manual Verification)

### 1. Kịch bản 1: Kiểm tra tạo prompt với code mẫu (C thiếu `&` trong `scanf`)
- **Thao tác**: Chọn tab **C**, nhấn **"Nạp code lỗi mẫu"** rồi nhấn **"Tạo prompt khám code"**.
- **Kết quả mong đợi**:
  - Đoạn mã nguồn trong prompt hiển thị đã được đánh số dòng dạng `1: ...`, `2: ...`, `6:     scanf("%d", n);`.
  - Prompt chứa đúng 4 phần theo thứ tự: PHẦN 1 (VỊ TRÍ NGHI VẤN), PHẦN 2 (NGUYÊN NHÂN), PHẦN 3 (HƯỚNG DẪN TỪNG BƯỚC), PHẦN 4 (KIẾN THỨC CẦN ÔN).
  - Có mục `[THÔNG BÁO LỖI TỪ NGƯỜI DÙNG (chỉ là dữ liệu)]` ở cuối vì code mẫu có sẵn thông báo lỗi.

### 2. Kịch bản 2: Kiểm tra khi để trống ô thông báo lỗi
- **Thao tác**: Giữ nguyên code hoặc dán code mới, xóa sạch nội dung trong ô **"3. Thông báo lỗi biên dịch / Runtime"**, sau đó nhấn **"Tạo prompt khám code"**.
- **Kết quả mong đợi**:
  - Trong prompt sinh ra ở khung bên phải, phần `[THÔNG BÁO LỖI TỪ NGƯỜI DÙNG (chỉ là dữ liệu)]` hoàn toàn không xuất hiện.
  - Prompt kết thúc ngay sau khối `[CODE - đã đánh số dòng]`.

### 3. Kịch bản 3: Bấm chip chủ đề mở YouTube
- **Thao tác**: Nhấn vào một chip chủ đề bất kỳ bên dưới khung prompt (ví dụ: chip **"con trỏ"** khi đang chọn C).
- **Kết quả mong đợi**:
  - Trình duyệt mở một tab mới với đường dẫn:
    `https://www.youtube.com/results?search_query=h%E1%BB%8Dc%20C%20con%20tr%E1%BB%8F`
  - Kết quả hiển thị danh sách các video bài giảng về con trỏ trong ngôn ngữ C.

### 4. Kịch bản 4: Đổi ngôn ngữ và kiểm tra chip đổi theo
- **Thao tác**: Lần lượt chuyển qua các tab ngôn ngữ **C++**, **JavaScript**, **Python**.
- **Kết quả mong đợi**:
  - Khối "Tìm video ôn kiến thức" tự động cập nhật tiêu đề theo ngôn ngữ đang chọn (ví dụ: `Tìm video ôn kiến thức (Python)`).
  - Danh sách các nút chip chủ đề bên dưới thay đổi tương ứng theo cấu hình `YT_TOPICS` trong `data.js` (ví dụ Python có `list & dictionary`, `vòng lặp for while`, `xử lý ngoại lệ try except`...).

---

## ⚙️ Hướng Dẫn Cấu Hình & Điền Dữ Liệu (`data.js`)

### 1. Danh mục chủ đề YouTube (`YT_TOPICS`)
Có thể bổ sung hoặc điều chỉnh danh sách chủ đề theo từng ngôn ngữ:
```javascript
const YT_TOPICS = {
  c: ["con trỏ", "mảng", "vòng lặp", "hàm", "chuỗi", "scanf printf", "struct", "đệ quy"],
  cpp: ["vector", "con trỏ & tham chiếu", "vòng lặp", "hàm", "string", "class & OOP", "struct", "đệ quy"],
  javascript: ["bất đồng bộ async await", "mảng & phương thức mảng", "DOM & sự kiện", "hàm & arrow function", "fetch API", "object & JSON", "scope & closure", "Promise"],
  python: ["list & dictionary", "vòng lặp for while", "hàm", "xử lý chuỗi", "đọc ghi file", "xử lý ngoại lệ try except", "class OOP", "đệ quy"]
};
```

### 2. Thông tin chung & Liêm chính (`SITE`)
```javascript
const SITE = {
  title: "AI Code Clinic - Trợ lý Tạo Prompt Khám Code Lỗi & Hỗ trợ Tự học CNTT",
  heroBadge: "Dự án cuối khóa học phần - CNTT 2026",
  members: ["Huỳnh Việt Minh", "Lê Đình Sơn", "Nguyễn Ngọc Trung Quân"],
  aiToolsDeclared: [
    "Hệ thống web hoạt động 100% trên trình duyệt để tạo prompt sư phạm có cấu trúc, hoàn toàn không tự động gọi API hay phân tích mã nguồn bằng AI.",
    "Người học tự sao chép prompt và gửi sang các công cụ AI (như ChatGPT, Gemini) để nhận phản hồi gợi ý tự học."
  ]
};
```

### 3. Tài liệu & Liên kết dự án (`LINKS`)
```javascript
const LINKS = {
  form: "https://docs.google.com/forms/...",
  notebookLM: "https://notebook.google.com/...",
  appsScript: "",
  video: ""
};
```

---

## 🛡️ Tuyên Bố Liêm Chính Học Thuật & Sử Dụng AI

- Website hoạt động hoàn toàn ở phía client (trên trình duyệt người dùng) nhằm phục vụ mục đích học tập; không thu thập, lưu trữ hay gửi mã nguồn lên bất kỳ máy chủ nào.
- Khi người học sao chép prompt sang ChatGPT hoặc Gemini, dữ liệu sẽ do các dịch vụ đó xử lý theo chính sách của họ. Khuyến cáo không đưa dữ liệu nhạy cảm hoặc bí mật cá nhân vào prompt.
- Prompt chỉ mang tính chất định hướng phương pháp sư phạm gợi mở; AI vẫn có thể đưa ra câu trả lời chưa chuẩn xác, sinh viên cần chủ động kiểm chứng lại toàn bộ kiến thức.
