# name: discourse-grid
# about: A simple grid system to be used in Discourse posts
# version: 0.1
# authors: scossar
# url: https://github.com/scossar/discourse-grid

enabled_site_setting :grid_enabled

register_asset 'javascripts/whitelist-tags.js', :server_side
register_asset 'stylesheets/grid.scss'