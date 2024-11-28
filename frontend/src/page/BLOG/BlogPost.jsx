import { assets } from '../../assets/assets'

const BlogPost = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Tiêu đề bài viết */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-900 duration-300">
          7 Cách Ôn Thi Trắc Nghiệm Hiệu Quả, Điểm Cao
        </h1>
        <p className="mt-2 text-lg text-gray-500 font-medium">
          Ngày đăng: 17/04/2024
        </p>
      </div>

      {/* Phần ảnh nằm ngay dưới tiêu đề */}
      <div className="flex justify-center items-center w-full mb-12">
        <img
          src={assets.BANNERBLOG2} // Thay đường dẫn ảnh ở đây
          alt="EduQuiz"
          className="w-full h-auto object-cover rounded-lg shadow-lg border-4 border-gray-200 hover:border-purple-600 transition-all duration-300"
        />
      </div>

      {/* Nội dung bài viết */}
      <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">
        {/* Phần bên phải: Nội dung bài viết */}
        <div className="w-full lg:w-2/3 mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
            <span className="font-bold">Trong bài viết này,</span> chúng tôi sẽ
            chia sẻ với các bạn 7 cách ôn thi trắc nghiệm hiệu quả để đạt điểm
            cao. Những cách thức này đã được chứng minh là giúp học sinh, sinh
            viên có thể cải thiện điểm số của mình nhanh chóng và dễ dàng.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
            <span className="font-bold">Cách 1:</span> Lập kế hoạch học tập chi
            tiết và hợp lý. Đảm bảo rằng bạn dành thời gian cho mọi môn học,
            không bỏ qua bất kỳ phần nào quan trọng. Bạn cần xác định rõ mục
            tiêu ôn thi cho từng môn và chia nhỏ thời gian học hợp lý để tránh
            việc dồn ép vào những ngày cuối cùng.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
            <span className="font-bold">Cách 2:</span> Làm các bài tập trắc
            nghiệm thật nhiều. Việc luyện tập đều đặn giúp bạn nắm vững cấu trúc
            đề thi và cải thiện tốc độ làm bài. Bạn có thể tìm các đề thi cũ,
            các bộ đề online để ôn tập và luyện đề. Cố gắng làm bài thi trong
            thời gian giới hạn để cải thiện kỹ năng làm bài.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
            <span className="font-bold">Cách 3:</span> Ôn lại những kiến thức đã
            học và rút ra bài học kinh nghiệm. Thường xuyên tự đánh giá bản thân
            để nhận ra điểm mạnh và điểm yếu. Việc này sẽ giúp bạn tập trung vào
            các phần mình yếu và cải thiện chúng. Đừng quên tạo thói quen tự
            kiểm tra và đánh giá bài làm của mình sau mỗi buổi học.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
            <span className="font-bold">Cách 4:</span> Tham gia nhóm học tập để
            trao đổi kiến thức. Cùng nhau học sẽ giúp bạn củng cố kiến thức, học
            hỏi được những cách làm bài mới, đồng thời có thể giải đáp các thắc
            mắc của nhau. Việc học nhóm còn giúp tạo động lực và tạo ra môi
            trường học tập thoải mái.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
            <span className="font-bold">Cách 5:</span> Đừng quên nghỉ ngơi hợp
            lý. Việc học quá nhiều mà không nghỉ ngơi có thể làm giảm hiệu quả
            học tập. Hãy dành thời gian cho việc nghỉ ngơi, thư giãn để giúp
            tinh thần luôn tỉnh táo và sẵn sàng tiếp nhận kiến thức mới.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
            <span className="font-bold">Cách 6:</span> Tập trung vào các môn học
            có trọng số cao. Các môn học có điểm số cao trong kỳ thi nên được
            bạn chú ý đặc biệt hơn. Đặt mục tiêu đạt điểm cao ở các môn này để
            đảm bảo tổng điểm của bạn sẽ tốt hơn.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
            <span className="font-bold">Cách 7:</span> Học các mẹo làm bài thi
            trắc nghiệm. Các mẹo như loại trừ đáp án sai, làm các câu hỏi dễ
            trước và sau đó quay lại làm các câu khó, hay đọc kỹ câu hỏi trước
            khi làm bài sẽ giúp bạn tiết kiệm thời gian và đạt được điểm cao
            hơn.
          </p>
        </div>
      </div>

      {/* Kết luận bài viết */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Kết Luận</h2>
        <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Việc ôn thi trắc nghiệm hiệu quả không chỉ dựa vào việc học bài mà còn
          vào chiến lược làm bài đúng đắn. Hãy áp dụng những cách thức này vào
          quá trình ôn thi của bạn để đạt được kết quả tốt nhất!
        </p>
      </div>
    </div>
  )
}

export default BlogPost
