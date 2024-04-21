// var smile = document.getElementById('smile');
// var smileFace = document.getElementById('smile-face');

// function getSmileCenter() {
//     var smileRect = smile.getBoundingClientRect();
//     var smileCenterX = smileRect.left + smile.offsetWidth / 2 + window.pageXOffset;
//     var smileCenterY = smileRect.top + smile.offsetHeight / 2 + window.pageYOffset;
//     return {
//         x: smileCenterX,
//         y: smileCenterY
//     };
// }

// function handleMouseMove(event) {
//     var smileCenter = getSmileCenter();

//     var distanceX = event.clientX - smileCenter.x;
//     var distanceY = event.clientY - smileCenter.y;

//     var distanceFromCenter = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

//     var maxAllowedDistance = smile.offsetWidth / 2 - smileFace.offsetWidth / 2;

//     var smileTop = parseInt(getComputedStyle(smile).top);
//     var smileLeft = parseInt(getComputedStyle(smile).left);

//     var newX, newY;
//     if (distanceFromCenter <= maxAllowedDistance) {
//         newX = smileCenter.x + distanceX - smileLeft;
//         newY = smileCenter.y + distanceY - smileTop;
//     } else {
//         var angle = Math.atan2(distanceY, distanceX);

//         newX = smileCenter.x + maxAllowedDistance * Math.cos(angle) - smileLeft;
//         newY = smileCenter.y + maxAllowedDistance * Math.sin(angle) - smileTop;
//     }

//     smileFace.style.left = newX - smileFace.offsetWidth / 2 + 'px';
//     smileFace.style.top = newY - smileFace.offsetHeight / 2 + 'px';
// }

// window.addEventListener('mousemove', handleMouseMove);
// JavaScript
// JavaScript
var smile = document.getElementById('smile');
var smileFace = document.getElementById('smile-face');

function getSmileCenter() {
    return {
        x: smile.offsetLeft + smile.offsetWidth / 2,
        y: smile.offsetTop + smile.offsetHeight / 2
    };
}

// function handleMouseMove(event) {
//     var smileCenter = getSmileCenter();

//     var distanceX = event.clientX - smileCenter.x;
//     var distanceY = event.clientY - smileCenter.y;

//     var maxDistance = smile.offsetWidth / 2 - smileFace.offsetWidth / 2;
//     var distanceFromCenter = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

//     if (distanceFromCenter < maxDistance) {
//         smileFace.style.transform = 'translate(' + distanceX + 'px, ' + distanceY + 'px)';
//     } else {
//         var angle = Math.atan2(distanceY, distanceX);
//         smileFace.style.transform = 'translate(' + maxDistance * Math.cos(angle) + 'px, ' + maxDistance * Math.sin(angle) + 'px)';
//     }
// }
function handleMouseMove(event) {
    var smileCenter = getSmileCenter();

    var distanceX = event.clientX - smileCenter.x;
    var distanceY = event.clientY - smileCenter.y;

    var distanceFromCenter = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    var maxAllowedDistance = smile.offsetWidth / 2 - smileFace.offsetWidth / 2;

    var smileTop = parseInt(getComputedStyle(smile).top);
    var smileLeft = parseInt(getComputedStyle(smile).left);

    var newX, newY;
    if (distanceFromCenter <= maxAllowedDistance) {
        newX = smileCenter.x + distanceX - smileLeft;
        newY = smileCenter.y + distanceY - smileTop;
    } else {
        var angle = Math.atan2(distanceY, distanceX);

        newX = smileCenter.x + maxAllowedDistance * Math.cos(angle) - smileLeft;
        newY = smileCenter.y + maxAllowedDistance * Math.sin(angle) - smileTop;
    }

    smileFace.style.left = newX - smileFace.offsetWidth / 2 + 'px';
    smileFace.style.top = newY - smileFace.offsetHeight / 2 + 'px';
}

document.addEventListener('mousemove', handleMouseMove);
