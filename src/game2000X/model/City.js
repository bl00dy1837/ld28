var City = me.ObjectEntity.extend({
    init: function(name, country, buildings) {
        if (name)
            this.name = name;
        else
            this.name = "";

        if (country)
            this.country = country;
        else
            this.country = undefined;

        if (buildings)
            this.buildings = buildings;
        else
            this.buildings = [];
    },

    tick: function(time) {
        var nBuildings = this.buildings.length;
        
        for (var iBuilding = 0; iBuilding < nBuildings; iBuildings++) {
            var building = this.buildings[iBuilding];
            building(time);
        }
    }
});
