document.addEventListener('DOMContentLoaded',function(){
    const submitBtn=document.getElementById('submitComment');
    const commentInput=document.getElementById("commentInput");
    const commentContainer=document.getElementById('commentsContainer')

    submitBtn.addEventListener('click',function(){
        const commentText=commentInput.value.trim();
        if(commentText){
            addComment(commentText);
            commentInput.value=""
        }
    })
});

commentContainer.addEventListener('click',(e)=>{
    if(e.target.className.contains('replyBtn')){
        const replyText=replyInput.value.trim();
        if(replyText){
            addReply(parentComment,replyText);
            replyInput.value="";
        }
    }
});
function addComment(commentText){
    const commentElement=document.createElement('div');
    commentElement.className='repliesContainer';
    commentElement.innerHTML=`
    <p>${commentText}</p>
    <button class="replyBtn">Reply</button>
    <textArea class="replyInput" placeholder="write a reply..."></textArea>`

    commentContainer.appendChild(commentElement);
}

function addReply(parentComment,text){
    const replyElement=document.createElement('div');
    
}