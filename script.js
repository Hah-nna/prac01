window.onload = function() {
// window.onload는 해당 함수 안의 코드는 웹브라우저의 모든 요소가 
// 다 준비 되어야 실행이 된다는 것
    const number = Number(prompt('몇 명 참가?'));
    const $button = document.querySelector('button');
    const $input = document.querySelector('input');
    const $word = document.querySelector('#word');
    const $order = document.querySelector('#order');
    
    let word;
    let newWord 
    
    
    const onClickButton = () => {
        if (!word) {
            word = newWord;
            $word.textContent = word;
            $input.value = '';
            const order = Number($order.textContent);
            if (order + 1 > number) {
                $order.textContent = 1;
            } else {
                $order.textContent = order + 1
            } 
        } else {
            if (word[word.length -1] === newWord[0]) {
            $word.textContent = word;
            $input.value = '';
            const order = Number($order.textContent);
            if (order + 1 > number) {
                $order.textContent = 1;
            } else {
                $order.textContent = order + 1
             }
            } else {
                alert('올바르지 않은 단어입니다.')
                $word.textContent = word;
                $input.focus = '';
        }
      }
    };
    
    const onInput = (event) => {
        newWord = event.target.value;
    }
    
    $button.addEventListener('click', onClickButton);
    $input.addEventListener('input', onInput);
    
}