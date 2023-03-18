

/**
 * description :- calculate multiplication table
 * created_at:- 18/03/2023 20:52:29
 */
function calculate(data) {
    for (let d = 1; d <= 10; d++) {
        let result = d + 'x' + data + '=' + d * data + '<br/>'
        document.getElementById('output').insertAdjacentHTML('beforeend', result)
    }
}

/**
 * description :- click event for making the result
 * created_at:- 18/03/2023 20:52:11
 */
document.getElementById('btn').addEventListener('click', function () {
    let input = document.getElementById('input').value;
    if (input == '') return alert('Input can not be empty !!');
    input = '';
    calculate(input);
});


/**
 * description :- reset
 * created_at:- 18/03/2023 20:52:23
 */
document.getElementById('btn-reset').addEventListener('click', function () {
    document.getElementById('input').value = '';
    document.getElementById('output').innerHTML = ''
});


