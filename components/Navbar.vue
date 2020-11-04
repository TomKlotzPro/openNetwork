<template>
  <div>
    <header
      class="nav-opt-sprite nav-locale-fr nav-lang-fr nav-ssl nav-unrec nav-flex"
    >
      <div
        id="navbar"
        class=" nav-sprite-v1 celwidget nav-bluebeacon nav-ally-t1 layout2 nav-packard-glow hamburger bold-focus-hover nav-flex layout3 layout3-alt using-mouse"
      >
        <div id="nav-belt">
          <div class="nav-left">
            <!-- LOGO -->
            <div id="nav-logo">
              <a href="" class="nav-logo-link nav-progressive-attribute">
                <span class="nav-sprite nav-logo-base"></span>
                <span
                  class="nav-sprite nav-logo-ext nav-progressive-content"
                ></span>
              </a>
            </div>
            <!-- ADDRESS -->
            <div id="nav-global-location-slot">
              <span class="a-declarative">
                <nuxt-link
                  to="/address"
                  class="nav-a nav-a-2 a-popover-trigger a-declarative"
                >
                  <div
                    class="nav-location-icon"
                    id="nav-packard-glow-loc-icon"
                  ></div>
                  <div id="glow-ingress-block">
                    <span class="nav-line-1" id="glow-ingress-line1"
                      >Hello</span
                    >
                    <span class="nav-line-2" id="glow-ingress-line2"
                      >What's your address?</span
                    >
                  </div>
                </nuxt-link>
              </span>
            </div>
          </div>
          <div class="nav-fill">
            <div id="nav-search">
              <Search />
            </div>
          </div>
          <div class="nav-right">
            <div id="nav-tools" class="layoutToolbarPadding">
              <nuxt-link
                to="/register"
                class="nav-a nav-a-2"
                id="nav-link-accountList"
              >
                <div class="nav-line-1-container">
                  <span class="nav-line-1">Hello Sign in</span>
                </div>
                <span class="nav-line-2 nav-long-width">
                  Acount and Others
                  <span
                    class="nav-icon nav-arrow null"
                    style="visibility: visible"
                  ></span>
                </span>
              </nuxt-link>
              <nuxt-link to="/projects" class="nav-a nav-a-2" id="nav-orders">
                <span class="nav-line-1">Your</span>
                <span class="nav-line-2">Projects</span>
              </nuxt-link>
              <nuxt-link to="/contribute" class="nav-a nav-a-2" id="nav-orders">
                <span class="nav-line-1">Donate or</span>
                <span class="nav-line-2">Contribute</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Search from "~/components/Search";
export default {
  components: {
    Search
  }
};
</script>

<style></style>
