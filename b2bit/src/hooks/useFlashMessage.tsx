import bus from '../utils/bus'

export default function useFlashMessage(){
    function setFlashMessage(msg:any, type:any){
        bus.emit('flash', {
            message: msg,
            type: type,
        })
    }

    return { setFlashMessage }
}