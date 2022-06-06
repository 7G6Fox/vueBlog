let inp = document.querySelector("input")
inp.oninput = debounce(function() {
    console.log(this.value);
}, 500)

function debounce(fn, delay) {
    let t = null;
    return function() {
        if (t !== null) {
            clearTimeout(t);
        }
        t = setTimeout(() => {
            fn.call(this);
        }, delay);
    }
}

export default debounce;