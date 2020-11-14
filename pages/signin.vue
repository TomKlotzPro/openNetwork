<template>
  <div class="container mx-auto">
    <div class="flex justify-center px-6 my-16">
      <div class="w-full m-auto xl:w-3/4 lg:w-11/12 flex">
        <!-- first column -->
        <div
          class="w-full h-auto bg-grey-900 hidden lg:block lg:w-5/12 bg-cover rounded-lg image"
        />

        <!-- second column -->
        <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-none">
          <h2
            class="pt-4 text-3xl font-normal not-italic text-grey-600 text-center leading-tight font-hind"
          >
            Welcome Back!
          </h2>
          <form
            @submit.prevent="onSubmit"
            class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
          >
            <div class="mb-4">
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
            <div class="mb-4">
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
            <Button buttonType="button" buttonColor="nebula" buttonWidth="full">
              Sign In
            </Button>
            <hr class="mb-6 border-t mt-8" />
            <div class="text-center">
              <nuxt-link
                class="inline-block text-sm text-grey-600 align-baseline hover:text-nebula-500"
                to="/signup"
              >
                Create an Account!
              </nuxt-link>
            </div>
            <div class="text-center">
              <nuxt-link
                class="inline-block text-sm text-grey-600 align-baseline hover:text-nebula-500"
                to="/"
              >
                Forgot Password?
              </nuxt-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/Button";
import Message from "~/components/Message";
import Input from "~/components/Input";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { mapState, mapActions } from "vuex";

export default {
  middleware: 'user',
  components: { Button },
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
