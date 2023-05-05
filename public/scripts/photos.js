/* eslint-disable import/extensions */
import {
    fetchLoggedInUser,
    handleFetch,
    setNav,
} from './global.js';

const main = async () => {
    const user = await fetchLoggedInUser();
    setNav(!!user);

    /*
    <form>
        <label for="url-input-form" style="display: none;">Photo Url Input</label>
        <input type="text" name="url-input" id="url-input" placeholder="Paste URL Here">
        <input type="submit" value="Post Photo">
    </form>
     */
    const handlePhotoSubmit = async (e) => {
        e.preventDefault();
        const url = document.querySelector('#url-input').value;
        const body = { url };
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include'
        };
        await fetch('/api/photos', options)
    };
    document.querySelector('#url_upload_form').addEventListener('submit', handlePhotoSubmit);
};

main();