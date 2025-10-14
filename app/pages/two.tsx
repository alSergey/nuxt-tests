import { defineComponent } from "vue";

import { NuxtLink } from '#components'

export default defineComponent({
    name: 'TwoPage',
    setup() {

        return () => (
            <div>
                <div>Это two страница</div>
                <NuxtLink to="/">Main page</NuxtLink>
            </div>
        )
    }
})