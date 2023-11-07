import { useState } from 'react';
import { AddCategory, GifGrid } from './components/AddCategory';
import './styles.css';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories((categories) => [...categories, newCategory]);
    };
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={(event) => onAddCategory(event)} />
            <ol>
                {categories.map((cat, index) => (
                    <GifGrid key={cat + index} category={cat} />
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;
