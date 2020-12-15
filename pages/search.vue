<template>
  <ais-instant-search :search-client="searchClient" index-name="product">
    <ais-search-box />
    <ais-hits>
      <div slot="item" slot-scope="{ item }">
        <h2>{{ item.title }}</h2>
      </div>
    </ais-hits>
  </ais-instant-search>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia-min.css";

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

<style>
body {
  font-family: sans-serif;
  padding: 1em;
}
</style>