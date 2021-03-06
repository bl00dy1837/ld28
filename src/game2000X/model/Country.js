 var Country = me.ObjectEntity.extend({
    init: function(name, resources, cities) {
        if (name)
            this.name = name;
        else
            this.name = "";

        if (resources)
            this.resources = resources;
        else
            this.resources = [];

        if (cities)
            this.cities = cities;
        else
            this.cities = [];
    },

    tick: function(time) {
        var nCities = this.cities.length;

        for (var iCity = 0; iCity < nCities; iCity++) {
            var city = this.cities[iCity];
            city.tick(time);
        }
    },

    addResources: function(resources, factor) {
        if (factor == undefined)
            factor = 1;

        var nThisResources = this.resources.length;
        for (var iThisResource = 0; iThisResource < nThisResources; iThisResource++) {
            var thisResource = this.thisResources[iResource];

            var nAddResources = resources.length;
            for (var iAddResource = 0; iAddResource < nAddResources; iAddResource++) {
                var addResource = resources[iAddResource];

                if (addResource.name == thisResource.name) {
                    thisResource.add(addResource, factor);
                }
            }
        }
    },

    removeResources: function(resources, factor) {
        if (factor == undefined)
            factor = 1;

        var nThisResources = this.resources.length;
        for (var iThisResource = 0; iThisResource < nThisResources; iThisResource++) {
            var thisResource = this.thisResources[iResource];

            var nRemoveResources = resources.length;
            for (var iRemoveResource = 0; iRemoveResource < nRemoveResources; iRemoveResource++) {
                var removeResource = resources[iRemoveResource];

                if (removeResource.name == thisResource.name) {
                    thisResource.remove(removeResource, factor);
                }
            }
        }
    },

    hasResources: function(resources) {
        var minResources = undefined;
        var nThisResources = this.resources.length;
        for (var iThisResource = 0; iThisResource < nThisResources; iThisResource++) {
            var thisResource = this.thisResources[iResource];

            var nCompResources = resources.length;
            for (var iCompResource = 0; iCompResource < nCompResources; iCompResource++) {
                var compResource = resources[iCompResource];

                if (compResource.name == thisResource.name) {
                    var availableResources = Math.floor(thisResource.amount / compResource.amount);
                    
                    if (minResources == undefined && availableResources < minResources) {
                        minResources = availableResources;
                    }
                }
            }
        }
    },

    hasBuildings: function(buildings) {
        //TODO: implement
    }
});
