
document.addEventListener('DOMContentLoaded', () => {

	const add_on_click_event = (className, _func) =>
	{
		const elements = document.querySelectorAll(`.${className}`);

		// Iterate over the elements and add the click event listener
		elements.forEach(element => {
			element.addEventListener('click', () => {
				_func();
			});
		});
	}

	const not_implemented = () => { alert('Ainda Não Implementado'); }
	add_on_click_event('not_i', not_implemented);
})





