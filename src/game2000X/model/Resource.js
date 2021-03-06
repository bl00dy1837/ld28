 var Resource = me.ObjectEntity.extend({
    init: function(name, amount) {
        if (name)
            this.name = name;
        else
            this.name = "";

        if (amount)
            this.amount = amount;
        else
            this.amount = 0;
    },

    add: function(resource, factor) {
        this.amount += resource.amount * factor;
    },

    remove: function(resource, factor) {
        this.amount -= resource.amount * factor;
    },
});
