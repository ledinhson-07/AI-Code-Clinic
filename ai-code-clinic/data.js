/**
 * AI Code Clinic - Data Store
 * Quy tắc: Không bịa đặt số liệu hay thông tin. Chỗ nào chưa có dữ liệu thật dùng placeholder [CHỜ DỮ LIỆU].
 */

const SITE = {
  title: "AI Code Clinic - Trợ lý Tạo Prompt Khám Code Lỗi & Hỗ trợ Tự học CNTT",
  heroBadge: "Dự án cuối khóa học phần - CNTT 2026",
  heroTitlePlain: "Hỗ Trợ Tự Học Lập Trình &",
  heroTitleHighlight: "Tạo Prompt Khám Code Lỗi",
  heroDesc: "Hệ thống hỗ trợ sinh viên CNTT tạo prompt có cấu trúc định hướng sư phạm để tự dán lên ChatGPT/Gemini, không tự phân tích bằng AI, giúp rèn luyện tư duy tự sửa lỗi và bảo đảm liêm chính học thuật.",
  members: ["Huỳnh Việt Minh", "Lê Đình Sơn", "Nguyễn Ngọc Trung Quân"],
  pillars: [
    {
      title: "Thấu Hiểu Bản Chất",
      desc: "Tuyệt đối không sao chép mã nguồn khi bạn không thể giải thích từng dòng lệnh cho giảng viên hoặc hội đồng đánh giá đồ án."
    },
    {
      title: "Kiểm Chứng & Thử Nghiệm",
      desc: "Luôn chủ động viết Unit Test và kiểm tra các trường hợp biên (Edge cases). AI có thể đưa ra gợi ý chưa chính xác hoặc chứa lỗi tiềm ẩn."
    },
    {
      title: "Minh Bạch & Khai Báo",
      desc: "Khai báo rõ ràng trong báo cáo/README các phần có sự tham gia hỗ trợ của AI (tên mô hình, mục đích sử dụng, prompt mẫu đã gửi)."
    },
    {
      title: "Trách Nhiệm Cuối Cùng",
      desc: "Lập trình viên là người chịu trách nhiệm kỹ thuật và học thuật cuối cùng cho mã nguồn mình nộp hoặc commit, không thể quy trách nhiệm cho AI."
    }
  ],
  integrityStatement: "Dự án AI Code Clinic cam kết minh bạch học thuật. Hệ thống là công cụ hỗ trợ người học tạo prompt định hướng tư duy theo phương pháp sư phạm, không tự giải hộ hay viết sẵn mã nộp bài. Toàn bộ mã nguồn chỉ xử lý nội bộ trên trình duyệt, không gửi đến máy chủ bên ngoài. Khi dán prompt sang các công cụ AI (ChatGPT, Gemini), dữ liệu do nền tảng đó xử lý; người học cần lưu ý không dán thông tin cá nhân hoặc khóa bí mật. Prompt chỉ yêu cầu AI không đưa lời giải hoàn chỉnh; người học tự chịu trách nhiệm kiểm chứng lại mọi kết quả.",
  aiToolsDeclared: [
    "Hệ thống web hoạt động 100% trên trình duyệt để tạo prompt sư phạm có cấu trúc, hoàn toàn không tự động gọi API hay phân tích mã nguồn bằng AI.",
    "Người học tự sao chép prompt và gửi sang các công cụ AI (như ChatGPT, Gemini) để nhận phản hồi gợi ý tự học.",
    "Trong quá trình làm dự án, nhóm dùng ChatGPT (xác định câu hỏi nghiên cứu, lập kế hoạch, tìm từ khóa tài liệu), Claude (soạn bản nháp đề cương) và Antigravity (hỗ trợ xây dựng web).",
    "Dữ liệu khảo sát trên web là dữ liệu giả lập do AI tạo theo hướng dẫn của giảng viên, không phải kết quả khảo sát sinh viên thật.",
    "Mọi số liệu, trích dẫn do AI tạo ra đều được nhóm kiểm tra lại; nhóm chịu trách nhiệm về nội dung cuối cùng."
  ],
  limitations: [
    "Mã nguồn chỉ được xử lý nội bộ trên trình duyệt để tạo prompt; hệ thống không lưu trữ hay gửi mã nguồn lên máy chủ nào. Khi dán prompt lên ChatGPT/Gemini, dữ liệu do nền tảng đó xử lý (vui lòng không dán thông tin cá nhân hoặc khóa bí mật).",
    "Prompt chỉ yêu cầu AI không đưa lời giải đầy đủ; AI vẫn có thể làm khác, hãy tự kiểm tra kết quả.",
    "Số liệu khảo sát là dữ liệu giả lập nên không dùng để rút kết luận về sinh viên thật.",
    "Thiết kế khảo sát là cắt ngang, dữ liệu tự báo cáo; nếu là dữ liệu thật thì chọn mẫu thuận tiện nên không đại diện cho toàn bộ sinh viên CNTT.",
    "Kết quả chỉ mô tả và phân tích mối liên quan, không kết luận nhân quả."
  ]
};

