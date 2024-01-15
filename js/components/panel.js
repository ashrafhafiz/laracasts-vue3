export default {
  template: `
        <div class="bg-gray-700 p-4 border border-gray-600 rounded-lg">
            <h2 v-if="$slots.heading" class="font-bold mb-2">
                <slot name="heading" />
            </h2>

            <slot />

            <footer v-if="$slots.footer" class="border-gray-600 border-t mt-4 pt-4 text-sm">
                <slot name="footer" />
            </footer>
        </div>        
    `,

  props: {
    heading: String,
    footer: String,
  },
};
