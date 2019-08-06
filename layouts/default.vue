<template>
    <div>
        <headerItem
            @sidenavToggle="displaySideNav = !displaySideNav"
        />
        <sideBarItem
            :show="displaySideNav"
            @close="displaySideNav = false"
        />
        <nuxt />
    </div>
</template>

<script>
export default {
  // middleware: 'log',
  components: {
    headerItem: () => import('@/components/Navigation/TheHeader'),
    sideBarItem: () => import('@/components/Navigation/TheSidenav')
  },
  data () {
    return {
      displaySideNav: false
    } 
  }
}
</script>