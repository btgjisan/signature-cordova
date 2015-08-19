window.Signatures = window.Signatures? window.Signatures: [];

var savedSignaturesButton = document.getElementById("saved-signatures"),
    homeButton = document.getElementById("home-btn"),
    wrapper = document.getElementById("signature-pad"),
    clearButton = wrapper.querySelector("[data-action=clear]"),
    saveButton = wrapper.querySelector("[data-action=save]"),
    canvas = wrapper.querySelector("canvas"),
    signaturePad;

console.log("reloaded")

//// Adjust canvas coordinate space taking into account pixel ratio,
//// to make it look crisp on mobile devices.
//// This also causes canvas to be cleared.
function resizeCanvas() {
    // When zoomed out to less than 100%, for some very strange reason,
    // some browsers report devicePixelRatio as less than 1
    // and only part of the canvas is cleared then.
    var ratio =  Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
}

window.onresize = resizeCanvas;
resizeCanvas();

signaturePad = new SignaturePad(canvas);

savedSignaturesButton.addEventListener("click", function(event){
    var savedSignaturesTemplate = Handlebars.compile($("#signature-list-tpl").html());
    var savedSignaturesHtml = savedSignaturesTemplate(Signatures);
    $("#signature-pad").addClass("hide");
    $('body').append(savedSignaturesHtml);
    $("#saved-signatures").addClass("hide");
    $("#home-btn").removeClass("hide")
});

homeButton.addEventListener("click", function(event){
    var body = document.getElementsByTagName('body')[0];
    var savedSignaturesHtml = document.getElementById("signature-list-content");
    body.removeChild(savedSignaturesHtml);
    $("#signature-pad").removeClass("hide");
    $("#saved-signatures").removeClass("hide");
    $("#home-btn").addClass("hide");
});

clearButton.addEventListener("click", function (event) {
    signaturePad.clear();
});

saveButton.addEventListener("click", function (event) {
    if (signaturePad.isEmpty()) {
        alert("Please provide signature first.");
    } else {
        Signatures.push(signaturePad.toDataURL());
        console.log("Signatures", Signatures);
        signaturePad.clear();
    }
});


