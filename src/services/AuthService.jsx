export const login = async (email, password) => {
    const data = { email: email, password: password };

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.ok) {
            const data = await response.json();
            const token = data.user.token;
            console.log(data);
            return data
            // dispatch(setToken(token)); 
        } else {
            throw Error("Invalid Credentials")
        }

    } catch (error) {
        console.log(error);
        return error
    }

}

export const handleUserSubmit = async (formData) => {
    try {

        const response = await fetch('http://localhost:3000/signup', {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.ok) {
            const data = await response.json();

            console.log(data);
            // return data
            // dispatch(setToken(token)); 
        } else {
            throw Error("Invalid Credentials")
        }


    } catch (error) {
        console.log(error);
        return error
    }

}