export function renderPost(post) {
    const li = document.createElement('li');
    li.classList.add('post');

    const h2 = document.createElement('h1');
    h2.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.text;

    li.append(h2, p);

    return li;
}
