import Vue from "vue";
import { recursiveFind } from "../utils/functions";

export const state = () => ({
  item: {},
  items: {
    all: [],
    featured: []
  },
  pagination: {
    count: 0, //Count all of our published articles/blogs
    pageCount: 0, // Number of pages to display
    pageSize: 6, // Number of items to display per page
    pageNum: 1 // Current page
  }
});

export const actions = {
  fetchBlogs({ commit, state }, filter) {
    const url = this.$applyParamsToUrl("/api/v1/blogs", filter);
    return this.$axios
      .$get(url)
      .then(data => {
        const { blogs, count, pageCount } = data;
        commit("setBlogs", { resource: "all", blogs });
        commit("setPagination", { count, pageCount });
        return state.items.all;
      })
      .catch(error => Promise.reject(error));
  },
  fetchFeaturedBlogs({ commit, state }, filter) {
    const url = this.$applyParamsToUrl("/api/v1/blogs", filter);
    return this.$axios
      .$get(url)
      .then(data => {
        const blogs = data.blogs;
        commit("setBlogs", { resource: "featured", blogs });
        return state.items.featured;
      })
      .catch(error => Promise.reject(error));
  },
  fetchBlogBySlug({ commit, state }, slug) {
    return this.$axios
      .get(`/api/v1/blogs/s/${slug}`)
      .then(blog => {
        commit("setBlog", blog.data);
        return state.item;
      })
      .catch(error => Promise.reject(error));
  },
  createBlogReview({ commit, state }, blogData) {
    return this.$axios
      .$post(`/api/v1/blogs/reviews`, blogData)
      .then(blog => {
        return blog;
      })
      .catch(error => Promise.reject(error));
  },
  createBlogReviewReply({ commit, state }, blogData) {
    return this.$axios
      .$post(`/api/v1/blogs/replies`, blogData)
      .then(blog => {
        return blog;
      })
      .catch(error => Promise.reject(error));
  },
  upvoteBlog({ commit }, blogId) {
    return this.$axios
      .$post("/api/v1/upvotes")
      .then(upvoteCreated =>
        this.$axios.$patch(`/api/v1/blogs/${blogId}/upvote`, upvoteCreated)
      )
      .catch(err => {
        Promise.reject(err);
      })
      .then(blog => {
        commit("updateBlogUpvotes", blog);
      });
  }
};

export const mutations = {
  setBlogs(state, { resource, blogs }) {
    state.items[resource] = blogs;
  },
  setBlog(state, blog) {
    state.item = blog;
  },
  setPage(state, currentPaage) {
    Vue.set(state.pagination, "pageNum", currentPaage);
  },
  setPagination(state, { count, pageCount }) {
    Vue.set(state.pagination, "count", count);
    Vue.set(state.pagination, "pageCount", pageCount);
  },
  updateBlogUpvotes(state, blog) {
    const indexOfBlog = state.items.all.findIndex(
      item => item._id === blog._id
    );
    state.items.all[indexOfBlog].upvotes = blog.upvotes;
  },
  updateBlogComment(state, { comments, userInfo, text, id }) {
    const comment = recursiveFind(comments, id);
    if (comment) {
      userInfo.comment = text;
      comment.replies.push(userInfo);
    }
  }
};
