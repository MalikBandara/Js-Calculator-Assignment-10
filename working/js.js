document.getElementById("in2").onclick = function() {
    document.getElementById("in1").value = '';
};
document.getElementById("in3").onclick = function() {
    document.getElementById("in1").value = document.getElementById("in1").value.toString().slice(0,-1);
};
document.getElementById("in4").onclick = function() {
    document.getElementById("in1").value += '.';
};
document.getElementById("in5").onclick = function() {
    document.getElementById("in1").value += '/';
};
document.getElementById("in6").onclick = function() {
    document.getElementById("in1").value += '7';
};

document.getElementById("in7").onclick = function() {
    document.getElementById("in1").value += '8';
};

document.getElementById("in8").onclick = function() {
    document.getElementById("in1").value += '9';
};
document.getElementById("in9").onclick = function() {
    document.getElementById("in1").value += '*';
};

document.getElementById("in10").onclick = function() {
    document.getElementById("in1").value += '4';
};
document.getElementById("in11").onclick = function() {
    document.getElementById("in1").value += '5';
};
document.getElementById("in12").onclick = function() {
    document.getElementById("in1").value += '6';
};
document.getElementById("in13").onclick = function() {
    document.getElementById("in1").value += '-';
};
document.getElementById("in14").onclick = function() {
    document.getElementById("in1").value += '1';
};
document.getElementById("in15").onclick = function() {
    document.getElementById("in1").value += '2';
};
document.getElementById("in16").onclick = function() {
    document.getElementById("in1").value += '3';
};
document.getElementById("in17").onclick = function() {
    document.getElementById("in1").value += '+';
};
document.getElementById("in18").onclick = function() {
    document.getElementById("in1").value += '00';
};
document.getElementById("in19").onclick = function() {
    document.getElementById("in1").value += '0';
};
document.getElementById("in20").onclick = function() {
    document.getElementById("in1").value = eval(document.getElementById("in1").value);
};