
// On scroll function
const check_appear = ()=>{
    //Screen height
    const screen_height = window.innerHeight
    scroll_elements.forEach((element)=>{
        let distance_to_top = element.getBoundingClientRect().top
        if(distance_to_top <= screen_height + offset_value){
            console.log(element)
        }
    })
}
const offset_value = 0
const scroll_elements = document.querySelectorAll('.appearOnScroll')
document.addEventListener('scroll', check_appear)


