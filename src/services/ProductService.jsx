export const getProducts = async () => {

    try {
        const response = await fetch('http://localhost:3000/home/products')
        if (response.status == 200) {
            const data = await response.json()
            return data.response
        } else {
            throw Error(response.message)
        }

    } catch (error) {
        const messsage = error.message
        return error
    }

}

export const getProductByCategories = async (categoryName) => {
    try {
        const response = await fetch(`http://localhost:3000/home/products/${categoryName}`)
        if (response.status == 200) {
            const data = await response.json()
            console.log(data);
            return data.response
        } else {
            throw Error(response.message)
        }

    } catch (error) {
        const messsage = error.message
        return error
    }
}