// Danh mục chủ đề YouTube theo từng ngôn ngữ lập trình phục vụ tự học (YT_TOPICS)
const YT_TOPICS = {
  c: ["con trỏ", "mảng", "vòng lặp", "hàm", "chuỗi", "scanf printf", "struct", "đệ quy"],
  cpp: ["vector", "con trỏ & tham chiếu", "vòng lặp", "hàm", "string", "class & OOP", "struct", "đệ quy"],
  javascript: ["bất đồng bộ async await", "mảng & phương thức mảng", "DOM & sự kiện", "hàm & arrow function", "fetch API", "object & JSON", "scope & closure", "Promise"],
  python: ["list & dictionary", "vòng lặp for while", "hàm", "xử lý chuỗi", "đọc ghi file", "xử lý ngoại lệ try except", "class OOP", "đệ quy"]
};

const LINKS = {
  form: "https://docs.google.com/forms/d/e/1FAIpQLSfYNAzZ3486VFMZlixEimeTGq1_EZkgwAZ3GQl5C3YaUEOOzw/viewform",
  notebookLM: "https://notebook.google.com/notebook/04e96e59-d0cd-476d-bd29-d5ceb439ca86",
  appsScript: "",
  video: ""
};

const SURVEY = {
  isPlaceholder: false,
  meta: {
    period: "01/11/2026 - 08/11/2026",
    sample: "Sinh viên tất cả các ngành"
  },
  highlights: [
    { value: "100", label: "Sinh viên hoàn thành khảo sát" },
    { value: "4", label: "Khối năm học (Năm 1 đến Năm 4)" },
    { value: "5", label: "Sơ đồ biểu đồ phân tích chuyên sâu" },
    { value: "r = -0.01", label: "Hệ số tương quan phụ thuộc & tự học" }
  ],
  charts: [
    {
      id: "so-do-1",
      number: "Sơ đồ 1",
      title: "So sánh các công cụ AI được sử dụng theo năm học",
      image: "assets/charts/so-do-1-cong-cu-ai-theo-nam-hoc.png",
      alt: "Sơ đồ 1: So sánh các công cụ AI được sử dụng theo năm học",
      desc: "Thống kê số lượng sinh viên sử dụng ChatGPT, Claude AI, Copilot/Cursor và Gemini qua 4 năm học. Sinh viên năm 3 và năm 4 có xu hướng sử dụng Gemini và Copilot/Cursor tăng đáng kể để phục vụ các bài toán và đồ án chuyên sâu."
    },
    {
      id: "so-do-2",
      number: "Sơ đồ 2",
      title: "Cơ cấu tần suất sử dụng AI theo năm học (%)",
      image: "assets/charts/so-do-2-co-cau-tan-suat-theo-nam-hoc.png",
      alt: "Sơ đồ 2: Cơ cấu tần suất sử dụng AI theo năm học (%)",
      desc: "Cơ cấu tỷ lệ phần trăm các mức độ sử dụng AI trong tự học. Sinh viên năm nhất ghi nhận tần suất sử dụng hàng ngày cao nhất (40.0%), trong khi sinh viên năm cuối sử dụng điều độ hơn với 34.6% chọn mức 1 - 2 lần/tuần."
    },
    {
      id: "so-do-3",
      number: "Sơ đồ 3",
      title: "So sánh mức độ phụ thuộc AI theo tần suất sử dụng",
      subtitle: "Đã kiểm soát & đánh dấu điểm ngoại lai Outliers",
      image: "assets/charts/so-do-3-muc-do-phu-thuoc-ai-box-plot.png",
      alt: "Sơ đồ 3: So sánh mức độ phụ thuộc AI theo tần suất sử dụng (Boxplot)",
      desc: "Biểu đồ hộp (Boxplot) trực quan hóa chỉ số phụ thuộc AI (thang 1 - 5) phân theo tần suất. Dữ liệu đã xử lý các điểm ngoại lai, trung vị mức độ phụ thuộc giữa các nhóm tần suất dao động quanh mức 3.0 điểm."
    },
    {
      id: "so-do-4",
      number: "Sơ đồ 4",
      title: "Điểm trung bình các hành vi kiểm chứng theo tần suất sử dụng AI",
      image: "assets/charts/so-do-4-hanh-vi-kiem-chung-code.png",
      alt: "Sơ đồ 4: Điểm trung bình các hành vi kiểm chứng theo tần suất sử dụng AI",
      desc: "Đánh giá 3 hành vi kiểm chứng (Chạy thử Code, Đối chiếu Tài liệu, Hiểu rõ Logic). Nhóm sinh viên dùng AI 3 - 5 lần/tuần ghi nhận điểm số hành vi kiểm chứng cao và đồng đều nhất (~3.18 - 3.29 điểm)."
    },
    {
      id: "so-do-5",
      number: "Sơ đồ 5",
      title: "Tương quan giữa mức độ phụ thuộc AI và khả năng tự học / Debug",
      subtitle: "Hệ số tương quan Pearson r = -0.01",
      image: "assets/charts/so-do-5-tuong-quan-phu-thuoc-va-debug.png",
      alt: "Sơ đồ 5: Tương quan giữa mức độ phụ thuộc AI và khả năng tự học/Debug",
      desc: "Biểu đồ phân tán và đường hồi quy tuyến tính cho thấy hệ số r = -0.01, phản ánh mức độ phụ thuộc AI chưa ghi nhận quan hệ tuyến tính đáng kể với năng lực tự giải quyết bài tập lập trình của sinh viên."
    }
  ]
};

