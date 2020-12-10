import Vue from "vue";
import moment from 'moment'

Vue.filter("shortenText", function(text, maxLength = 300) {
  if (text && typeof text === 'string' ) {
    const finalCharacter = text.length > maxLength ? '...' : ''
    return text.substr(0, maxLength) + finalCharacter
  }
  return ''
});

Vue.filter('formatDate', function(date, dateFormat = "ll") {
  if(!date) return ''
  return moment(date).format(dateFormat)
});
Vue.filter('readTime', function(text) {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords/wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return readTime
})
