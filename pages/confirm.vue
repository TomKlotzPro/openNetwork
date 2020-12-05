<template>
<div>
    <div class="hero bg-gray-100 py-16 mb-6">
      <div class="container px-6 sm:px-16 lg:px-20 xl:px-24 mx-auto">
      <p class="text-center text-grey-500 text-lg md:text-2xl mt-8 font-normal leading-snug font-hind" v-if="success">Your email has been confirmed ! Please log in.</p>
      <p class="text-center text-grey-500 text-lg md:text-2xl mt-8 font-normal leading-snug font-hind" v-else>The token is either invalid or expired 😢</p>
      <Button
        v-if="success"
        buttonType="button"
        buttonColor="nebula"
        buttonWidth="full"
        to="/signin"
      >
        Sign In
      </Button>

      <form
            @submit.prevent="onSubmit"
            class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
          >
        <Input
          v-if="success === false"
          name="mail"
          v-model="emailForm.email"
          placeholder="johndoe@gmail.com"
          type="email"
          autofocus=""
          autocomplete="email"
          :error="$v.emailForm.email.$error"
        >
          Email
          <template
            v-slot:error_required
            v-if="!$v.emailForm.email.required"
          >
            Email is required
          </template>
          <template
            v-slot:error_message
            v-if="!$v.emailForm.email.emailValidator"
          >
            Email address is not valid
          </template>
        </Input>
        <Button buttonType="button" buttonColor="nebula" buttonWidth="full" v-if="success === false">
          Resend confirmation email
        </Button>
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
export default {
  // 2 possible cases :
  // token invalid or expired => hide sign in btn and display error message
  // token validation successful => show sign in btn and display success message
  name: "confirmEmail",
  components: {
    Button,
    Input
  },
  data() {
    return {
      success: null,
      emailForm: {
        email: ""
      }
    }
  },
  validations: {
    emailForm: {
      email: {
        required,
        emailValidator: email
      },
    }
  },
  mounted() {
    console.log(this.$route)
    const { token } = this.$route.query;
    console.log("mon token", token)
    this.$store
      .dispatch("auth/confirmEmail", token)
      .then(data => {
        console.log(data)
        this.success = true
        return data
      })
      .catch((err) => {
        this.success = false
        console.log('test', err)
      });
  },
  computed: {
    isFormValid() {
      return !this.$v.$invalid;
    }
  },
  methods: {
    onSubmit() {
      this.$v.emailForm.$touch();
      if (this.isFormValid) {
        this.$store
          .dispatch("auth/sendConfirmationEmail", this.emailForm.email)
          .then(() => console.log("email resent"))
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