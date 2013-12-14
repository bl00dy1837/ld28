var Building = me.ObjectEntity.extend({
    init: function(name, amount, active, requiredResources, requiredBuildings, city, productionProcesses) {
        if (name)
            this.name = name;
        else
            this.name = "";

        if (amount)
            this.amount = amount;
        else
            this.amount = 0

        if (active)        
            this.active = active;
        else
            this.active = 0;
        
        if (requiredResources)
            this.requiredResources = requiredResources;
        else
            this.requiredResources = [];

        if (requiredBuildings)
            this.requiredBuildings = requiredBuildings;
        else
            this.requiredBuildings = [];

        if (city)
            this.city = city;
        else
            this.city = undefined;

        if (productionProcesses)
            this.productionProcesses = productionProcesses;
        else
            this.productionProcesses = [];
    },

    increment: function() {
        var country = city.country;
        if (country.hasResources(this.requiredResources) && country.hasBuildings(this.requiredBuildings)) {
            country.removeResources(this.requiredResources);
            this.amount++;   
        }
    },

    decrement: function() {
        this.amount--;
        city.country.addResources(this.requiredResources, .5);
    },

    tick: function(time) {
        var nProductionProcesses = this.productionProcesses.length;
        
        for (var iProductionProcess = 0; iProductionProcess < nProductionProcesses; iProductionProcess++) {
            var productionProcess = this.productionProcesses[iProductionProcess];
            var freq = productionProcess.frequency;
            
            if (freq > -1 && time % freq == 0) {
                productionProcess.produce(this);
            }
        }
    }
});
