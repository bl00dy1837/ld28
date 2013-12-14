game.ScrollingImage = me.ImageLayer.extend({
    "init" : function init(image, scrollX, scrollY) {
        this.scrollX = scrollX;
        this.scrollY = scrollY;

        this.parent(image, 0, 0, image, 1, 1);
    },

    "update" : function update() {
        this.pos.x += this.scrollX;
        this.pos.y += this.scrollY;

        return true;
    }
});

game.GUI_Logo = me.Renderable.extend({
    "init" : function init(pos) {
        this.image = me.loader.getImage("logo");
        this.bgimage = me.loader.getImage("hotel_title");
        this.font = new me.Font("Verdana", 48, "#000", "right");
        this.font.textBaseline = "bottom";

        // Animation
        this.step = 0;

        this.parent(pos, this.image.width, this.image.height);
    },

    "update" : function update() {
        this.step += 0.02;

        return true;
    },

    "draw" : function draw(context) {
        // BG Image
        context.drawImage(
            this.bgimage,
            100,
            0,
            this.bgimage.width,
            this.bgimage.height
        );

        // Logo
        context.save();
        context.translate(
            this.pos.x + this.width / 2,
            this.pos.y + this.height / 2
        );
        context.rotate(Math.cos(this.step) * -0.05);
        context.drawImage(
            this.image,
            -this.width / 2,
            -this.height / 2 + Math.sin(this.step) * 20,
            this.width,
            this.height
        );
        context.restore();

        // Subtitle
        this.font.draw(
            context,
            "MINI SIM HOTEL",
            this.pos.x + this.width,
            this.pos.y + this.height
        );
    }
});

game.GUI_Button = me.Renderable.extend({
    "init" : function init(pos, image, text, callback) {
        this.image = me.loader.getImage(image);
        this.text = text;
        this.font = new me.Font("Verdana", 28, "#000", "center");
        this.font.textBaseline = "middle";

        this.parent(pos, this.image.width, this.image.height);

        me.input.registerMouseEvent("mousedown", this, callback);
    },

    "destroy" : function destroy() {
        me.input.releaseMouseEvent("mousedown", this);
    },

    "draw" : function draw(context) {
        context.drawImage(
            this.image,
            this.pos.x,
            this.pos.y,
            this.width,
            this.height
        );
        this.font.draw(
            context,
            this. text,
            this.pos.x + this.width / 2,
            this.pos.y + this.height / 2
        );
    }
});

game.TitleScreen = me.ScreenObject.extend({
    "onResetEvent" : function onResetEvent() {
        // Play background music
        me.audio.playTrack("bgmusic");

        var bg = new game.ScrollingImage("background", 1, 0.3);
        var logo = new game.GUI_Logo(new me.Vector2d(20, 20));

        var start_btn = new game.GUI_Button(
            new me.Vector2d(
                (c.WIDTH - 192) / 2,
                c.HEIGHT * 0.625
            ),
            "button",
            "Start",
            function () {
                me.state.change(me.state.PLAY);
            }
        );

        var continue_btn = new game.GUI_Button(
            new me.Vector2d(
                (c.WIDTH - 192) / 2,
                c.HEIGHT * 0.625 + 64 + 8
            ),
            "button",
            "Continue",
            function () {
                me.state.change(me.state.PLAY);
            }
        );

        var howto_btn = new game.GUI_Button(
            new me.Vector2d(
                (c.WIDTH - 192) / 2,
                c.HEIGHT * 0.625 + 64 + 8 + 64 + 8
            ),
            "button",
            "How to Play",
            function () {
                me.state.change(me.state.PLAY);
            }
        );

        me.game.add(bg, 1);
        me.game.add(logo, 2);
        me.game.add(start_btn, 3);
        me.game.add(continue_btn, 3);
        me.game.add(howto_btn, 3);
    }
});
