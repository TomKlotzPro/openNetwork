<template>
  <div
    v-if="show"
    class="alert flex flex-row items-center p-5 rounded border-b-2 m-auto w-w_sm xl:w-w_lg align-middle mt-4 "
    :class="computedClasses.div1 && computedClasses.div1"
  >
    <div
      class="alert-icon flex items-center border-2 justify-center h-10 w-10 flex-shrink-0 rounded-full"
      :class="computedClasses.div2 && computedClasses.div2"
    >
      <span :class="computedClasses.span && computedClasses.span">
        <component :is="svgComponent" class="h-6 w-6"></component>
      </span>
    </div>
    <div class="alert-content ml-4">
      <div
        class="alert-title font-semibold text-lg"
        :class="computedClasses.div4 && computedClasses.div4"
      >
        {{ this.alertInformation && alertInformation.status }}
      </div>
      <div
        class="alert-description text-sm"
        :class="computedClasses.div5 && computedClasses.div5"
      >
        {{ alertInformation && alertInformation.information }}
      </div>
    </div>
  </div>
</template>

<script>
import DangerSVG from "../assets/images/error.svg?inline";
import WarningSVG from "../assets/images/warning.svg?inline";
import SuccessSVG from "../assets/images/success.svg?inline";
export default {
  props: ["alertType", "show"],
  components: {
    DangerSVG,
    WarningSVG,
    SuccessSVG
  },
  data() {
    return {
      computedClasses: {},
      alertInformation: {},
      svgComponent: ""
    };
  },
  watch: {
    alertType: function(o,n) {
      let alertColor;
      if (this.alertType === "danger") {
        alertColor = "red";
        this.svgComponent = "DangerSVG"
        this.alertInformation = {
          status: "Error",
          information: "There was an error while processing"
        };
      } else if (this.alertType === "warning") {
        alertColor = "orange";
        this.svgComponent = "WarningSVG"
        this.alertInformation = {
          status: "Warning",
          information: "Please verify your informations"
        };
      } else if (this.alertType === "success") {
        alertColor = "green";
        this.svgComponent = "SuccessSVG"
        this.alertInformation = {
          status: "Success",
          information: "Yous data was processed successfully"
        };
      }
      this.computedClasses = {
          div1: "bg-"+alertColor+"-200",
          div2: "bg-"+alertColor+"-100"+" "+"border-"+alertColor+"-500",
          span: "text-"+alertColor+"-500",
          div4: "text-"+alertColor+"-800",
          div5: "text-"+alertColor+"-600"
        };
    }
  }
};
</script>

<style scoped></style>
