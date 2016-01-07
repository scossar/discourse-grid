import PostView from 'discourse/views/post';

export default {
  name: 'extend-for-discourse-grid',

  initialize() {
    PostView.reopen({

      // Creating the markup for the posts can add a lot of <br> tags
      removeLineBreaks: function () {
        if (this.siteSettings.grid_remove_line_breaks) {
          this.$('.grid-row').find('br').remove();
        }
      }.on('didInsertElement', 'postViewUpdated')

    });
  }
}