const elements = Array.from(document.querySelectorAll('.dropdown , .dropdown__link'));

elements.forEach(el => el.addEventListener('click', onClickMenu));

function onClickMenu(event) {
    if (this.className.includes('dropdown')) {
        let el = this.querySelector('.dropdown__list');
        if (el) {
            if (el.className.includes('dropdown__list_active')) {
                el.className = 'dropdown__list';
            } else {
                el.className = 'dropdown__list dropdown__list_active';
            }
        }
    }

    if (this.className.includes('dropdown__link')) {
        let el = this.closest('.dropdown').querySelector('.dropdown__value');
        if (el) {
            el.textContent = this.textContent.trim();
            event.preventDefault();
        }
    }

    return false;
}