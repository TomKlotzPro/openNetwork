import Vue from 'vue';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Toasted from 'vue-toasted';

Vue.use(Toasted, {
  iconPack : 'material'
});

const defaultOptions = {
  type: 'show',
  position: 'top-right',
  duration: 8000,
}

const error_options = {
  ...defaultOptions,
  icon: 'error_outline',
  className: 'toast toast_error_styles',
}

const warning_options = {
  ...defaultOptions,
  icon: 'warning',
  className: 'toast toast_warning_styles',
}

const success_options = {
  ...defaultOptions,
  icon: 'done',
  className: 'toast toast_success_styles'
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

Vue.toasted.register('on_warning',
  (payload) => {
    if (!payload.message) {
      return "Hello ! Something is not quite right ! Check your user parameters !"
    }
    return "Hello ! " + payload.message
  },
  warning_options
)

Vue.toasted.register('on_success',
  (payload) => {
    if (!payload.message) {
      return "Hey! Your query was successful!"
    }
    return "Hey! " + payload.message
  },
  success_options
)
