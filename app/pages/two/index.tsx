import { defineComponent } from "vue";

import { NuxtLink } from '#components'

import styles from './index.module.css'

export default defineComponent({
    name: 'TwoPage',
    setup() {
        return () => (
            <div class={styles.container}>
                <h3>Это two страница</h3>
                <NuxtLink to="/">Main page</NuxtLink>
            </div>
        )
    }
})