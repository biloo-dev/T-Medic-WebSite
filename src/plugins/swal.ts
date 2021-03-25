 
import Vue from 'vue'
import moment from 'moment'
import { Context, Plugin } from '@nuxt/types' 
import Swal from 'sweetalert2'
  
function make (context: Context) { 
    const swalWithBootstrapButtons = Swal.mixin({ 
        customClass: {
            confirmButton: 'btn btn-success mx-2',
            cancelButton: 'btn btn-danger mx-2'
        },
        buttonsStyling: false
    })
    let trans = (str :string) : string =>{
        return  context.app.t('general.' + str) 
    }
    let logout = async () =>{  
        await context.$auth.logout() 
    }
    const Toast = Swal.mixin({
        toast: true, 
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,  
        didOpen: (toast) => {
            if (toast) {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer) 
            }
        }
    })
    return {
        success(title : string ,icon : string) : void {
           Toast.fire({  
                icon : 'success',
                position: 'top-end',
                iconHtml: icon,
                title: title, 
            }) 
        },
        error(title : string ,icon : string) : void {
           Toast.fire({
                icon :"error",
                // iconHtml: '<svg height="100pt" style="background:#fff" viewBox="-34 0 512 512" width="100pt" xmlns="http://www.w3.org/2000/svg"></svg>',
                position: 'bottom-end',
                timer: 7000, 
                title: title, 
            }) 
        },
        delete(){ 
           return swalWithBootstrapButtons.fire({
                title: trans('titleDelete'),
                text: trans('textDelete'), 
                icon: 'question',
                iconHtml: '<svg id="Capa_1" enable-background="new 0 0 512 512" height="120" style="background: #fff;" viewBox="0 0 512 512" width="120" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m415.158 85.758c-.268.087-93.932 27.686-94.198 27.777-10.041 3.493-16.788 12.983-16.788 23.614v42.223c0 8.285 6.716 15.001 15.001 15.001h114.008c8.285 0 15.001-6.716 15.001-15.001v-69.935c0-17.077-16.817-29.172-33.024-23.679z" fill="#ff5e94"/><path d="m160.161 164.371v282.624c0 35.844 29.161 65.005 65.005 65.005h158.012c35.844 0 65.005-29.161 65.005-65.005 0-15.734 0-274.731 0-282.624z" fill="#9dcfff"/><path d="m304.172 164.371v347.629h79.006c35.843 0 65.005-29.162 65.005-65.005v-282.624z" fill="#72bbff"/><g fill="#5a5a5a"><path d="m237.431 233.376c-8.285 0-15.001 6.716-15.001 15.001v179.616c0 8.285 6.716 15.001 15.001 15.001s15.001-6.716 15.001-15.001v-179.616c0-8.285-6.717-15.001-15.001-15.001z"/><path d="m304.171 233.376c-8.285 0-15.001 6.716-15.001 15.001v179.616c0 8.285 6.716 15.001 15.001 15.001s15.001-6.716 15.001-15.001v-179.616c0-8.285-6.716-15.001-15.001-15.001z"/></g><g fill="#444"><path d="m319.172 248.381v179.613c0 8.281-6.72 15.001-15.001 15.001v-209.615c8.281 0 15.001 6.71 15.001 15.001z"/><path d="m370.912 233.376c-8.285 0-15.001 6.716-15.001 15.001v179.616c0 8.285 6.716 15.001 15.001 15.001s15.001-6.716 15.001-15.001v-179.616c0-8.285-6.716-15.001-15.001-15.001z"/></g><path d="m192.17 18.07s0 0-.01 0c-15.336-9.588-36.016-7.793-49.46 5.65v.01l-27.58 27.57-27.58 27.58c-15.6 15.6-15.6 40.98 0 56.57l14.15 14.15 20.31-2.1.9-19.12-14.14-14.14c-3.9-3.9-3.9-10.25 0-14.14l27.58-27.58 27.57-27.58h.01c3.689-3.689 10.025-4.116 14.13-.01l14.15 14.15 18.55-3.08 2.67-18.13c-14.806-14.806-16.41-16.818-21.25-19.8z" fill="#5a5a5a"/><path d="m192.17 18.07s0 0-.01 0c-15.297-9.564-35.968-7.831-49.46 5.66l-27.58 27.57 21.22 21.22 27.58-27.58c3.686-3.686 10.017-4.124 14.13-.01l14.15 14.15 21.22-21.21c-15.291-15.291-16.162-16.574-21.25-19.8z" fill="#444"/><path d="m317.418 37.108-26.872-26.872c-13.647-13.647-35.853-13.647-49.501 0l-166.992 166.991c-13.647 13.647-13.647 35.853 0 49.501l26.872 26.872c5.857 5.858 15.356 5.859 21.214 0l195.279-195.278c5.858-5.858 5.858-15.356 0-21.214z" fill="#3ba9ff"/><path d="m290.545 10.236 26.872 26.872c5.855 5.855 5.862 15.352 0 21.215l-97.637 97.637-62.23-62.23 83.494-83.494c13.648-13.648 35.853-13.648 49.501 0z" fill="#0081ff"/></g></g></svg>',
                showCancelButton: true,
                confirmButtonText: trans('confirmButtonDelete'),
                cancelButtonText: trans('cancelButtonText'),
                reverseButtons: true
            })
        },
        logout(){ 
            swalWithBootstrapButtons.fire({
                title: trans('title'),
                text: trans('text'), 
                icon: 'question',
                iconHtml: '<svg height="100pt" viewBox="-34 0 512 512" width="100pt" xmlns="http://www.w3.org/2000/svg"><path d="m165.949219 502.269531-158.449219-41.695312v-409.148438l158.449219-41.695312zm0 0" fill="#f8e868"/><path d="m37.5 460.574219v-409.148438l128.449219-33.800781v-7.894531l-158.449219 41.695312v409.148438l158.449219 41.695312v-7.894531zm0 0" fill="#e39c2d"/><path d="m133.515625 256c0 10.535156-8.539063 19.070312-19.070313 19.070312-10.535156 0-19.074218-8.535156-19.074218-19.070312s8.539062-19.070312 19.074218-19.070312c10.53125 0 19.070313 8.535156 19.070313 19.070312zm0 0" fill="#e5ebf5"/><path d="m317.332031 223.988281h-151.382812v81.691407h151.382812v45.699218l113.894531-86.546875-113.894531-86.546875zm0 0" fill="#d15573"/><path d="m165.949219 223.988281h30v81.691407h-30zm0 0" fill="#c21d44"/><path d="m165.949219 56.832031h104.242187v167.15625h-104.242187zm0 0" fill="#e5ebf5"/><path d="m165.949219 305.679688h104.242187v149.488281h-104.242187zm0 0" fill="#e5ebf5"/><path d="m165.949219 56.832031h30v167.15625h-30zm0 0" fill="#cad8ea"/><path d="m165.949219 305.679688h30v149.488281h-30zm0 0" fill="#cad8ea"/><path d="m165.949219 305.679688h71.8125v117.058593h-71.8125zm0 0" fill="#72869e"/><path d="m165.949219 89.261719h71.8125v134.726562h-71.8125zm0 0" fill="#72869e"/><path d="m165.949219 305.679688h30v117.058593h-30zm0 0" fill="#536275"/><path d="m165.949219 89.261719h30v134.726562h-30zm0 0" fill="#536275"/><path d="m274.28125 272.023438h-15v-15h15zm-25 0h-15v-15h15zm0 0" fill="#fff"/><path d="m0 466.355469 173.449219 45.644531v-512l-173.449219 45.644531zm15-409.148438 143.449219-37.75v473.085938l-143.449219-37.75zm0 0"/><path d="m114.445312 229.425781c-14.652343 0-26.574218 11.921875-26.574218 26.574219s11.921875 26.574219 26.574218 26.574219c14.652344 0 26.570313-11.921875 26.570313-26.574219s-11.917969-26.574219-26.570313-26.574219zm0 38.144531c-6.382812 0-11.574218-5.1875-11.574218-11.570312s5.191406-11.570312 11.574218-11.570312c6.378907 0 11.570313 5.1875 11.570313 11.570312s-5.191406 11.570312-11.570313 11.570312zm0 0"/><path d="m262.691406 195.984375h15v-146.652344h-84.242187v15h69.242187zm0 0"/><path d="m262.691406 447.667969h-69.242187v15h84.242187v-128.988281h-15zm0 0"/><path d="m443.625 264.832031-133.792969-101.664062v53.320312h-116.382812v15h131.382812v-38.085937l94 71.429687-94 71.429688v-38.082031h-131.382812v15h116.382812v53.320312zm0 0"/><path d="m230.257812 195.984375h15.003907v-114.222656h-51.8125v15h36.808593zm0 0"/><path d="m245.261719 333.679688h-15.003907v81.558593h-36.808593v15h51.8125zm0 0"/></svg>',
                showCancelButton: true,
                confirmButtonText: trans('confirmButtonText'),
                cancelButtonText: trans('cancelButtonText'),
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    logout()
                } 
            })
        },
        formatDate(str : string) : any { 
            let locale = context.store.state.locale.current
            this.setLangMoment(locale)
            return moment(str).format('LL');;
        },
        fromNow(str : string) : any { 
            let locale = context.store.state.locale.current
            this.setLangMoment(locale)
            return moment(str).fromNow();
        }, 
        setLangMoment(str : string) {  
           moment.locale(str);
        },
        st(str : number) {  
            if(str == 0) return { title :context.app.t('profile.pending'), icon:"fas fa-clock" , color:"primary" }
            if(str == 1) return { title :context.app.t('profile.shipped'), icon:"fas fa-clipboard-check" , color:"success" }
            if(str == 2) return { title :context.app.t('profile.canceled'), icon:"fas fa-times-circle" , color:"danger" }
            if(str == 3) return { title :context.app.t('profile.holde'), icon:"fas fa-holde" , color:"gray" }
        },
        increment(num : string) : string { 
            num = num ? num : "0"
            let order = "0000"
            let inc = order.substring(num.toString().length);
            return inc + num
        } 
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $Swal: ReturnType<typeof make> & Context
    }
}

declare module '@nuxt/types' {
    interface Context {
        $Swal: ReturnType<typeof make> & Context
    }
}

const plugin: Plugin = (context, inject) => {
    inject('Swal', make(context))
}

export default plugin