import { Button } from "@/components/ui/button";

// type Post = {
//     id: string;
//     title: string;
//     views: string;
// }

// async function getPosts() : Promise<Post[]> {
//     const res = await fetch('http:localhost:3001/posts');
//     const posts = (await res.json()) as Post[];

//     return posts
// }

export default async function Fetching () {
    
    // const posts = await getPosts();
    // console.log(posts)  

    return (
        <div>
            <h1>Fetching Data</h1>
            {/* {posts.map((post) => (
                <article key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.views}</p>
                    <Button>Click me</Button>
                </article>
            ))} */}
        </div>
    );
}