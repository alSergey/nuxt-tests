import {defineComponent} from 'vue'

import {NuxtRouteAnnouncer, NuxtWelcome} from '#components'

export default defineComponent({
    setup() {

        return () => (
              <div>
                <NuxtRouteAnnouncer />
                <NuxtWelcome />
            </div>
        )
    }
})