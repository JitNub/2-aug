const { createApp, ref } = Vue;

createApp({
  /* setup() {
    const message = ref("Hello vue!");
    return {
      message,
    };
  }, */

  data() {
    return {
      url: "https://www.w3schools.com/vue/img_beach3.jpg",
      image: "",

      name: "",

      counter: 0,
      number: 0,
    };
  },

  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    resetName() {
      this.name = "";
    },

    setImage() {
      this.url = this.image;
    },

    addNumber() {
      this.counter = this.counter + this.number;
    },
  },
}).mount("#app");
