
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad() {
    	this.sp = this.getComponent(cc.Sprite);
    	this.theold_value = 0; // [0, 1]
    	this.dis_speed = 1 / 5; // 熔岩3秒结束;
    	this.set_dissolve_threold(0);
    },

    start () {

    },

    set_dissolve_threold(value) {
    	let material = this.sp.sharedMaterials[0];
    	material.setProperty('time', this.theold_value);
    	this.sp.setMaterial(0, material);
    },
    


    update (dt) {
    	this.theold_value += (this.dis_speed * dt);
    	this.set_dissolve_threold(this.theold_value);
    },
});
