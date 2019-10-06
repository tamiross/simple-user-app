export function noop() {
    //
}

export function capitalizeFirstLetter() {

}

export function getScreenSize(): number {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

export function isMobile(size: number) {
    return size < window.innerWidth;
}

