/** Dispatch event on click outside of node */
export function clickOutside(node, params) {

    console.log(params)

    const handleClick = event => {

        if (params && node && event && !node.contains(event.target) && !event.defaultPrevented) {
            console.log("click ")
            node.dispatchEvent(
                new CustomEvent('click_outside', node)
            )
        }
    }
    params && document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    }
}