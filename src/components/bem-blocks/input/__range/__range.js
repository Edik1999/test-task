document.addEventListener('DOMContentLoaded', () => {
    let range = document.querySelector('#range'),
        output = document.querySelector('#outputForRange');

    if(range){
        range.addEventListener('input', (e) => {
            output.value = e.target.value + ' %'
        })    
    }
})