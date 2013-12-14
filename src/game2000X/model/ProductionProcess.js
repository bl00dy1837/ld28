  var ProductionProcess = me.ObjectEntity.extend({
    init: function(inputResources, outputResources, frequency) {
        if (inputResources)
            this.inputResources = inputResources;
        else
            this.inputResources = []

        if (outputResources)
            this.outputResources = outputResources;
        else
            this.outputResources = []
        
        if (frequency)
            this.frequency = frequency;
        else
            this.frequency = -1;
    },
    
    produce: function(building, requiredAmount) {
        var city = building.city;
        var country = city.country;
        
        var amount = building.amount;

        if (requiredAmount) {
            amount = requiredAmount;
        }

        var capacity = country.hasResources(inputResources);
        if (capacity > 0) {
            for (var i = 0; i < capacity && i < amount; i++) {
                country.removeResources(this.inputResources);
                country.addResources(this.outputResources);
                return true;
            }
        else
            return false;
    }
});
