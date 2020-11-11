<template>
  <div class="container mx-auto">
    <Message :alertType="alert.alertType" :show="alert.alertShow" />
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
                  name="firstname"
                  v-model="signUpForm.firstName"
                  placeholder="John"
                  type="text"
                  :error="$v.signUpForm.firstName.$error"
                >
                  First Name
                  <template
                    v-slot:error_required
                    v-if="!$v.signUpForm.firstName.required"
                  >
                    First Name is required
                  </template>
                  <template
                    v-slot:error_message
                    v-if="!$v.signUpForm.firstName.minLength"
                  >
                    First Name minimum length is 3 characters
                  </template>
                </Input>
              </div>
              <div class="md:ml-2">
                <Input
                  name="lastname"
                  v-model="signUpForm.lastName"
                  placeholder="Doe"
                  type="text"
                  :error="$v.signUpForm.lastName.$error"
                >
                  Last Name
                  <template
                    v-slot:error_required
                    v-if="!$v.signUpForm.lastName.required"
                  >
                    Last Name is required
                  </template>
                  <template
                    v-slot:error_message
                    v-if="!$v.signUpForm.lastName.minLength"
                  >
                    Last Name minimum length is 3 characters
                  </template>
                </Input>
              </div>
            </div>
            <div class="mb-4">
              <Input
                name="mail"
                v-model="signUpForm.mail"
                placeholder="Johndoe@gmail.com"
                type="email"
                :error="$v.signUpForm.mail.$error"
              >
                Email
                <template
                  v-slot:error_required
                  v-if="!$v.signUpForm.mail.required"
                >
                  Email is required
                </template>
                <template
                  v-slot:error_message
                  v-if="!$v.signUpForm.mail.emailValidator"
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
                v-model="signUpForm.confirmPassword"
                type="password"
                :error="$v.signUpForm.confirmPassword.$error"
              >
                Confirm Password
                <template
                  v-slot:error_required
                  v-if="!$v.signUpForm.confirmPassword.required"
                >
                  Confirm Password is required
                </template>
                <template
                  v-slot:error_message
                  v-if="!$v.signUpForm.confirmPassword.sameAs"
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

export default {
  components: { Button },
  name: "SignUpPage",
  data() {
    return {
      signUpForm: {
        firstName: "",
        lastName: "",
        mail: "",
        password: "",
        confirmPassword: "",
      },
      alert: {
        alertType: "",
        alertShow: false,
      },
    };
  },
  validations: {
    signUpForm: {
      firstName: {
        required,
        minLength: minLength(3),
      },
      lastName: {
        required,
        minLength: minLength(3),
      },
      mail: {
        required,
        emailValidator: email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      confirmPassword: {
        required,
        sameAs: sameAs("password"),
      },
    },
  },
  methods: {
    onSubmit() {
      this.$v.signUpForm.$touch();
      this.alert.alertShow = true;
      this.$axios
        .$post("/api/signup", {
          firstname: this.signUpForm.firstName,
          lastname: this.signUpForm.lastName,
          mail: this.signUpForm.mail,
          password: this.signUpForm.password,
          confirmedpassword: this.signUpForm.confirmPassword,
        })
        .then((result) => {
          console.log(result);
          if (result.status === 200) {
            this.alert.alertType = "success";
            this.alert.alertShow = true;
          } else {
            this.alert.alertType = "danger";
            this.alert.alertShow = true;
          }
          // redirect
        })
        .catch((e) => {
          console.log(e);
          if (e.response.status === 400) {
            this.alert.alertType = "warning";
            this.alert.alertShow = true;
          } else {
            this.alert.alertType = "danger";
            this.alert.alertShow = true;
          }
        });
    },
  },
};
</script>

<style scoped>
.image {
  background-image: url("~assets/images/signup.jpg");
}
</style>
