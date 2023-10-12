class SoundManager {
    constructor(oScene) {
        this.oScene = oScene;
        // this.coinPlacedSound=this.oScene.sound.add("mixkit-money-bag-drop-1989");
        // this.winningSound=this.oScene.sound.add("mixkit-video-game-win-2016");
        this.winningSound=this.oScene.sound.add("Winning-Screen");
        this.backgroundSound=this.oScene.sound.add("quad connect");
        this.hover=this.oScene.sound.add("Hover");
        this.fourConnected=this.oScene.sound.add("four dots connected");
        this.onBtnClick=this.oScene.sound.add("Button Taps");
        // this.winningSound=this.oScene.sound.add("mixkit-ethereal-fairy-win-sound-2019");
    }
    playSound(key, loop) {
        // console.log("sound",key)
        key.play();
        key.loop = loop;
    }
    stopSound(key, loop) {
        // console.log("sound",key)
        key.loop = loop
        key.stop();
    }
}