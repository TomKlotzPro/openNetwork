<template>
  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div class="space-y-5 sm:space-y-4">
          <h1
            class="text-5xl text-sols font-poppins font-bold tracking-tight sm:text-4xl"
          >
            Our Team
          </h1>
          <p class="text-xl text-grey-700 font-hind">
            Open Network is all about a school project that is being built and
            maintained by this five great Masters II Software Engineers, with
            the idea of promoting visibility on all open source project whatever
            the area of study.
          </p>
        </div>
        <div class="lg:col-span-2">
          <ul
            class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
          >
            <Member
              v-for="member in members"
              :key="member.name"
              :profileImage="member.profileImage"
              :name="member.name"
              :role="member.role"
              :twitter_link="member.twitter_link"
              :linkedIn_link="member.linkedIn_link"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Member from "~/components/Member";
export default {
  head: {
    title: "What is Open Network",
  },
  data() {
    return {
      members: [
        {
          profileImage:
            "https://opntwk-project-images.s3-eu-west-1.amazonaws.com/members/tom.png",
          name: "Tom Klotz",
          role: "Software Engineer",
          twitter_link: "https://twitter.com/klotz_tom?s=20",
          linkedIn_link: "https://www.linkedin.com/in/tom-klotz-11a617134",
        },
        {
          profileImage:
            "https://opntwk-project-images.s3-eu-west-1.amazonaws.com/members/pierre.jfif",
          name: "Pierre Couderc",
          role: "Software Engineer",
          twitter_link: "https://twitter.com/",
          linkedIn_link: "https://www.linkedin.com/in/pierre-couderc-784288153",
        },
        {
          profileImage:
            "https://opntwk-project-images.s3-eu-west-1.amazonaws.com/members/ulrich.jpg",
          name: "Ulrich Ekeu",
          role: "Software Engineer",
          twitter_link: "https://twitter.com/Monkam1703",
          linkedIn_link: "www.linkedin.com/in/ekeu-ulrich",
        },
        {
          profileImage:
            "https://opntwk-project-images.s3-eu-west-1.amazonaws.com/members/emrick.jpg",
          name: "Emrick Donadei",
          role: "Software Engineer",
          twitter_link: "https://twitter.com/emrickdonadei",
          linkedIn_link: "https://www.linkedin.com/in/emrick-donadei/",
        },
      ],
    };
  },
  components: {
    Member,
  },
};
</script>

<style></style>
