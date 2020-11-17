import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import MideaCommonComponents from 'common-components/lib/index';
// import { EditForm } from 'common-components/lib/index';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    // ...apply enhancements to the app
    Vue.config.productionTip = false;
    
    Vue.use(Antd);
    Vue.use(MideaCommonComponents);
    // Vue.component(EditForm.name, EditForm);
  }
  