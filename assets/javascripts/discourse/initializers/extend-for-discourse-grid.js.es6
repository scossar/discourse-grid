import { withPluginApi } from 'discourse/lib/plugin-api';
import PostView from 'discourse/views/post';

function initializePlugin(api) {
  const siteSettings = api.container.lookup('site-settings:main');
  if (siteSettings.grid_remove_line_breaks) {
    api.decorateCooked($elem => $elem.find('.grid-row br').remove());
  }
}

function initializeWithoutApi(container) {
  PostView.reopen({
    _removeLineBreaks: function () {
      if (this.siteSettings.grid_remove_line_breaks) {
        this.$('.grid-row').find('br').remove();
      }
    }.on('didInsertElement', 'postViewUpdated')
  });
}

export default {
  name: 'extend-for-discourse-grid',
  initialize() {
    withPluginApi('0.1', api => initializePlugin(api), {noApi: () => initializeWithoutApi()});
  }
}



