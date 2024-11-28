const abrirModal = ({ event = false, id = '', drawer = false }) => {
    if(event)event.preventDefault();
    const dialog = document.querySelector(`#${id}`); 
    if (drawer) dialog.show();
    else dialog.showModal();
}
const cerrarModal=({event=false,id=''})=>{
    if(event)event.preventDefault();
    const dialog = document.querySelector(`#${id}`); 
    dialog.close();
}