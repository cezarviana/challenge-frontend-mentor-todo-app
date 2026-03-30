import IconSun from '/images/icon-sun.svg';
import IconMoon from '/images/icon-moon.svg';

export const themeConfig = {
    light: {
        name: 'light',
        layout: {
            backgroundColor: 'bg-light-gray-50',
            textColor: 'text-dark-navy-850',
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
            backgroundColor: 'bg-dark-navy-900',
            textColor: 'text-light-gray-300',
        },
        todo: {
            backgroundColor: 'bg-dark-navy-900',
            textColor: 'text-light-gray-300',
            borderColor: 'border-dark-purple-600',
        },
        icon: IconSun,
    }
}