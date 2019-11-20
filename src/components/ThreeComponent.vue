<template lang="pug">
	.home
</template>
<script>
	import bg from '../../package/src/demo.bg'
	export default {
		name: 'home',
		components: {},
		data () {
			return {}
		},
		mounted () {
			bg.init(this.$el)
		},
		methods: {
		}
	}
</script>

<style lang="scss">
.home{
    width: 100vw;
    height: 100vh;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -9999;
}

</style>
