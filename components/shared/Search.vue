<template>
  <div
    class="flex-1 font-hind flex items-center justify-center px-2 lg:ml-6 lg:justify-end"
  >
    <div class="max-w-lg w-full lg:max-w-xs">
      <label for="search" class="sr-only">Search</label>
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <svg
            class="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <ais-instant-search :search-client="searchClient" index-name="projects">
          <ais-index index-name="blogs" />
          <ais-configure :hitsPerPage="3" />
          <ais-autocomplete>
            <div slot-scope="{ currentRefinement, indices, refine }">
              <input
                type="search"
                class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-nebula-500 focus:border-nebula-500 sm:text-sm"
                :value="currentRefinement"
                placeholder="Search for a product"
                ref="input"
                @input="refine($event.currentTarget.value)"
              />
              <span class="container_styles">
                <span class="dropdown_menu custom_dropdown_menu">
                  <div class="data_set">
                    <span class="suggestion">
                      <div class="suggestion">
                        <div
                          v-if="currentRefinement"
                          class="docsearch_suggestion docsearch_suggestion_main docsearch_suggestion_secondary custom_docsearch_suggestion"
                          v-for="index in indices"
                          :key="index.name"
                        >
                          <div
                            v-if="index.hits != ''"
                            class="docsearch_suggestion_category_header uppercase text-xs tracking-widest text-semibold"
                          >
                            {{ index.indexId }}
                          </div>

                          <div
                            v-for="hit in index.hits"
                            :key="hit.objectID"
                            class="docsearch_suggestion_wrapper"
                          >
                            <a
                              @click.prevent="
                                () => {
                                  $router.push(`/${index.indexId}/${hit.slug}`);
                                  refine(null);
                                }
                              "
                            >
                              <div
                                class="docsearch_suggestion_subcategory_column docsearch_suggestion_duplicate_content items-center"
                              >
                                <span
                                  class="text-center docsearch_suggestion_subcategory_column_text"
                                  v-if="index.indexId === 'blogs'"
                                  >{{ hit.createdAt | formatDate }}</span
                                >
                                <div v-else class="flex items-center">
                                  <img
                                    class="mx-auto w-16 h-16 rounded-md"
                                    :src="hit.image"
                                  />
                                </div>
                              </div>
                              <div class="docsearch_suggestion_content">
                                <div
                                  class="docsearch_suggestion_subcategory_inline docsearch_suggestion_duplicate_content"
                                >
                                  {{ index.indexId }}
                                </div>
                                <div class="docsearch_suggestion__title">
                                  <ais-highlight attribute="title" :hit="hit" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </span>
                  </div>
                </span>
              </span>
            </div>
          </ais-autocomplete>
        </ais-instant-search>
      </div>
    </div>
  </div>
</template>

<script>
import algoliasearch from "algoliasearch/lite";

export default {
  data() {
    return {
      searchClient: algoliasearch(
        "0U0SB5XSUM",
        "b5d54bbd313f7f8974255465b4c57ab3"
      ),
    };
  },
};
</script>

<style scoped>
.container_styles {
  position: absolute;
  z-index: 1000;
  padding: 2px;
  border-radius: 4px;
  direction: ltr;
  width: 100px;
  top: 42px;
}
.dropdown_menu {
  background-color: white;
  margin: 6px 0 0;
  text-align: left;
}

@media (min-width: 568px) {
  .dropdown_menu {
    min-width: 400px;
  }
}
@media (min-width: 768px) {
  .dropdown_menu {
    min-width: 515px;
  }
}
.dropdown_menu {
  width: 100%;
  border-color: #999;
  font-size: 0.9rem;
}
.custom_dropdown_menu {
  display: block;
  left: 0px;
  right: auto;
}
.suggestion {
  display: block;
}
.docsearch_suggestion {
  color: #333;
  cursor: pointer;
  overflow: hidden;
  border-top: 1px solid #3a3a3a;
}
.docsearch_suggestion_secondary {
  border-top: 1px solid #3a3a3a;
}
@media (min-width: 768px) {
  .docsearch_suggestion {
    display: table;
    width: 100%;
  }
}
@media (min-width: 768px) {
  .docsearch_suggestion_secondary {
    border-top: 1px solid#606060;
  }
}
.docsearch_suggestion {
  border-color: rgb(255, 255, 255);
}
.custom_docsearch_suggestion {
  white-space: normal;
}
.docsearch_suggestion_category_header {
  display: none;
  background: #3a416f;
  color: #fff;
  font-weight: 600;
  padding: 5px 10px;
  text-align: left;
}
.docsearch_suggestion_main .docsearch_suggestion_category_header {
  display: block;
}
@media (min-width: 768px) {
  .docsearch_suggestion_subcategory_column {
    border-right: 1px solid #606060;
    background: #fff;
    color: #555;
    display: table-cell;
    overflow: hidden;
    padding: 5px 7px 5px 5px;
    text-align: right;
    text-overflow: ellipsis;
    vertical-align: top;
    width: 135px;
    max-width: 135px;
    min-width: 135px;
  }
}
.docsearch_suggestion_subcategory_column {
  border-color: #ddd;
}
@media (min-width: 768px) {
  .docsearch_suggestion_secondary
    .docsearch_suggestion_subcategory_column_text {
    display: block;
  }
}

@media (min-width: 768px) {
  .docsearch_suggestion_subcategory_column_text {
    display: none;
  }
}
.docsearch_suggestion_content {
  padding: 3px 5px;
  width: 100%;
  border: 1px solid #d3d3d3;
}
@media (min-width: 768px) {
  .docsearch_suggestion_content {
    display: table-cell;
    padding: 5px 10px;
  }
}
.docsearch_suggestion_content {
  color: #3a416f;
}
.docsearch_suggestion_main .docsearch_suggestion_content,
.docsearch_suggestion_secondary .docsearch_suggestion_content {
  border-top: 0;
}
.docsearch_suggestion_subcategory_inline {
  display: inline-block;
  font-weight: 700;
}
@media (min-width: 768px) {
  .docsearch_suggestion_subcategory_inline {
    display: none;
  }
}
.docsearch_suggestion__title {
  display: inline;
}
@media (min-width: 768px) {
  .docsearch_suggestion__title {
    font-weight: 600;
  }
}
</style>