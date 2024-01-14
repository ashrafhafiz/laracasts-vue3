import AssignmentList from "./AssignmentList.js";
import CreateAssignment from "./CreateAssignment.js";

export default {
  components: { AssignmentList, CreateAssignment },

  template: `
        <section class="space-y-6">
            <assignment-list title="In Progress" :assignments="filters.inProgress"></assignment-list>
            <assignment-list title="Completed" :assignments="filters.completed"></assignment-list>

            <create-assignment @add="add"></create-assignment>
        </section>
    `,

  data() {
    return {
      assignments: [],
      newAssignment: "",
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.completed
        ),
        completed: this.assignments.filter(
          (assignment) => assignment.completed
        ),
      };
    },
  },

  created() {
    fetch("http://localhost:3001/assignments")
      .then((response) => response.json())
      .then((data) => (this.assignments = data));
  },

  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1,
      });
      this.newAssignment = "";
    },
  },
};
