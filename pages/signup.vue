<template>
  <div class="container mx-auto">
    <div class="flex justify-center px-6 my-12">
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
            Sign Up
          </h2>
          <form
            @submit.prevent="onSubmit"
            class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
          >
            <div class="mb-4 md:flex md:justify-between">
              <div class="mb-4 md:mr-2 md:mb-0">
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
              <div class="md:ml-2">
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
            </div>
            <div class="mb-4">
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
            <div class="mb-4">
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
            <div class="mb-4">
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
            <Button buttonType="button" buttonColor="nebula" buttonWidth="full">
              Create an account
            </Button>
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

const md5 = require("md5");

export default {
  middleware: 'user',
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
      console.log(this.signUpForm);
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
