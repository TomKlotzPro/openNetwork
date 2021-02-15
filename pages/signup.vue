<template>
  <div class="min-h-screen bg-white flex">
    <div
      class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img
            class="h-12 w-auto"
            src="~/assets/images/opentwk.svg"
            alt="Workflow"
          />
          <h2 class="mt-6 text-3xl font-hind font-extrabold text-sols">
            Create your account
          </h2>
          <p class="mt-2 text-sm text-gray-600 max-w">
            Or
            <nuxt-link
              to="/signin"
              class="font-medium text-nebula-500 hover:text-nedula-600"
            >
              Sign in to your account
            </nuxt-link>
          </p>
        </div>

        <div class="mt-8">
          <div>
            <div>
              <p class="text-sm font-medium text-gray-700">
                Register with
              </p>

              <div class="mt-1 grid grid-cols-3 gap-3">
                <div>
                  <a
                    href="#"
                    class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span class="sr-only">Sign in with Facebook</span>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span class="sr-only">Sign in with Twitter</span>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                      />
                    </svg>
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span class="sr-only">Sign in with GitHub</span>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-6 relative">
              <div
                class="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <form @submit.prevent="onSubmit" class="space-y-6">
              <div>
                <Input
                  name="username"
                  v-model="signUpForm.username"
                  placeholder="john95"
                  type="text"
                  :error="$v.signUpForm.username.$error"
                >
                  Username
                  <template
                    v-slot:error_required
                    v-if="!$v.signUpForm.username.required"
                  >
                    Username is required
                  </template>
                  <template
                    v-slot:error_message
                    v-if="!$v.signUpForm.username.minLength"
                  >
                    Username minimum length is 3 characters
                  </template>
                </Input>
              </div>

              <div class="space-y-1">
                <Input
                  name="name"
                  v-model="signUpForm.name"
                  placeholder="John Doe"
                  type="text"
                  :error="$v.signUpForm.name.$error"
                >
                  Name
                  <template
                    v-slot:error_required
                    v-if="!$v.signUpForm.name.required"
                  >
                    Name is required
                  </template>
                  <template
                    v-slot:error_message
                    v-if="!$v.signUpForm.name.minLength"
                  >
                    Name minimum length is 3 characters
                  </template>
                </Input>
              </div>

              <div class="space-y-1">
                <Input
                  name="email"
                  v-model="signUpForm.email"
                  placeholder="Johndoe@gmail.com"
                  type="email"
                  :error="$v.signUpForm.email.$error"
                >
                  Email
                  <template
                    v-slot:error_required
                    v-if="!$v.signUpForm.email.required"
                  >
                    Email is required
                  </template>
                  <template
                    v-slot:error_message
                    v-if="!$v.signUpForm.email.emailValidator"
                  >
                    Email address is not valid
                  </template>
                </Input>
              </div>

              <div class="space-y-1">
                <Input
                  name="password"
                  v-model="signUpForm.password"
                  placeholder="**********"
                  type="password"
                  :error="$v.signUpForm.password.$error"
                >
                  Password
                  <template
                    v-slot:error_required
                    v-if="!$v.signUpForm.password.required"
                  >
                    Password is required
                  </template>
                  <template
                    v-slot:error_message
                    v-if="!$v.signUpForm.password.minLength"
                  >
                    Password minimum length is 6 characters
                  </template>
                </Input>
              </div>

              <div class="space-y-1">
                <Input
                  name="confirmedPassword"
                  placeholder="**********"
                  v-model="signUpForm.passwordConfirmation"
                  type="password"
                  :error="$v.signUpForm.passwordConfirmation.$error"
                >
                  Confirm Password
                  <template
                    v-slot:error_required
                    v-if="!$v.signUpForm.passwordConfirmation.required"
                  >
                    Confirm Password is required
                  </template>
                  <template
                    v-slot:error_message
                    v-if="!$v.signUpForm.passwordConfirmation.sameAs"
                  >
                    Both do not match
                  </template>
                </Input>
              </div>
              <div>
                <Button buttonType="button" buttonColor="nebula" class="w-full">
                  Create an account
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="~/assets/images/signup.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import Button from "~/components/shared/Button";
import Message from "~/components/Message";
import Input from "~/components/shared/Input";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { mapState, mapActions } from "vuex";

const md5 = require("md5");

export default {
  middleware: "user",
  components: { Button },
  name: "SignUpPage",
  data() {
    return {
      signUpForm: {
        username: "",
        name: "",
        email: "",
        password: "",
        avatar: "",
        passwordConfirmation: ""
      }
    };
  },
  computed: {
    isFormValid() {
      return !this.$v.signUpForm.$nvalidi;
    }
  },
  validations: {
    signUpForm: {
      username: {
        required,
        minLength: minLength(3)
      },
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        emailValidator: email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      passwordConfirmation: {
        required,
        sameAs: sameAs("password")
      }
    }
  },
  methods: {
    onSubmit() {
      this.$v.signUpForm.$touch();
      this.signUpForm.avatar =
        "https://www.gravatar.com/avatar/" +
        md5(this.signUpForm.email.toLowerCase().trim()) +
        "?d=identicon";
      if (this.isFormValid) {
        this.$store
          .dispatch("auth/register", this.signUpForm)
          .then(_ => this.$router.push("/signin"))
          .catch(error =>
            this.$toasted.global.on_error({
              message: "an unexpected error occured, please try again!"
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
