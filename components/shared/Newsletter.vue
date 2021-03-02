<template>
  <div class="bg-white font-hind">
    <div class="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:pb-16 lg:px-8">
      <div
        class="px-6 py-6 bg-gradient-to-r from-persimmon via-tapestry to-electricViolet rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center"
      >
        <div class="xl:w-0 xl:flex-1">
          <h2
            class="text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
          >
            Want products news and updates?
          </h2>
          <p class="mt-3 max-w-3xl text-lg leading-6 text-white">
            Sign up for our newsletter to stay up to date.
          </p>
        </div>
        <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
          <form class="sm:flex" @submit.prevent="onSubscribe">
            <label for="emailAddress" class="sr-only">Email address</label>
            <Input
              id="emailAddress"
              name="emailAddress"
              v-model="subscribeForm.email"
              type="email"
              autocomplete="email"
              required
              placeholder="Enter your email"
              noLabel
              :error="$v.subscribeForm.email.$error"
            />
            <Button
              buttonType="button"
              buttonColor="nebula"
              class="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
            >
              Notify me
            </Button>
          </form>
          <p class="mt-3 text-sm text-indigo-200">
            We care about the protection of your data. Read our
            <nuxt-link to="/privacy" class="text-white font-medium underline">
              Privacy Policy.
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "~/components/shared/Input";
import Button from "~/components/shared/Button";
import { required, email } from "vuelidate/lib/validators";
export default {
  components: {
    Input,
    Button
  },
  data() {
    return {
      subscribeForm: {
        email: ""
      }
    };
  },
  validations: {
    subscribeForm: {
      email: {
        required,
        emailValidator: email
      }
    }
  },
  computed: {
    isFormValid() {
      return !this.$v.$invalid;
    }
  },
  methods: {
    onSubscribe() {
      this.$v.subscribeForm.$touch();
      if (this.isFormValid) {
        this.$axios
          .$post(`/api/v1/subscribe`, this.subscribeForm)
          .then(data => {
            this.$toasted.global.on_success({
              message: "Thanks for subscribing!"
            });
          })
          .catch(error => {
            console.error(error);
            this.$toasted.global.on_success({
              message: "Something went wrong. Please try again!"
            });
          });
      }
    }
  }
};
</script>

<style></style>