const SAMPLE_PROBLEMS = {
  c: {
    enabled: true,
    name: "C",
    ext: "main.c",
    code: `#include <stdio.h>

int main() {
    int n;
    printf("Nhap so luong sinh vien: ");
    scanf("%d", n);
    printf("So luong: %d\\n", n);
    return 0;
}`,
    errorDesc: "Segmentation fault (core dumped) ngay sau khi nhập số. Biên dịch với gcc -Wall có cảnh báo: format '%d' expects argument of type 'int *', but argument 2 has type 'int'.",
    diagnosis: {
      bugType: "Thiếu toán tử & khi dùng scanf (truyền giá trị thay vì địa chỉ)",
      severity: "Nghiêm trọng (Runtime Error / Undefined Behavior)",
      cause: "Hàm `scanf` cần ĐỊA CHỈ của biến để ghi giá trị người dùng nhập vào. Viết `scanf(\"%d\", n)` truyền giá trị hiện tại (rác) của `n`, nên `scanf` hiểu đó là một địa chỉ bộ nhớ và ghi vào vùng nhớ không hợp lệ, dẫn tới Segmentation Fault hoặc hành vi không xác định.",
      fixedCode: `#include <stdio.h>

int main() {
    int n;
    printf("Nhap so luong sinh vien: ");
    scanf("%d", &n);   // Sửa: thêm & để truyền địa chỉ của n
    printf("So luong: %d\\n", n);
    return 0;
}`,
      concepts: [
        "Toán tử địa chỉ `&`: `&n` là địa chỉ ô nhớ của biến `n`; `scanf` cần địa chỉ để ghi dữ liệu vào đúng biến.",
        "Luôn biên dịch với cờ cảnh báo `gcc -Wall -Wextra` để compiler chỉ ra sai kiểu đối số của `scanf`.",
        "Undefined Behavior: ghi vào địa chỉ không hợp lệ không phải lúc nào cũng crash ngay, có thể gây lỗi khó đoán."
      ]
    }
  },
  cpp: {
    enabled: true,
    name: "C++",
    ext: "solution.cpp",
    code: `#include <iostream>
#include <vector>

void printAverage(const std::vector<int>& nums) {
    int sum = 0;
    for (size_t i = 0; i <= nums.size(); ++i) {
        sum += nums[i];
    }
    std::cout << "Trung bình: " << (sum / nums.size()) << std::endl;
}

int main() {
    std::vector<int> scores = {85, 90, 78, 92};
    printAverage(scores);
    return 0;
}`,
    errorDesc: "Segmentation fault (core dumped) hoặc giá trị tính toán ra số rác khổng lồ khi chạy.",
    diagnosis: {
      bugType: "Lỗi truy cập vùng nhớ ngoài biên (Off-by-One / Buffer Overflow)",
      severity: "Nghiêm trọng (Runtime Error)",
      cause: "Trong vòng lặp `for`, điều kiện dừng là `i <= nums.size()`. Trong C++, chỉ số vector bắt đầu từ 0 đến `size() - 1`. Do đó, lần lặp cuối cùng khi `i == nums.size()` sẽ đọc một ô nhớ không xác định (Undefined Behavior), dẫn đến Segmentation Fault hoặc cộng rác vào tổng. Ngoài ra, phép chia `sum / nums.size()` là phép chia nguyên, làm mất phần thập phân.",
      fixedCode: `#include <iostream>
#include <vector>
#include <numeric>

void printAverage(const std::vector<int>& nums) {
    if (nums.empty()) {
        std::cout << "Mảng rỗng!" << std::endl;
        return;
    }
    // Sửa 1: Đổi điều kiện i < nums.size() hoặc dùng Range-based for loop
    double sum = 0;
    for (int val : nums) {
        sum += val;
    }
    // Sửa 2: Ép kiểu double để phép chia ra kết quả chính xác
    std::cout << "Trung bình: " << (sum / nums.size()) << std::endl;
}

int main() {
    std::vector<int> scores = {85, 90, 78, 92};
    printAverage(scores);
    return 0;
}`,
      concepts: [
        "Chỉ mục mảng trong C++ luôn chạy từ 0 đến N-1. Luôn ưu tiên dùng Range-based for `for (auto item : container)` để tránh lỗi biên.",
        "Khái niệm Undefined Behavior: Đọc ô nhớ chưa cấp phát không phải lúc nào cũng crash ngay mà có thể gây lỗi tiềm ẩn rất khó bắt.",
        "Phép chia số nguyên (Integer Division): Nếu cả tử và mẫu đều là số nguyên, kết quả sẽ bị làm tròn xuống."
      ]
    }
  },
  javascript: {
    enabled: true,
    name: "JavaScript",
    ext: "api_fetch.js",
    code: `async function fetchStudentProfiles(userIds) {
    const profiles = [];

    userIds.forEach(async (id) => {
        const response = await fakeApiCall(id);
        profiles.push(response);
    });

    console.log("Số hồ sơ lấy được:", profiles.length);
    return profiles;
}

function fakeApiCall(id) {
    return new Promise(resolve => setTimeout(() => resolve({ id, name: "SV " + id }), 100));
}

fetchStudentProfiles([1, 2, 3]);`,
    errorDesc: "Lỗi bất đồng bộ: console.log in ra 'Số hồ sơ lấy được: 0' dù đã truyền 3 id, vì hàm kết thúc trước khi dữ liệu API kịp trả về.",
    diagnosis: {
      bugType: "Lỗi bất đồng bộ trong vòng lặp (async callback trong forEach)",
      severity: "Trung bình - Cao (Asynchronous Race Condition)",
      cause: "`Array.prototype.forEach` là hàm đồng bộ, không chờ các Promise trả về từ callback async. Vòng lặp kết thúc ngay, nên `console.log` và `return profiles` chạy trước khi `fakeApiCall` kịp resolve.",
      fixedCode: `async function fetchStudentProfiles(userIds) {
    const profiles = await Promise.all(userIds.map(id => fakeApiCall(id)));
    console.log("Số hồ sơ lấy được:", profiles.length); // 3
    return profiles;
}`,
      concepts: [
        "`Promise.all` kết hợp `map` chạy các tác vụ async song song và chờ tất cả hoàn thành.",
        "Dùng vòng lặp `for...of` với `await` khi cần chạy tuần tự từng tác vụ.",
        "`forEach`, `map`, `filter` không tự chờ async callback; phải gom Promise rồi `await`."
      ]
    }
  },
  python: {
    enabled: true,
    name: "Python",
    ext: "discount.py",
    code: `def calculate_discount(price, discounts=[]):
    discounts.append(0.1)
    final_price = price
    for d in discounts:
        final_price -= final_price * d
    return final_price, discounts

# Lần gọi 1
p1, d1 = calculate_discount(100)
print(f"Lần 1: {d1}") # [0.1]

# Lần gọi 2 của khách hàng khác
p2, d2 = calculate_discount(200)
print(f"Lần 2: {d2}") # Kỳ vọng: [0.1], Thực tế: [0.1, 0.1]!`,
    errorDesc: "Lỗi logic: Dữ liệu giữa các lần gọi hàm bị tích lũy đè lên nhau, mảng discounts ngày càng dài.",
    diagnosis: {
      bugType: "Lỗi Đối tượng Mặc định Thay đổi được (Mutable Default Argument)",
      severity: "Nguy hiểm (Silent Logic Bug)",
      cause: "Trong Python, giá trị mặc định của tham số hàm (ở đây là list rỗng `discounts=[]`) chỉ được khởi tạo MỘT LẦN DUY NHẤT khi hàm được định nghĩa (compile/load time), chứ KHÔNG PHẢI mỗi lần gọi hàm. Do `list` là kiểu dữ liệu có thể thay đổi (mutable), mọi thao tác `append` sẽ làm thay đổi cùng một danh sách dùng chung giữa tất cả các lần gọi hàm.",
      fixedCode: `def calculate_discount(price, discounts=None):
    # Chuẩn hóa Pythonic: Sử dụng None làm giá trị mặc định sentinel
    if discounts is None:
        discounts = []
    else:
        discounts = list(discounts) # Tạo bản sao an toàn (defensive copy)
        
    discounts.append(0.1)
    final_price = price
    for d in discounts:
        final_price -= final_price * d
    return final_price, discounts

p1, d1 = calculate_discount(100)
print(f"Lần 1: {d1}") # [0.1]

p2, d2 = calculate_discount(200)
print(f"Lần 2: {d2}") # [0.1] (Chính xác!)`,
      concepts: [
        "Nguyên lý Mutable vs Immutable: Không bao giờ dùng `list`, `dict` hoặc `set` làm default argument trong hàm Python.",
        "Mô hình Sentinel `arg=None`: Mẫu thiết kế chuẩn trong Python khi cần tham số mặc định dạng tập hợp.",
        "Khái niệm Call-by-object-reference: Hiểu cách Python truyền tham chiếu đối tượng qua tham số hàm."
      ]
    }
  },
  java: {
    enabled: false, // Giữ lại theo yêu cầu nhưng không hiển thị trên giao diện
    name: "Java",
    ext: "StudentManager.java",
    code: `public class StudentManager {
    private String studentName;

    public void setStudentName(String name) {
        studentName = name;
    }

    public boolean isHonorRoll() {
        return studentName.equals("Alex");
    }

    public static void main(String[] args) {
        StudentManager manager = new StudentManager();
        if (manager.isHonorRoll()) {
            System.out.println("Sinh viên xuất sắc!");
        }
    }
}`,
    errorDesc: "Exception in thread \"main\" java.lang.NullPointerException: Cannot invoke \"String.equals(Object)\" because \"this.studentName\" is null",
    diagnosis: {
      bugType: "NullPointerException (NPE) - Lỗi con trỏ rỗng",
      severity: "Nghiêm trọng (Runtime Exception)",
      cause: "Biến thành viên `studentName` có giá trị `null` khi chưa được khởi tạo. Khi gọi `studentName.equals(...)`, máy ảo ném ra `NullPointerException`.",
      fixedCode: `public boolean isHonorRoll() {
    return "Alex".equals(studentName); // Yoda condition an toàn với null
}`,
      concepts: [
        "Kỹ thuật Yoda condition: `\"CONST\".equals(variable)` tránh NPE.",
        "Sử dụng `java.util.Objects.equals(a, b)` an toàn."
      ]
    }
  }
};
