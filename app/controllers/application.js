import Controller from "@ember/controller";

export default Controller.extend({
  showModal: false,
  actions: {
    showIt() {
      this.set("showModal", true);
    },
    hideIt() {
      this.set("showModal", false);
    }
  }
})
