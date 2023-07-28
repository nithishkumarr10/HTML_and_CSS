const getContents = document.querySelectorAll('.card');

getContents.forEach((card) =>{
    card.addEventListener('click', function(){
        removeActiveClasses();
        card.classList.add('active')
        
    })
})

function removeActiveClasses(){
    getContents.forEach((card) =>{
        card.classList.remove('active')
       
    })
}
