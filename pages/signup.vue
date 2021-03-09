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
