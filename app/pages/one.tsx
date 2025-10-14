import { defineComponent } from "vue";

import { NuxtLink } from '#components'

export default defineComponent({
    name: 'OnePage',
    setup() {

        return () => (
            <div>
                <div>Это one страница</div>
                <NuxtLink to="/">Main page</NuxtLink>
            </div>
        )
    }
})