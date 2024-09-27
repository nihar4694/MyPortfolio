/*
File Name: utils.js
Name: Nihar Dholaria
StudentId: 301348175
Date: 26 - September - 2024
*/

export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`,import.meta.url).href;
};