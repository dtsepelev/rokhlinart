.main {
    margin-bottom: 50px;
    display: inline-block;
    pointer-events: none;
}

@media (min-width: $tablet) {
    pointer-events: auto;
}

.main_zoomed {
    .img {
        cursor: zoom-out;
    }
}

.img {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
    height: auto;
    padding-bottom: 4px;
    pointer-events: none;
}

@media (min-width: 464px) {
    .img {
        width: 100%;
        margin-left: 0px;
        margin-right: 0px;
    }
}

@media (min-width: $tablet) {
    .img {
        cursor: zoom-in;
        pointer-events: auto;
    }
}

@media (min-width: $desktophd) {
    .img {
        padding-bottom: 6px;
    }
}

@media (min-width: $desktopmax) {
    .main {
        margin-bottom: 66px;
    }
}

.hidden {
    display: none;
}

.visible {
    opacity: 1;
}
