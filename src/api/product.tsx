import instance from "./instance";

export const getAll = () => {
    return instance.get('/products')
}
export const getOne = () => {
    return instance.get('/products/' + id)
}
export const addProduct = (product) => {
    return instance.post('/products', product)
}
export const updateProduct = (product) => {
    return instance.patch('/products/' + product.id, product)
}
export const removeProduct = (id) => {
    return instance.delete('/product/' +id)
}
