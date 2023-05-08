/* eslint-disable import/extensions */
import {
    fetchLoggedInUser,
    // handleFetch,
    setNav,
} from './global.js';

const main = async () => {
    const user = await fetchLoggedInUser();
    setNav(!!user);

    /*
    <form id="url_upload_form">
            <label for="url-input-form" style="display: none;">Photo Url Input</label>
            <input type="text" name="url-input" id="url-input" placeholder="Paste URL Here">
            <input type="text" name="caption-input" id="caption-input" placeholder="Write a Caption">
            <input type="submit" value="Post Photo">
        </form>
     */
    const handlePhotoSubmit = async (e) => {
        e.preventDefault();
        const url = document.querySelector('#url-input').value;
        const caption = document.querySelector('#caption-input').value;
        
        // const session = { session };
        const body = { url, caption };
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include',
        };
        console.log(url, caption)
        await fetch('/api/photos', options)
    };
    document.querySelector('#url_upload_form').addEventListener('submit', handlePhotoSubmit);
};

main();