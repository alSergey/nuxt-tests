import { defineComponent } from 'vue'

import styles from './default.module.css'

export default defineComponent({
	name: 'DefaultLayout',
	setup(_, { slots }) {
		return () => (
			<div class={styles.layout}>
				{slots.default?.()}
			</div>
		)
	},
})
