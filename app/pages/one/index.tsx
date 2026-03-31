import { defineComponent } from "vue";

import { NuxtLink } from '#components'

import styles from './index.module.css'

export default defineComponent({
    name: 'OnePage',
    setup() {
        return () => (
            <div class={styles.container}>
                <h3>Это one страница</h3>
                <NuxtLink to="/">Main page</NuxtLink>
            </div>
        )
    }
})