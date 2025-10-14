import { defineComponent } from "vue";

import { NuxtLink } from '#components'

export default defineComponent({
    name: 'MainPage',
    setup() {

        return () => (
            <div>
                <div>Это первая страница</div>
                <NuxtLink to="/one">One page</NuxtLink>
                <br/>
                <NuxtLink to="/two">Two page</NuxtLink>
                <br/>
            </div>
        )
    }
})