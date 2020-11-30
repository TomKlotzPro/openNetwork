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
            Reset Password
          </h2>
          <form
            @submit.prevent="onSubmit"
            class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
          >
            <div class="mb-4">
              <Input
                name="password"
                v-model="resetForm.password"
                placeholder="**********"
                type="password"
                :error="$v.resetForm.password.$error"
              >
                Password
                <template
                  v-slot:error_required
                  v-if="!$v.resetForm.password.required"
                >
                  Password is required
                </template>
                <template
                  v-slot:error_message
                  v-if="!$v.resetForm.password.minLength"
                >
                  Password minimum length is 6 characters
                </template>
              </Input>
            </div>
            <div class="mb-4">
              <Input
                name="confirmedPassword"
                placeholder="**********"
                v-model="resetForm.passwordConfirmation"
                type="password"
                :error="$v.resetForm.passwordConfirmation.$error"
              >
                Confirm Password
                <template
                  v-slot:error_required
                  v-if="!$v.resetForm.passwordConfirmation.required"
                >
                  Confirm Password is required
                </template>
                <template
                  v-slot:error_message
                  v-if="!$v.resetForm.passwordConfirmation.sameAs"
                >
                  Both do not match
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
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import { mapState, mapActions } from "vuex";

export default {
  middleware: "user",
  components: {
    Button,
    Input
  },
  name: "ResetPage",
  data() {
    return {
      resetForm: {
        password: "",
        passwordConfirmation: "",
        token: this.$route.query.token
      }
    };
  },
  validations: {
    resetForm: {
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
  computed: {
    isFormValid() {
      return !this.$v.$invalid;
    }
  },
  methods: {
    onSubmit() {
      this.$v.resetForm.$touch();
      if (this.isFormValid) {
        this.$store
          .dispatch("auth/reset", this.resetForm)
          .then(_ => this.$router.push("/"))
          .catch(error =>
            this.$toasted.global.on_error({
              message: "Password incorrect"
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
