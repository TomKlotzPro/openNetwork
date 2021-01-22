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

          <!-- Comments-->
          <section aria-labelledby="notes-title">
            <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
              <div class="divide-y divide-gray-200">
                <div class="px-4 py-5 sm:px-6">
                  <h2
                    id="notes-title"
                    class="text-lg font-medium text-gray-900"
                  >
                    Notes
                  </h2>
                </div>
                <div class="px-4 py-6 sm:px-6">
                  <ul class="space-y-8">
                    <li>
                      <div class="flex space-x-3">
                        <div class="flex-shrink-0">
                          <img
                            class="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div>
                          <div class="text-sm">
                            <a href="#" class="font-medium text-gray-900"
                              >Leslie Alexander</a
                            >
                          </div>
                          <div class="mt-1 text-sm text-gray-700">
                            <p>
                              Ducimus quas delectus ad maxime totam doloribus
                              reiciendis ex. Tempore dolorem maiores. Similique
                              voluptatibus tempore non ut.
                            </p>
                          </div>
                          <div class="mt-2 text-sm space-x-2">
                            <span class="text-gray-500 font-medium"
                              >4d ago</span
                            >
                            <span class="text-gray-500 font-medium"
                              >&middot;</span
                            >
                            <button
                              type="button"
                              class="text-gray-900 font-medium"
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-6 sm:px-6">
                <div class="flex space-x-3">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div class="min-w-0 flex-1">
                    <form action="#">
                      <div>
                        <label for="comment" class="sr-only">About</label>
                        <textarea
                          id="comment"
                          name="comment"
                          rows="3"
                          class="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                          placeholder="Add a note"
                        ></textarea>
                      </div>
                      <div class="mt-3 flex items-center justify-between">
                        <a
                          href="#"
                          class="group inline-flex items-start text-sm space-x-2 text-gray-500 hover:text-gray-900"
                        >
                          <!-- Heroicon name: question-mark-circle -->
                          <svg
                            class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span>
                            Some HTML is okay.
                          </span>
                        </a>
                        <button
                          type="submit"
                          class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Comment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
                        #{{ tag }}
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
import ProductHero from "~/components/ProductHero";
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
    Button
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
