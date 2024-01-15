export default {
  template: `
    <form v-on:submit.prevent="add">
        <div className="flex border border-gray-600 text-black mt-2">
            <input type="text" v-model="newAssignment" placeholder="New assignment..." class="p-2 flex-1" />
            <button type="submit" class="bg-white border-l p-2">Add</button>
        </div>
    </form>
    `,

  data() {
    return {
      newAssignment: "",
    };
  },

  props: {
    assignments: Array,
  },

  methods: {
    add() {
      this.$emit("add", this.newAssignment);
      this.newAssignment = "";
    },
  },
};
