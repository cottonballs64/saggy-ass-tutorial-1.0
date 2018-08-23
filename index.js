let colors = {
    color1: 'white',
    color2: 'tomato',
};
let deg = 0;

changeBackground = () => {
    document.querySelector('body').style.background = `linear-gradient(${deg}deg, ${colors.color1}, ${colors.color2})`;
}
changeColor = (color, value) => {
    colors[color] = value;
    changeBackground(); 
}
changeDeg = (val) => {
    deg = val;
    changeBackground(); 
}
changeHeaderText = (text) => {
    document.querySelector('#header').innerText = text;
}
closeSidebar = () => {
    document.querySelector('.sidebar').style.transform = 'translateX(-100%)';
}
openSidebar = () => {
    document.querySelector('.sidebar').style.transform = 'translateX(0%)';
}
changeBackground();