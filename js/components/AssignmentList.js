import Assignment from "./Assignment.js";

export default {
  components: { Assignment },

  template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>

            <div className="flex gap-2">
                <button 
                  @click="currentTag = tag" 
                  v-for="tag in tags" 
                  class="border rounded text-xs px-1 py-[1px]"
                  :class="{
                    'border-blue-500 text-blue-500' : tag === currentTag
                  }"
                >{{ tag }}</button>
            </div>

            <ul class="border rounded-lg border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                >
                </assignment>
            </ul>
        </section>
    `,

  props: {
    assignments: Array,
    title: String,
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

    tags() {
      return [
        "all",
        ...new Set(this.assignments.map((assignment) => assignment.tag)),
      ];
    },
  },
};
