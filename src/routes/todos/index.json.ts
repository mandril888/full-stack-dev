import type { RequestHandler } from "@sveltejs/kit";

// TODO: Persist in database
let todos = [];

export const get: RequestHandler = () => {
    let info = todos.length ? todos : "There are no Todos";

    return {
        status: 200,
        body: info 
    }
}

// HALF working
// export async function post({ request }) {
//     todos.push(request);
 
//     return {
//         status: 303,
//         headers: {
//             location: "/"
//         }
//     }
// }

// NOT working
export const post: RequestHandler<{}, FormData> = (request) => {
    todos.push(request.body.get("text"))

    return {
        status: 303,
        headers: {
            location: "/"
        }
    }
}