import React from 'react';
const SelectionPoints = (props) => {
    const scale = 1 / props.zoom;
    const origin = 50 * props.zoom;
    const translateN = (100 - origin) * -1;
    const translateP = translateN * -1;
    return (React.createElement("div", { className: 'c-selection__points' },
        React.createElement("div", { className: 'c-selection__point c-selection__point--tl', style: {
                transform: `scale(${scale}) translate(${translateN}%, ${translateN}%)`,
                transformOrigin: `right bottom`
            } }),
        React.createElement("div", { className: 'c-selection__point c-selection__point--tc', style: {
                transform: `scale(${scale}) translate(${translateN}%, ${translateN}%)`,
                transformOrigin: `${origin}% bottom`
            } }),
        React.createElement("div", { className: 'c-selection__point c-selection__point--tr', style: {
                transform: `scale(${scale}) translate(${translateP}%, ${translateN}%)`,
                transformOrigin: `left bottom`
            } }),
        React.createElement("div", { className: 'c-selection__point c-selection__point--lc', style: {
                transform: `scale(${scale}) translate(${translateN}%, ${translateN}%)`,
                transformOrigin: `right ${origin}%`
            } }),
        React.createElement("div", { className: 'c-selection__point c-selection__point--rc', style: {
                transform: `scale(${scale}) translate(${translateP}%, ${translateN}%)`,
                transformOrigin: `left ${origin}%`
            } }),
        React.createElement("div", { className: 'c-selection__point c-selection__point--bl', style: {
                transform: `scale(${scale}) translate(${translateN}%, ${translateP}%)`,
                transformOrigin: `right top`
            } }),
        React.createElement("div", { className: 'c-selection__point c-selection__point--bc', style: {
                transform: `scale(${scale}) translate(${translateN}%, ${translateP}%)`,
                transformOrigin: `${origin}% top`
            } }),
        React.createElement("div", { className: 'c-selection__point c-selection__point--br', style: {
                transform: `scale(${scale}) translate(${translateP}%, ${translateP}%)`,
                transformOrigin: `left top`
            } })));
};
export default SelectionPoints;
