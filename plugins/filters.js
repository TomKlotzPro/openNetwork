import Vue from "vue";

Vue.filter("shortenText", function(text, maxLength = 300) {
  if (text && typeof text === 'string' ) {
    const finalCharacter = text.length > maxLength ? '...' : ''
    return text.substr(0, maxLength) + finalCharacter
  }
  return ''
});
