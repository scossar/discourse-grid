# Discourse Grid

This plugin allows the user to add a simple responsive grid to a Discourse post.

## Installation

Follow the [Install a Plugin](https://meta.discourse.org/t/install-a-plugin/19157) howto, using
`git clone https://github.com/scossar/discourse-grid` as the plugin command.

Once you've installed it, review the settings under plugins in the admin section of your
forum.

## Use

This plugin whitelists the following classes for use in `div` and `figure` tags.

- `grid-row` (the outer container for a grid)
- `one-quarter` (sets with to 1/4 of it's parent)
- `three-quarters` (sets with to 3/4 of it's parent)
- `one-third` (sets with to 1/3 of it's parent)
- `two-thirds` (sets with to 2/3 of it's parent)
- `half` (sets with to 1/2 of it's parent)
- `full` (full width - useful for maintaining the side-margins)
- `center` (add to a width class to center an element in a grid row)

To add a grid to a post, first create a `div` of class `grid-row` to contain the grid:
    
    <div class="grid-row"></div>

The grid-row can then be divided into columns using the whitelisted size classes.
For example this code will give you a post with two columns, each with a width of 50%.

    <div class="grid-row">
   
    <div class="half"><img src="/uploads/default/original/1X/0c3fe002178b74a8aa061b70d84d1438a4ce4bc5.jpg" width="690" height="426">
    
    </div>
    
    <div class="half">
    
    pellentesque adipiscing. Diam libero, magna orci. Pellentesque elit.
    
    Blandit orci. Placerat ipsum, integer praesent scelerisque, dapibus adipiscing donec.
    
    </div>
    </div>

![alt tag](https://cloud.githubusercontent.com/assets/2975917/12162693/7542bfaa-b4ba-11e5-8db7-6a1a77cb7665.png)

This will give you two columns of text:

    <div class="grid-row">
    <div class="full">
    ##Two columns of text with a full width heading
    </div>
    <div class="half">
    
    **Dis at congue mus sagittis** libero lectus velit condimentum consectetur vitae sem vestibulum parturient condimentum cum. 
    
    <img src="/uploads/default/original/1X/0c3fe002178b74a8aa061b70d84d1438a4ce4bc5.jpg" width="690" height="426">
    
     ac suscipit id pretium. Ante et quam non porttitor sociis adipiscing sem orci vestibulum sit ad nisl consequat eleifend a ut. 
    
    </div>
    <div class="half">
    
    sociosqu placerat tincidunt a sem libero lectus velit condimentum consectetur vitae sem vestibulum parturient condimentum cum. 
    
    Ut a condimentum sit vivamus dis ut vulputate adipiscing a laoreet lacus egestas a ut suspendisse nibh purus mattis.
    </div>
    </div>

![alt tag](https://cloud.githubusercontent.com/assets/2975917/13512344/defff712-e14e-11e5-8075-7635cb3aa195.png)    


This will give you a centered image with a width of two-thirds of the post area:

    <div class="grid-row">
    <div class="two-thirds centered">
    ##Centered Two-thirds width
    <img src="/uploads/default/original/1X/0c3fe002178b74a8aa061b70d84d1438a4ce4bc5.jpg" width="690" height="426">
    </div>
    </div>
    
![alt tag](https://cloud.githubusercontent.com/assets/2975917/13511014/434c198c-e148-11e5-85e0-259e4b201f7d.png) 

##Markdown and linebreaks

The Discourse markdown parser, will, by default, convert line breaks in your post into `<br>` tags.
This can make a mess of the grid. There are a few ways around this. 

The first is to write your markup without useing line breaks between tags. This works, but it is
difficult to read and debug.

The second is to select the 'traditional markdown linebreaks' setting in the Discourse
admin section. This setting requires two trailing spaces for a linebreak. This allows
you to write readable markup that displays properly on the grid.

![alt tag](https://cloud.githubusercontent.com/assets/2975917/13513101/95b71ff4-e153-11e5-9583-e9db394f39d2.png)

The third option is to select the discourse-grid plugin option 'grid remove line breaks'.
This option will search through all `.grid-row` divs and remove all `<br>` tags.

![alt tag](https://cloud.githubusercontent.com/assets/2975917/13513095/8eea4764-e153-11e5-8ef8-b483a0d53788.png)
 
If the vertical layout of your post seems wrong, with one element pushed down compared
to another, try adding or removing a line break. With a bit of practice you will see how it works.

##Responsive breakpoint

At 600px browser window width all grid elements revert to having a with of 100% of the post area.

