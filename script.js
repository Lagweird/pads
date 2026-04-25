window.onerror = function(e){alert(e);};
window.addEventListener('touchstart', hit);
window.oncontextmenu = function(e){e.preventDefault();};
const pads = Array.from(document.getElementById('c').children);
const hits = [
    new Wad({source: 'noise', volume: 0.5, env: {attack: .001, decay: 1, sustain: 0.3, hold: 0, release: 1}, filter: [{type: 'highpass', frequency: 4000, q: 1}, {type: 'lowpass', frequency: 4000, q: 1}]}), , , ,
    new Wad({source: 'noise', env: {attack: .001, decay: .008, sustain: .2, hold: .03, release: .01}, filter: [{type: 'highpass', frequency: 10000, q: 1}, {type: 'lowpass', frequency: 9000, q: 1}]}), new Wad({source: 'noise', env: {attack: .001, decay: .5, sustain: 0, hold: 0, release: 0}, filter: [{type: 'highpass', frequency: 10000, q: 1}, {type: 'lowpass', frequency: 8000, q: 1}]}), new Wad({source: 'noise', env: {attack: .001, decay: .01, sustain: .2, hold: .03, release: .05}, filter: [{type: 'bandpass', frequency: 800, q: .180}, {type: 'highpass', frequency: 1500, q: 1}]}), ,
    new Wad({source: 'triangle', pitch: 'A0', env: {attack: .001, decay: 0.5, sustain: 0, hold: 0, release: 0.01}, filter: {type: 'lowpass', frequency: 300, q: 1}}), new Wad({source: 'noise', env: {attack: .001, decay: .01, sustain: .2, hold: .03, release: .05}, filter: [{type: 'highpass', frequency: 1500, q: 10}, {type: 'lowpass', frequency: 4000, q: 1}]}), , ,
];
function hit(e){
    e.preventDefault();
    const a = pads.indexOf(e.target);// which one?
    if(a == -1)// didn't hit it
        return;
    hits[a].stop();
    hits[a].play();
    if(a == 4)// hihat choke
        hits[5].stop();
}
