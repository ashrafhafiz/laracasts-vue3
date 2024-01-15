import AssignmentList from "./AssignmentList.js";
import CreateAssignment from "./CreateAssignment.js";

export default {
  components: { AssignmentList, CreateAssignment },

  template: `
        <section class="flex gap-8">
            <assignment-list title="In Progress" :assignments="filters.inProgress">
              <create-assignment @add="add"></create-assignment>
            </assignment-list>
            <div v-show="showCompleted">
              <assignment-list 
                  title="Completed" 
                  :assignments="filters.completed" 
                  can-hide 
                  @hide="showCompleted = !showCompleted"
              ></assignment-list>
            </div>

        </section>
    `,

  data() {
    return {
      assignments: [],
      newAssignment: "",
      showCompleted: true,
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
