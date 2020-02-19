import Vue from 'vue';
import Router from 'vue-router';

// const Home= () => import('./components/Home.vue');
// const Menu= () => import('./components/Menu.vue');
// const Time= () => import('./components/Time.vue');
import Home from './components/Home.vue';
import MenuHome from './components/MenuHome.vue';
import MenuAbout from './components/MenuAbout.vue';
import MenuLink from './components/MenuLink.vue';
import MenuWorks from './components/MenuWorks.vue';
import Time from './components/Time.vue';
import About from './components/About.vue';
import Works from './components/Works.vue';
import Link from './components/Link.vue';

Vue.use(Router)

export default new Router({
  mode:"history",

  routes:[{
    path:"/",
    components:{
      default: Home,
      menuHome:MenuHome,
      menuAbout:MenuAbout,
      menuLink:MenuLink,
      menuWorks:MenuWorks,
      time:Time,
    },
  },
    {path:"/about",
    components:{
      default: About,
      menuHome:MenuHome,
      menuAbout:MenuAbout,
      menuLink:MenuLink,
      menuWorks:MenuWorks,
      }
    },
    {path:"/works",
    components:{
      default:Works,
      menuHome:MenuHome,
      menuAbout:MenuAbout,
      menuLink:MenuLink,
      menuWorks:MenuWorks,
    }
    },
    {path:"/link",
    components:{
      default:Link,
      menuHome:MenuHome,
      menuAbout:MenuAbout,
      menuLink:MenuLink,
      menuWorks:MenuWorks,
    }
    },
  ]
});