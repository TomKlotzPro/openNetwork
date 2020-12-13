<template>
  <div class="py-24 container mx-auto">
    <div class="flex justify-center px-6 my-16">
      <div class="w-full m-auto xl:w-3/4 lg:w-11/12 flex">
        <!-- first column -->
        <div
          class="w-full h-80 bg-grey-900 hidden lg:block lg:w-5/12 bg-cover rounded-lg image"
        />

        <!-- second column -->
        <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-none">
          <h2
            class="pt-4 text-3xl font-normal not-italic text-grey-600 text-center leading-tight font-hind"
          >
            Reset Password
          </h2>
          <form
            @submit.prevent="onSubmit"
            class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
          >
            <div class="mb-4">
              <Input
                name="mail"
                v-model="forgot.email"
                placeholder="johndoe@gmail.com"
                type="email"
                autofocus=""
                autocomplete="email"
                :error="$v.forgot.email.$error"
              >
                Email
                <template
                  v-slot:error_required
                  v-if="!$v.forgot.email.required"
                >
                  Email is required
                </template>
                <template
                  v-slot:error_message
                  v-if="!$v.forgot.email.emailValidator"
                >
                  Email address is not valid
                </template>
              </Input>
            </div>
            <Button buttonType="button" buttonColor="nebula" buttonWidth="full">
              Reset
            </Button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/shared/Button";
import Message from "~/components/Message";
import Input from "~/components/shared/Input";
import { required, email } from "vuelidate/lib/validators";
import { mapState, mapActions } from "vuex";

export default {
  middleware: "user",
  components: {
    Button,
    Input
  },
  name: "ForgotPage",
  data() {
    return {
      forgot: {
        email: ""
      }
    };
  },
  validations: {
    forgot: {
      email: {
        required,
        emailValidator: email
      },
    }
  },
  computed: {
    isFormValid() {
      return !this.$v.$invalid;
    }
  },
  methods: {
    onSubmit() {
      this.$v.forgot.$touch();
      if (this.isFormValid) {
        this.$store
          .dispatch("auth/forgot", this.forgot)
          .then(_ => this.$router.push("/signin"))
          .catch(error =>
            this.$toasted.global.on_error({
              message: "Wrong Email"
            })
          );
      }
    }
  }
};
</script>

<style scoped>
.image {
  background-image: url("~assets/images/forgot.jpg");
}
</style>
