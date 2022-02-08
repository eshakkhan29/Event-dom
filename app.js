// onclick diye function name diye 
function colorBlue(){
    document.body.style.backgroundColor = 'blue';
}

// making function 

const redColor = document.getElementById('make-red-button');
        redColor.onclick = makeRed;
        function makeRed() {
            document.body.style.backgroundColor = 'red';
        }


// no name funtion 

document.getElementById('color-green').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
   })

// type delete to confirm 

        document.getElementById('submit').addEventListener('click', function () {
            document.getElementById('deleteThis').style.display = 'none';
        })

        document.getElementById('userName').addEventListener('keyup', function (event) {
            const deletThis = document.getElementById('submit');
            if (event.target.value == 'delete') {
                deletThis.removeAttribute('disabled');
            }
            else{
                deletThis.setAttribute('disabled', true);
            }
        })
        document.getElementById('userName').addEventListener('change', function () {
            const inputFeald = document.getElementById('userName');
            console.log(inputFeald.value);
        })


// comment added 

document.getElementById('post-btn').addEventListener('click', function(){
    const userComment = document.getElementById('comment-box');
    
      const newComment = document.createElement('p')
      newComment.innerText = userComment.value;
    //   console.log(newComment);

      const setComment = document.getElementById('comment');
      setComment.appendChild(newComment);

      userComment.value = ' ';
   })