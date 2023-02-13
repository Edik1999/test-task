window.addEventListener('DOMContentLoaded', () => {
    new SlimSelect({
        select: '#selectElement',
        settings: {
            openPosition: 'down', // 'auto', 'up' or 'down'
            placeholderText: 'Выберите тип системы',
            showSearch: false,
        }
    })
});