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
      assignments: [
        { name: "Finish Project", completed: false, id: 1, tag: "math" },
        { name: "Read Chapter 4", completed: false, id: 2, tag: "science" },
        { name: "Turn in Homework", completed: false, id: 3, tag: "math" },
      ],
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
