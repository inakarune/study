    var input = prompt('가위바위보를 합시다.');

    while (true){
     if ( input === '가위' || input === '바위' || input === '보' ){

      var random = Math.ceil(Math.random() * 10)

       if (random < 3){
        console.log("가위")
            if ('가위' && input === '가위'){
              alert('비겻어요')
            } else if ('가위' && input === '바위'){
              alert('이겻어요')
            } else {
              alert('졋어요')
            }
       } else if (random > 6){
        console.log("바위")
            if ('바위' && input === '가위'){
              alert('졋어요' + '\n' + '당신이 낸 건 가위' + '\n' + '컴퓨터가 낸 건 바위');
            } else if ('바위' && input === '바위'){
              alert('비겻어요')
            } else {
              alert('이겻어요')
            }
       } else {
        console.log("보")
            if ('보' && input === '가위'){
              alert('이겻어요')
            } else if ('보' && input === '바위'){
              alert('졋어요')
            } else {
              alert('비겻어요')
            }
       }
     } else {
       alert('종료합니다.')
       break;
     }

     var gameOneMore = prompt('게임 한판 더 할래요? 네, 아니오 중 하나를 입력해주세요.');

     if (gameOneMore === '네'){
       input = prompt('가위바위보를 합시다.');
     } else {
       alert('종료합니다.')
       break;
     }
}
