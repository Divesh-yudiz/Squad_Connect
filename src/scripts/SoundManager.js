class SoundManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.coinPlacedSound=this.oScene.sound.add("mixkit-money-bag-drop-1989");
        // this.winningSound=this.oScene.sound.add("mixkit-video-game-win-2016");
        this.winningSound=this.oScene.sound.add("mixkit-ethereal-fairy-win-sound-2019");
    }
    playSound(key, loop) {
        key.play();
        key.loop = loop;
    }
    stopSound(key, loop) {
        key.loop = loop
        key.stop();
    }
}