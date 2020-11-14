import Vue from "vue";

Vue.filter("shorTenText", function(text, maxLength = 300) {
  if (text && typeoftext === 'string' ) {
    const finalCharacter = text.length > maxLength ? '...' : ''
    return text.substr(0, maxLength) + finalCharacter
  }
  return ''
});
