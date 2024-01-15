import Assignments from "./Assignments.js";
import Panel from "./panel.js";

export default {
  components: { Assignments, Panel },

  template: `
        <div class="grid gap-6">
          <assignments></assignments>
  
          <panel>
            This is the default content.
          </panel>

          <panel>
            <template v-slot:heading>
              Hi There
            </template>

            This is my default content.

            <template v-slot:footer>
              Hi footer
            </template>
          </panel>
        </div>
    `,
};
