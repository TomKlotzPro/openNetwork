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
          <div>
            <div class="sm:hidden">
              <label for="tabs" class="sr-only">Select a task</label>
              <select @change="onChangeSelectTask($event)" id="tabs" name="tabs" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purp focus:border-purp sm:text-sm rounded-md" >
                <option v-for="(task, index) in project.tasks" :key="task._id" :value="index">Task {{index + 1}}</option>
              </select>
            </div>
            <div class="hidden sm:block">
              <div class="border-b border-gray-200">
                <nav class="-mb-px flex space-x-8 px-2" aria-label="Tabs">

                  <a @click="toggleTab(index)" v-for="(task, index) in project.tasks" :key="task._id" :class="{'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none': openTab !== index, 'border-nebula-500 text-nebula-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm': openTab === index}">
                    Task {{index + 1}}
                  </a>
                </nav>
              </div>
            </div>
          </div>

          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div class="px-4 py-5 flex-auto">
              <div class="tab-content tab-space">
                <div v-for="(task, index) in project.tasks" :key="task._id" :class="openTab == index ? 'block' : 'hidden'">
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
    },
    onChangeSelectTask(event) {
      this.openTab = event.target.value
    }
  },
  components: {
    BadgeDifficulty
  }
};
</script>

<style></style>
