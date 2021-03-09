<template>
  <div
    class="min-h-screen font-hind bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="~/assets/images/opentwk.svg"
        alt="Workflow"
      />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-sols">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-sols max-w">
        Or
        <nuxt-link
          to="/signup"
          class="font-medium text-nebula-500 hover:text-nebula-600"
        >
          Create an account! 🚀
        </nuxt-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="onSubmit">
          <div>
            <Input
              name="mail"
              v-model="signInForm.email"
              placeholder="johndoe@gmail.com"
              type="email"
              autofocus=""
              autocomplete="email"
              :error="$v.signInForm.email.$error"
            >
              Email
              <template
                v-slot:error_required
                v-if="!$v.signInForm.email.required"
              >
                Email is required
              </template>
              <template
                v-slot:error_message
                v-if="!$v.signInForm.email.emailValidator"
              >
                Email address is not valid
              </template>
            </Input>
          </div>

          <div>
            <Input
              name="password"
              v-model="signInForm.password"
              placeholder="**********"
              type="password"
              autocomplete="current-password"
              :error="$v.signInForm.password.$error"
            >
              Password
              <template
                v-slot:error_required
                v-if="!$v.signInForm.password.required"
              >
                Password is required
              </template>
              <template
                v-slot:error_message
                v-if="!$v.signInForm.password.minLength"
              >
                Password minimum length is 6 characters
              </template>
            </Input>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                class="h-4 w-4 text-nebula-500 focus:ring-nebula-500 border-gray-300 rounded"
              />
              <label for="remember_me" class="ml-2 block text-sm text-grey-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <nuxt-link
                to="/forgot"
                class="font-medium text-nebula-500 hover:text-nebula-600"
              >
                Forgot your password?
              </nuxt-link>
            </div>
          </div>

          <div>
            <Button class="w-full" buttonType="button" buttonColor="nebula">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/shared/Button";
import Message from "~/components/Message";
import Input from "~/components/shared/Input";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { mapState, mapActions } from "vuex";

export default {
  middleware: "user",
  components: {
    Button,
    Input
  },
  name: "SignInPage",
  data() {
    return {
      signInForm: {
        email: "",
        password: ""
      }
    };
  },
  validations: {
    signInForm: {
      email: {
        required,
        emailValidator: email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  computed: {
    isFormValid() {
      return !this.$v.$invalid;
    }
  },
  methods: {
    onSubmit() {
      this.$v.signInForm.$touch();
      if (this.isFormValid) {
        this.$store
          .dispatch("auth/login", this.signInForm)
          .then(() => this.$router.push("/"))
          .catch(() =>
            this.$toasted.global.on_error({
              message: "Wrong Email or Password"
            })
          );
      }
    }
  }
};
</script>

<style scoped>
.image {
  background-image: url("~assets/images/signup.jpg");
}
</style>
