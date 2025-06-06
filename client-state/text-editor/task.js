const textEditor = document.getElementById('editor');
const btnClear = document.getElementById('clear');
const TEXT_EDITOR = 'editor';

function saveEditorOnLocalSorage(data){
        localStorage.setItem(TEXT_EDITOR, data);
}

function loadEditorFromLocalStorage(){
    const text = localStorage.getItem(TEXT_EDITOR);
    textEditor.value = text;

}

textEditor.addEventListener('input', ()=>{
    console.log(textEditor.value);
    saveEditorOnLocalSorage(textEditor.value);
});

btnClear.addEventListener('click',()=>{
    textEditor.value = '';
});

loadEditorFromLocalStorage();