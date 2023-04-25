/*******Mostra menu********/

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId), 
    nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        //adicione a classe show-menu ao menu de navegação//
        nav.classList.toggle('show-menu');

        //adicionar show-icon e ocultar o ícone do menu//
        toggle.classList.toggle('show-icon');
    });
};
showMenu('nav-toggle', 'nav-menu');


/****mostrar menu suspenso****/
const dropdownItems = document.querySelectorAll('.dropdown__item');

//1. Selecione cada item suspenso//
dropdownItems.forEach((item) => {

    const dropdownButton = item.querySelector('.dropdown__button');

    //2. Selecione cada clique do botão//
    dropdownButton.addEventListener('click', () => {
        //7.selecione a classe suspensa de exibição atual//
        const showDropdown = document.querySelector('.show-dropdown')


        //5. Chame a função de alternar item//
        toggleItem(item);

        //8. remova a classe show-dropdown de outros itens//

        if(showDropdown && showDropdown!= item){
                toggleItem(showDropdown)
        }
    });
});
// 3.crie uma função para exibir o menu suspenso//
const toggleItem = (item) =>{
    //3.1 selecione cada conteúdo suspenso//
    const dropdownContainer = item.querySelector('.dropdown__container');



//6.se o mesmo item contiver a classe show-dropdown, remova//
if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    }else{
        //4. Adicione a altura máxima ao conteúdo suspenso e à classe show-dropdown//
    dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
    item.classList.add('show-dropdown');
    }    
};

/**********excluir estilos suspensos************/
const mediaQuery = matchMedia('(min-width :1118px)'),
dropdownContainer = document.querySelectorAll('.dropdown__container')

////Função para remover estilos dropdown no modo mobile quando o navegador redimensiona//
const removeStyle = () =>{
    //Valide se a consulta de mídia atingir 1118px//
    if(mediaQuery.matches){
       //remova o estilo de altura do contêiner suspenso//
       dropdownContainer.forEach((e)  =>{
        e.removeAttribute('style')
       })
       //remova a classe show-dropdown do item dropdown//
       dropdownItems.forEach((e) =>{
        e.classList.remove('show-dropdown')
       })
    }
}
addEventListener('resize', removeStyle)




