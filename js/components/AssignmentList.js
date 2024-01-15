import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  components: { Assignment, AssignmentTags },

  template: `
        <section class="w-80 bg-gray-700 p-4 border border-gray-600 rounded-lg" v-show="assignments.length">
            <div class="flex justify-between items-start">
              <h2 class="font-bold mb-2">
                  {{ title }}
                  <span>({{ assignments.length }})</span>
              </h2>

              <button v-show="canHide" @click="$emit('hide')">&times;</button>
            </div>

            <assignment-tags :initial-tags="assignments.map((assignment) => assignment.tag)" v-model:current-tag="currentTag"/>

            <ul class="border rounded-lg border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                >
                </assignment>
            </ul>
            <slot />
            </section>
    `,

  props: {
    assignments: Array,
    title: String,
    canHide: { type: Boolean, default: false },
  },

  data() {
    return {
      currentTag: "all",
    };
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag === "all") {
        return this.assignments;
      }
      return this.assignments.filter(
        (assignment) => assignment.tag === this.currentTag
      );
    },
  },
};

// <assignment-tags :initial-tags="assignments.map((assignment) => assignment.tag)" @change="currentTag = $event" :current-tag="currentTag"/>
