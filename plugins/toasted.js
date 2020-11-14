import Vue from 'vue';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Toasted from 'vue-toasted';

Vue.use(Toasted, {
  iconPack : 'material'
});


let error_options = {
  type: 'show',
  icon: 'error_outline',
  position: 'top-right',
  duration: 8000,
  className: 'toast_styles',
}

Vue.toasted.register('on_error',
  (payload) => {
    if (!payload.message) {
      return "Oops.. Something Went Wrong.."
    }
    return "Oops.. " + payload.message
  },
  error_options
)
