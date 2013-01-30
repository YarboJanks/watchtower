// initialize the datastore object
wt.datastore = {

    load: function(){
        // verify that a localstorage object exists
        if(localStorage.<%= watchtower_storage %> != null){
            
            // unpack the saved classes back into an array
            var poi_classes = jQuery.parseJSON(localStorage.<%= watchtower_storage %>);
            
            // do this.save(), but in reverse
            $('div.point_of_interest').each(function(index, element){
                if(poi_classes[index] != null){
                    $(element).attr('class', poi_classes[index]);
                }
            });
            
            // hide the appropriate PoIs
            $('div.point_of_interest.poi_hidden div.poi_content').hide();
            $('div.point_of_interest.poi_hidden span.poi_mark_content a.poi_hide').text('Show');
        }
    },

    save: function(){
        var poi_classes = [];
        
        // Iterate over the PoIs. Save the class of each that has been marked.
        $('div.point_of_interest').each(function(index, element){                    
            var the_classes = $(element).attr('class');
            // don't bother saving information for the unmarked
            if(the_classes != 'point_of_interest'){
                poi_classes[index] = the_classes;
            }
        });
        localStorage.<%= watchtower_storage %> = window.JSON.stringify(poi_classes);
    },

},