# Discourse Grid

This plugin allows the user to add a simple responsive grid to a Discourse post.

## Installation

Follow the [Install a Plugin](https://meta.discourse.org/t/install-a-plugin/19157) howto, using
`git clone https://github.com/scossar/discourse-grid` as the plugin command.

Once you've installed it, review the settings under plugins in the admin section of your
forum.

## Use

This plugin whitelists the following classes for use in `div` and `figure` tags.

- `grid-row`
- `one-quarter`
- `three-quarters`
- `one-third`
- `two-thirds`
- `half`

To add a grid to a post, first create a `div` of class `grid-row` to contain the grid:
    
    <div class="grid-row"></div>

The grid-row can then be divided into columns using the whitelisted size classes.
For example this code will give you a post with two column, each with a width of 50%.

    <div class="grid-row">
   
    <div class="half"><img src="/uploads/default/original/1X/0c3fe002178b74a8aa061b70d84d1438a4ce4bc5.jpg" width="690" height="426">
    
    </div>
    
    <div class="half">
    
    Lorem ipsum dolor sit amet, a maecenas, fringilla nulla dolor. Posuere sed auctor, integer libero. Eget in amet, sed donec conubia, dis est. Elit faucibus, id neque, pellentesque adipiscing. Diam libero, magna orci. Pellentesque elit.
    
    Blandit orci. Placerat ipsum, integer praesent scelerisque, dapibus adipiscing donec. Tellus ultricies sit. Sequi libero. Lacinia maecenas laoreet. Aptent orci.
    
    </div>
    </div>

![alt tag](https://cloud.githubusercontent.com/assets/2975917/12162693/7542bfaa-b4ba-11e5-8db7-6a1a77cb7665.png)




