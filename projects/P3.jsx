
function adding(a, b) {
    let add = a + b;
    return add;
};
function sub(a, b) {
    let sub = a - b;
    return sub;
};
function multiplication(a, b) {
    let multiplication = a * b;
    return multiplication;
};
function Devsion(a, b) {
    let Devsion = a / b;
    Devsion = Devsion.toFixed(2);
    return Devsion;
};

export { adding, sub, multiplication, Devsion };