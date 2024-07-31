
let posts = [];

const TITTLE_VALIDATION_LIMIT = 10
const TEXT_VALIDATION_LIMIT = 20


const InputTitle = document.querySelector('.InputTittle-js')
const InputText = document.querySelector('.InputText-js')
const InputBtn = document.querySelector('.button_new_post-js')
const Post_JS = document.querySelector('.post-js')
const AlertValidation = document.querySelector('.alert-validation')

InputTitle.addEventListener('input',function(){
    validation();
})

InputText.addEventListener('input',function(){
    validation();
})



function validation(){
    const TitleLength = InputTitle.value.length;
    const TextLength = InputText.value.length;

    if (TitleLength > TITTLE_VALIDATION_LIMIT) {
        AlertValidation.innerText = `Длина заголовка не должна превышать ${TITTLE_VALIDATION_LIMIT} символов.
        Лишних символов: ${TitleLength-TITTLE_VALIDATION_LIMIT} `;
        AlertValidation.classList.remove("alert-validation_hidden");
        InputBtn.disabled = true;
        return;
    }

    if (TextLength > TEXT_VALIDATION_LIMIT) {
        AlertValidation.innerText = `Длина текста не должна превышать ${TEXT_VALIDATION_LIMIT} символов 
        Лишних символов: ${TextLength-TEXT_VALIDATION_LIMIT}`;
        AlertValidation.classList.remove("alert-validation_hidden");
        InputBtn.disabled = true;
        return;
    }

    AlertValidation.innerText = '';
    AlertValidation.classList.add("alert-validation_hidden");
    InputBtn.disabled = false;
}








InputBtn.addEventListener('click',function(){
    const postFromUser = GetPostFromUser();

    SetPost (postFromUser);

    RenderPost();
});

function GetPostFromUser(){
   const title = InputTitle.value;
   const text = InputText.value;
   return {
    title: title,
    text: text
   };
};

function SetPost({title,text}){

    const NewDate = new Date();
    const CurrentDate = `${NewDate.getHours()}:${NewDate.getMinutes()}`;

    posts.push({
        title:title,
        text:text
    })
};

function getPost(){
    return posts;
}

function RenderPost(){
    const post = getPost()
    let postsHTML = '';
    
    
    
    posts.forEach(post => {
        let NewDate = new Date();
        let CurrentDate = `${NewDate.getHours()}:${NewDate.getMinutes()}`;
        let EndDate = new Date()
        let DifferentDate = Math.floor((NewDate - EndDate));

        postsHTML +=  `
        <div class="post">
            <p class="post_date">${CurrentDate}|опубликовано ${DifferentDate} минут назад</p>
            <p class="post_title">${post.title}</p>
            <p class="post_text">${post.text}</p>
        </div>
    `;
    });
    Post_JS.innerHTML = postsHTML
}


