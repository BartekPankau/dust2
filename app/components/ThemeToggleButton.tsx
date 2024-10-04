import React from 'react';
import { useTheme } from '@/useTheme';

const ThemeToggleButton: React.FC = () => {
    const [theme, toggleTheme] = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
        >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeToggleButton;
