<template>
  <section aria-labelledby="notes-title">
    <div class="bg-white shadow sm:rounded-lg">
      <div class="divide-y divide-gray-200">
        <div class="px-4 py-5 sm:px-6">
          <h2 id="notes-title" class="text-lg font-medium text-gray-900">
            Tasks
          </h2>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            A list of tasks you can complete if you want to.
          </p>
        </div>
        <h2
          v-if="project.tasks.length === 0 || project.tasks === null"
          id="notes-title"
          class="text-lg font-medium text-gray-900 text-center"
        >
          No tasks for the moment
        </h2>
        <div v-else>
          <ul class="list-reset flex border-b">
            <li class="p-0" v-for="(task, index) in project.tasks" :key="task._id">
              <button :class="{'bg-white inline-block py-2 px-4 font-semibold text-blue-400': openTab !== index, 'bg-white inline-block py-2 px-4 font-semibold text-blue-800': openTab === index}" @click="toggleTab(index)" >
                Task {{index+1}}
              </button>
            </li>
          </ul>

          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div class="px-4 py-5 flex-auto">
              <div class="tab-content tab-space">
                <div v-for="(task, index) in project.tasks" :key="task._id" :class="{'hidden': openTab !== index, 'block': openTab === index}">
                  <h2 class="text-lg font-medium text-gray-900 py-3">{{task.title}}</h2>
                  <BadgeDifficulty :difficulty="task.difficulty" class="py-3" />

                  <span v-html="task.description"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script>
import BadgeDifficulty from "~/components/shared/BadgeDifficulty";
export default {
  data() {
    return {
      openTab: 0
    }
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleTab(tabNumber){
      this.openTab = tabNumber
    }
  },
  components: {
    BadgeDifficulty
  }
};
</script>

<style></style>
