import IconSun from '/images/icon-sun.svg';
import IconMoon from '/images/icon-moon.svg';

export const themeConfig = {
    light: {
        name: 'light',
        layout: {
            heroClass: 'theme-light',
            backgroundColor: 'bg-light-gray-300',
            textColor: 'text-light-gray-600',
        },
        todo: {
            backgroundColor: 'bg-light-gray-50',
            textColor: 'text-dark-navy-850',
            borderColor: 'border-light-gray-300',
        },
        icon: IconMoon,
    },
    dark: {
        name: 'dark',
        layout: {
            heroClass: 'theme-dark',
            backgroundColor: 'bg-dark-navy-950',
            textColor: 'text-light-gray-600',
        },
        todo: {
            backgroundColor: 'bg-dark-navy-900',
            textColor: 'text-light-gray-600',
            borderColor: 'border-dark-purple-600',
        },
        icon: IconSun,
    }
}