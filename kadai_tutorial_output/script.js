$(function(){


    // ボタンアニメーション
    $('.button-more').on('mouseover',function(){

        $(this).animate({
            opacity:0.5,
            marginLeft:20


        },100);

    });

    $('.button-more').on('mouseout',function(){

        $(this).animate({
            opacity:1.0,
            marginLeft:0


        },100);

    });

    // カルーセル
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        arrows: false,


    });


    $('#submit').on('click', function (event) {
        // formタグによる送信を拒否
        event.preventDefault();
      
        // 入力チェックをした結果をresultに格納
        let result = inputCheck();

       let error= result.error;
       let message=result.message;

    //    入力の正誤判定
        if(error)
            {
                alert(message);

            }

        else
        {
            alert('お問い合わせを送信しました。')
        }
      });

    //   フォームタグ内の各部品からフォーカスが外れたら起きる関数

      $('#name').blur(function(){inputCheck()});
      $('#hurigana').blur(function(){inputCheck()});
      $('#email').blur(function(){inputCheck()});
      $('#tel').blur(function(){inputCheck()});
      $('#message').blur(function(){inputCheck()});
      $('#prefecture').blur(function(){inputCheck()});
      $('#agree').blur(function(){inputCheck()});
     
      

    // お問い合わせフォームの入力チェック
   function inputCheck() {

        console.log('a');

          // エラーのチェック結果
     let result;
 
     // エラーメッセージのテキスト
     let message = '';
 
     // エラーがなければfalse、エラーがあればtrue
     let error = false;

    //  名前のエラーチェック

     if(!$('#name').val())
        {
            console.log('a');
            $('#name').css('background-color', '#f79999');

            error = true;
            message += 'お名前を入力してください。\n';
        }

        else
        {
            $('#name').css('background-color', '#fafafa');
        }


        //  フリガナのエラーチェック
        if(!$('#hurigana').val())
        {

            console.log('a');
            $('#hurigana').css('background-color', '#f79999');

            error = true;
            message += 'お名前を入力してください。\n';
        }

        else
        {
            $('#hurigana').css('background-color', '#fafafa');
        }


        //  お問い合わせ内容のエラーチェック
        if(!$('#message').val())
        {
    
            console.log('a');
            $('#message').css('background-color', '#f79999');
    
            error = true;
            message += 'お問合わせ内容を入力してください。\n';
        }
    
        else
        {
            $('#message').css('background-color', '#fafafa');
        }

        //  メールアドレスのエラーチェック
        if($('#email').val()==''||$('#email').val().indexOf('@') == -1 ||$('#email').val().indexOf('.')==-1)
        {
            $('#email').css('background-color', '#f79999');
            error = true;
            message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';

        }

        else
        {
            $('#email').css('background-color', '#fafafa');
        }


        //  電話番号のエラーチェック
        if($('#tel').val()&&$('#tel').val().indexOf('-')==-1)
        {  
            
            $('#tel').css('background-color', '#f79999');
            error = true;
            message+='電話番号に「-」が含まれていません。\n';
                

        }

        else
        {
            $('#tel').css('background-color', '#fafafa');
        }

        // お住まいの都道府県

        if($('#prefecture').val()=="")
        {
            error = true;
            $('#prefecture').css('background-color', '#f79999');
            message+='都道府県を選択してください\n';
        }

        else 
        {
            $('#prefecture').css('background-color', '#fafafa');
        }


        //  個人情報のエラーチェック
        if($('#agree').prop('checked')==false)
        {
            console.log("a");
            error = true;
            message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
        }
    
        if(error)
        {

            $('#submit').attr('src', 'images/button-submit.png');


        }

        else
        {
            console.log("a");
            $('#submit').attr('src', 'images/button-submit-blue.png');
            
        }

        
        // エラー判定値とアラートメッセージの格納
        result={
            error:error,
            message:message

        }

        // 戻り値
        return result;
    
        
   }

});