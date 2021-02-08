function get_Small(){
    document.getElementById("element").classList.remove("middle", "bigCrazy")
    document.getElementById("element").classList.add("small")

}
function get_Middle(){
    document.getElementById("element").classList.remove("small", "bigCrazy")
    document.getElementById("element").classList.add("middle")

}
function get_Big(){
    document.getElementById("element").classList.remove("middle", "small")
    document.getElementById("element").classList.add("bigCrazy")

}