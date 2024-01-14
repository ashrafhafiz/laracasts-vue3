export default {
  template: `
    <div className="flex gap-2">
        <button 
        @click="$emit('update:currentTag', tag)" 
        v-for="tag in allTags" 
        class="border rounded text-xs px-1 py-[1px]"
        :class="{
            'border-blue-500 text-blue-500' : tag === currentTag
        }"
        >{{ tag }}</button>
    </div>
    `,

  props: {
    initialTags: Array,
    currentTag: String,
  },

  computed: {
    allTags() {
      return ["all", ...new Set(this.initialTags)];
    },
  },
};
