<template>
  <div class="min-h-screen bg-gray-100">
    <main class="py-10">
      <!-- Page header -->
      <div
        class="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8"
      >
        <div class="flex items-center space-x-5">
          <div class="flex-shrink-0">
            <div class="relative">
              <img
                class="h-16 w-16 rounded-full"
                :src="project.author.avatar"
                alt=""
              />
              <span
                class="absolute inset-0 shadow-inner rounded-full"
                aria-hidden="true"
              ></span>
            </div>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-900">
              {{ project.author.name }}
            </h1>
            <p class="text-sm font-medium text-gray-500">
              Joined Openetwork on {{ project.author.createdAt | formatDate }}
            </p>
          </div>
        </div>
        <div
          class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3"
        >
          <Button
            buttonType="a"
            :href="project.gitLink"
            target="_blank"
            buttonColor="nebula"
            class="w-full sm:flex"
            >Git Repo</Button
          >
          <div ref="paypal" class="flex w-full"></div>
        </div>
      </div>

      <div
        class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3"
      >
        <div class="space-y-6 lg:col-start-1 lg:col-span-2">
          <!-- Project Value -->
          <section aria-labelledby="applicant-information-title">
            <div class="bg-white shadow sm:rounded-lg">
              <div class="px-4 py-5 sm:px-6">
                <h2
                  id="applicant-information-title"
                  class="text-lg leading-6 font-medium text-gray-900"
                >
                  Project Value
                </h2>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Experience gained why joining the project.
                </p>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div
                    class="sm:col-span-2"
                    v-for="(wsl, index) in project.wsl"
                    :key="wsl.value"
                  >
                    <dt class="text-sm font-medium text-gray-500">
                      Experience {{ index + 1 }}
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ wsl.value }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <!-- Project Description -->
          <section aria-labelledby="applicant-information-title">
            <div class="bg-white shadow sm:rounded-lg">
              <div class="px-4 py-5 sm:px-6">
                <h2
                  id="applicant-information-title"
                  class="text-lg leading-6 font-medium text-gray-900"
                >
                  Project Description
                </h2>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  A detailed overview of the project.
                </p>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div
                    class="sm:col-span-2 text-sm text-gray-900 project"
                    v-html="project.description"
                  ></div>
                </dl>
              </div>
            </div>
          </section>

          <!-- Tasks -->
          <Tasks :project="project"></Tasks>

          <!-- Comments-->
          <Comments :author="project.author" :project="project"></Comments>
        </div>

        <section
          aria-labelledby="timeline-title"
          class="lg:col-start-3 lg:col-span-1"
        >
          <div class="bg-white shadow sm:rounded-lg sm:px-6">
            <div class="px-4 py-5 sm:px-6">
              <h2
                id="applicant-information-title"
                class="text-lg leading-6 font-medium text-gray-900"
              >
                Project Info
              </h2>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                General information
              </p>
            </div>
            <!-- Activity Feed -->
            <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
              <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div class="sm:col-span-2">
                  <dt class="text-sm font-medium text-gray-500">
                    Title
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    {{ project.title }}
                  </dd>
                </div>
                <div class="sm:col-span-2">
                  <dt class="text-sm font-medium text-gray-500">
                    Subtitle
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    {{ project.subtitle }}
                  </dd>
                </div>
                <div class="sm:col-span-2">
                  <dt class="text-sm font-medium text-gray-500">
                    Tags
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    <span class="inline-block">
                      <span
                        v-for="tag in project.tags"
                        :key="tag"
                        class="inline-flex items-center mr-2 px-3 py-0.5 rounded text-sm font-medium bg-nebula-100 text-nebula-800"
                      >
                        {{ tag }}
                      </span>
                    </span>
                  </dd>
                </div>
                <div class="sm:col-span-2">
                  <dt class="text-sm font-medium text-gray-500">
                    Created date
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    {{ project.createdAt | formatDate }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import Button from "~/components/shared/Button";
import Comments from "~/components/shared/Comments";
import Tasks from "~/components/shared/Tasks";
export default {
  head() {
    return {
      title: this.project.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.project.subtitle
        }
      ]
    };
  },
  data() {
    return {
      loaded: false,
      description: ""
    };
  },
  mounted: function() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://www.paypal.com/sdk/js?client-id=ASyMhxdr56n7JknacW2JZYGn4cmPHYF0PPv9ZG5ORZr1jrTfohd_6LJv2p7mmovei8eMCTg_ZeGW4DFN&components=buttons,funding-eligibility`;
    script.async = true;
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded: function() {
      this.loaded = true;
      var FUNDING_SOURCES = [window.paypal.FUNDING.PAYPAL];
      FUNDING_SOURCES.forEach(
        function(fundingSource) {
          const payPalButton = window.paypal.Buttons({
            style: {
              height: 47
            },
            fundingSource: fundingSource,
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: this.description,
                    amount: {
                      currency_code: "USD",
                      value: 5
                    }
                  }
                ]
              });
            },
            onApprove: function(data, actions) {
              return actions.order.capture().then(function(details) {
                alert(
                  "Transaction completed by " + details.payer.name.given_name
                );
              });
            }
          });
          if (payPalButton.isEligible()) {
            payPalButton.render(this.$refs.paypal);
          }
        }.bind(this)
      );
    }
  },
  components: {
    Button,
    Tasks
  },
  computed: {
    project() {
      return this.$store.state.project.item;
    }
  },
  async fetch({ store, params }) {
    this.description = params.slug;
    await store.dispatch("project/fetchProjectBySlug", params.slug);
  }
};
</script>

<style>
.project ul {
  list-style-type: disc;
  padding-left: 1rem;
}
.project ol {
  list-style-type: decimal;
  padding-left: 1rem;
}
.project p {
  min-height: 30px;
}
</style>
