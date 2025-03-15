export const getProducts = async () => {
    const res = await fetch('https://dummyjson.com/products');
    return res.json();
}

// export const getPostById = async (id) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     return res.json();
// }

// export const deletePostById = async (id) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     return res.json();
// }