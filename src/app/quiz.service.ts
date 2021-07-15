import { Injectable } from '@angular/core';
import { Quiz } from './quiz'
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizes: Quiz[] = [
    {
      question: 'Mức độ thanh khoản của một tài sản được xác định bởi:',
      answers: [
        "Chi phí thời gian để chuyển tài sản đó thành tiền mặt.",
        "Chi phí tài chính để chuyển tài sản đó thành tiền mặt" ,
        "Khả năng tài sản có thể được bán một cách dễ dàng với giá thị trường." ,
        "Có người sẵn sàng trả một số tiền để sở hữu tài sản đó."
      ],
      correct: 3
    },
    {
      question: 'Trong nền kinh tế hiện vật, một con gà có giá bằng 10 ổ bánh mỳ, một bình sữa có giá bằng 5 ổ bánh mỳ. Giá của một bình sữa tính theo hàng hoá khác là:',
      answers: [
        "10 ổ bánh mỳ",
        "2 con gà",
        "Nửa con gà",
        "Không có ý nào đúng"
      ],
      correct: 4
    },
    {
      question: 'Mệnh đề nào không đúng trong các mệnh đề sau đây',
      answers: [
        "Giá trị của tiền là lượng hàng hoá mà tiền có thể mua được",
        "Lạm phát làm giảm giá trị của tiền tệ",
        "Lạm phát là tình trạng giá cả tăng lên",
        "Nguyên nhân của lạm phát là do giá cả tăng lên"
      ],
      correct: 4
    },
 
  ]

  constructor() { }

  getQuizzes() {
    return this.quizes
  }
 
}
