const a = (page)=>{
    location.href = page;
}
const question_lists = [
    '',
    '1번: 노랑나비, 2번: 먹부전나비, 3번: 남방부전나비, 4번: 배추흰나비, 5번: 산제비나비, 6번: 산호랑나비',
    '1번: 애매미, 2번: 털매미, 3번: 참매미, 4번: 말매미, 5번: 유지매미',
    '1번: 된장잠자리, 2번: 나비잠자리, 3번: 장수잠자리, 4번: 연분홍실잠자리, 5번: 물잠자리, 6번: 고추잠자리 ',
    '1번: 이토왕개미, 2번: 유령개미, 3번: 꿀단지개미, 4번: 곰개미 ',
];
const answer_lists = [
    '',
    '3',
    '1',
    '2',
    '4',
    '6',
    '5',

    '4',
    '1',
    '5',
    '3',
    '2',

    '6',
    '2',
    '1',
    '5',
    '4',
    '3',

    '4',
    '3',
    '2',
    '1',
];
const question = (question, answer)=>{
    alert("객관식 문제입니다. 답을 작성할 때 \"번호\"만 작성해주세요. ")
    let input = prompt(question_lists[question]);
    if(answer_lists[answer] === input){
        alert("정답입니다!");
    }else{
        alert("오답입니다!");
    }
}