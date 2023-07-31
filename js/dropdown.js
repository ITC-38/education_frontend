function dropdown(elementsList, childClassName) {
    elementsList.forEach((element) => {
        element.addEventListener('click', () => {
            let parentClass = element.parentElement.classList[0]
            let filterBody = document.querySelector(
                '.' + parentClass + ' .' + element.classList[0] + '+ .' + childClassName
            )
            filterBody.classList.toggle('active')
            element.querySelectorAll('p').forEach((el) => {
                el.classList.toggle('active')
            })
        })
    })
}
