const BASE_URL = 'https://api-vaccination-centers.herokuapp.com';

///LIST PLACES
export const fetchPosts = () => {
    return fetch(`${BASE_URL}/places`)
        .then(Response => {
            return Promise.all([Response, Response.json()])
        });
}
///CREATE POST
export const postPosts = (data) => {
    return fetch(`${BASE_URL}/places`, {
        method: 'POST',
        body: JSON.stringify({...data}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(Response => {
            return Promise.all([Response, Response.json()])
        });
}
///EDIT POST
export const putPost = ({_id, name, address, latitude, longitude, url}) => {
    console.log(`${BASE_URL}/places/${_id}`);
    console.log(JSON.stringify({
        name,
        address,
        latitude,
        longitude,
        url,
    }))
    return fetch(`${BASE_URL}/places/${_id}`, {
    method: 'PATCH',
    body: JSON.stringify({
        name,
        address,
        latitude,
        longitude,
        url,
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(Response =>{
        console.log(Response);
    return Promise.all([Response, Response.text()])
    })
}
///DELETE POST
export const deletePost = ({ _id }) => {
    return fetch(`${BASE_URL}/places/${_id}`, {
        method: 'DELETE'
    })
        .then(Response => {
            return Promise.all([Response, Response.json()])
        });
}