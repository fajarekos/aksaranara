import CardList from "@/components/cards/CardLists"

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface posttype {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Posts = async () => {
    const response = await fetch(base_url)    
    const posts : posttype[] = await response.json()
    return  (

        <CardList>
            {posts.map((post) => {
                return (
                    <CardList key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </CardList>
                )
            })}
        </CardList>
    )
}

export default Posts