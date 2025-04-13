export default class AnimationState {
    private slideOut: boolean = false;
    private fadeIn: boolean = false;

    constructor(slideOut: boolean = false, fadeIn: boolean = false) {
        this.slideOut = slideOut;
        this.fadeIn = fadeIn;
    }

    public get SlideOut(){
        return this.slideOut;
    }

    public get FadeIn(){
        return this.fadeIn;
    }
}