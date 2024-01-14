export default {
  template: `
    <li>
        <label class="p-2 flex justify-between items-center gap-4">
            {{ assignment.name }}
            <input type="checkbox" v-model="assignment.completed">
        </label>
    </li>
    `,

  props: {
    assignment: Object,
  },
};
