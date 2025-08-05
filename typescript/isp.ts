interface Post{
    title:string;
    desc:string;
}

interface Comments{
    text:string
}

interface commentCreator{
    addComment(comment:Comments):void
}
interface sharePost{
    sharePosts(post:Post):void
}
interface createPost{
    createPost(title:string,desc:string):Post
}

class user implements commentCreator,sharePost{
    addComment(comment: Comments): void {
        console.log("user comment");
    }
    sharePosts(post: Post): void {
        console.log("posts shared");
    }
}

class admin implements commentCreator,sharePost,createPost{
    addComment(comment: Comments): void {
        console.log("admin comment");
    }
    sharePosts(post: Post): void {
        console.log("posts shared");
    }
    createPost(title: string, desc: string): Post {
        let newPost:Post={
            title:title,
            desc:desc
        }
        return newPost 
    }
}

const u1=new user();
const c:Comments={
text:"comment"
}
u1.addComment(c)

const a1=new admin();

u1.sharePosts(a1.createPost("new post","test"))

