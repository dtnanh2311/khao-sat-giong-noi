/* =====================================================================
   CẤU HÌNH KHẢO SÁT MOS
   File này do bạn chỉnh. Thường thì nó được sinh tự động bằng
   make_manifest.py sau khi đã có đủ file âm thanh — xem HUONG-DAN.md.
   ===================================================================== */

window.SURVEY_CONFIG = {

  /* --- Chế độ xem thử ---------------------------------------------------
     true  : âm thanh được tổng hợp ngay trong trình duyệt, không cần file
             thật, không gửi dữ liệu đi đâu. Dùng để bấm thử toàn bộ luồng.
     false : chạy thật, đọc file âm thanh và gửi dữ liệu về Google Sheet. */
  demoMode: false,

  /* --- Nơi nhận dữ liệu -------------------------------------------------
     Dán URL /exec của Google Apps Script vào đây (xem HUONG-DAN.md mục 3). */
  submitUrl: "",

  /* Tên nghiên cứu, ghi kèm mỗi dòng dữ liệu để phân biệt các đợt khảo sát. */
  studyName: "tts-vi-mos-2026-dot1",

  /* --- Âm thanh ---------------------------------------------------------
     Đường dẫn ghép theo công thức:  audioBase + system + "/" + sentence + ext
     Ví dụ:  audio_for_survey/A/s01.wav
     LƯU Ý: thư mục thật trên GitHub tên là "audio_for_survey" (do giải nén
     từ audio_for_survey.zip giữ nguyên tên thư mục ngoài cùng), không phải
     "audio" như tên gốc trong ZIP. Nếu sau này bạn đổi tên thư mục trên
     GitHub thành "audio", nhớ sửa lại dòng audioBase này cho khớp. */
  audioBase: "audio_for_survey/",
  ext: ".wav",

  /* Các điều kiện so sánh. Mỗi tên là một thư mục con trong audio/.
     Dùng mã ẩn danh (A, B, C...) thay vì tên nhà cung cấp — vừa tránh
     ràng buộc điều khoản dịch vụ, vừa tránh thiên lệch nếu ai đó xem mã nguồn.
     H = human, bản ghi giọng người thật, đóng vai neo trên.
     L = low anchor, mẫu suy giảm có kiểm soát, đóng vai neo dưới.
     Hiện tại chỉ có A (mô hình tự huấn luyện) + H + L. Thêm B/C sau này chỉ
     cần thêm tên vào mảng này và thêm thư mục audio/B/, audio/C/ tương ứng. */
  systems: ["A", "H", "L"],

  /* Danh sách câu kiểm thử. Tên file không kèm đuôi.
     Mỗi câu phải tồn tại trong TẤT CẢ các thư mục hệ thống ở trên.         */
  sentences: [
    "s01","s02","s03","s04","s05","s06","s07","s08","s09","s10",
    "s11","s12","s13","s14","s15","s16","s17","s18","s19","s20",
    "s21","s22","s23","s24","s25","s26","s27","s28","s29","s30"
  ],

  /* --- Số lần được nghe mỗi mẫu ---------------------------------------- */
  maxPlays: 2,

  /* --- Mẫu chỉnh âm lượng ---------------------------------------------- */
  calibration: "extra/calib.wav",  /* nối với audioBase ở trên -> audio_for_survey/extra/calib.wav */

  /* --- Mẫu làm quen (không tính điểm) ----------------------------------
     Nên có đủ dải: một mẫu tệ, một mẫu trung bình, một mẫu tốt.
     Thứ tự cố ý không xếp từ tệ đến tốt để người nghe không đoán quy luật. */
  training: [
    { file: "extra/train_mid.wav"  },
    { file: "extra/train_bad.wav"  },
    { file: "extra/train_good.wav" }
  ],

  /* --- Câu hỏi vàng -----------------------------------------------------
     Mỗi file là một bản ghi ĐỌC RÕ một con số. Người trả lời sai sẽ bị
     loại ở khâu phân tích. goldCount = số câu vàng chèn vào mỗi phiên.     */
  gold: [
    { file: "extra/gold_3.wav", answer: "3" },
    { file: "extra/gold_5.wav", answer: "5" },
    { file: "extra/gold_7.wav", answer: "7" },
    { file: "extra/gold_9.wav", answer: "9" }
  ],
  goldChoices: ["3", "5", "7", "9"],
  goldCount: 2

};
