import { initializeAxios } from '~/utils/api' 
import { Context } from '@nuxt/types'
interface ErrorValidation {
  field: string
  message: string
  validation: string
}
 
const accessor = (context :Context) => {
  // console.log('context :>> ', context);
  context.$axios.setBaseURL('http://127.0.0.1:3333/api/')
  context.$axios.onError(error => {
    if (error.response) {
      if (error.response.status == 400) {
        if (Array.isArray(error.response.data)) {
          let msg = "<ul class='list-group'>"
          error.response.data.forEach(err => { 
            msg += `<li class="msg_errorList list-group-item"><b-alert show variant="danger"><i class="fas fa-times-circle mx-2"></i>${context.app.t(`validation.${err.validation}.${err.field}`)}</b-alert></li>`
            console.log('validation :>> ', context.app.t(`validation.${err.validation}.${err.field}`));
          })
          msg += "</ul>"
          context.app.$Swal.error(msg)
        }
 
      }
      if (error.response.status == 401) {
        // context.$auth.logout()
        context.app.router ? context.app.router.push("/") : '';
      }
      console.log("error.response.data >>", error.response.data);
      console.log("error.response.status >>", error.response.status);
      console.log("error.response.headers >>", error.response.headers);
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log("error.request >>", error.request);
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log("Error error.message >>", error.message);
    }
    console.log('Error', error);
    return Promise.resolve(false);
  })
  initializeAxios(context.$axios)
}

export default accessor