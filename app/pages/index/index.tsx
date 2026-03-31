import { defineComponent } from "vue";

import { NuxtLink } from '#components'

import styles from './index.module.css'

export default defineComponent({
    name: 'MainPage',
    setup() {
        return () => (
            <div class={styles.container}>
                <h3>Это первая страница</h3>
                <NuxtLink to="/one">One page</NuxtLink>
                <NuxtLink to="/two">Two page</NuxtLink>
            </div>
        )
    }
})