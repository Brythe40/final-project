// spawn bubbles
var num_bubbles = 20;
var bubbles = document.getElementById("bubbles");

for(i = 0; i < num_bubbles; i++) {
    var random = Math.floor(Math.random() * 15) + 1;
    var time = 2 + (0.5 * random);
    bubble_div = document.createElement('div');
    bubble_div.className = 'float';
    bubble_div.style.animationDuration = time + 's';
    
    bubble = document.createElement('div');
    bubble.className = 'bubble';

    var size = Math.floor(Math.random() * 40) + 20;
    var color = `rgba(173, 216, 230, ${Math.random() * 0.7 + 0.3})`;

    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.backgroundColor = color;

    bubble_div.appendChild(bubble);
    bubbles.appendChild(bubble_div);
}

// text effect
document.fonts.ready.then(() => {
    let water_text = new Blotter.Text(" FISH TANK *", {
        family: "'Under Water'",
        size: 70,
        weight: 100,
        fill: "#00b3ac"
    });
    
    let wave = new Blotter.LiquidDistortMaterial();
    wave.uniforms.uSpeed.value = 0.6;
    wave.uniforms.uVolatility.value = 0.1;
    wave.uniforms.uSeed.value = 0.5;
    
    let blotter = new Blotter(wave, {
        texts: water_text
    });
    let get_element = document.getElementById("water-text");
    let element = blotter.forText(water_text);
    element.appendTo(get_element);
});
