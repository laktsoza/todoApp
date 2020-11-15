

const topInput = document.getElementById('top-input');
const newInput = document.getElementById('new-input');
const completedInput = document.getElementById('completed-input');

function addToNewInput(e) {
    
    if(e.keyCode === 13) {
        if(topInput.value) {
            let input = document.createElement('input');
            input.type = 'checkbox';
            let li = document.createElement('li');
            let label = document.createElement('label');
            label.textContent = topInput.value;
            li.appendChild(input);
            li.appendChild(label);
            newInput.appendChild(li); 
            topInput.value = ''; 
            
            
            function cheked() {
                if(input.checked === true) {
                    completedInput.appendChild(li);
                    li.removeChild(input);
                    setTimeout(function remove() {
                        completedInput.removeChild(li);
                    }, 5000)
                }
            };
            function check() {
                setTimeout(cheked, 2000)
            }
            input.addEventListener('click', check);
        }
    }   
}

topInput.addEventListener('keydown', addToNewInput);



