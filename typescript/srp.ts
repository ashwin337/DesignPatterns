class BlogPost {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  // Methods related to content management
  createPost() {
    // Implementation here
  }

  updatePost() {
    // Implementation here
  }

  deletePost() {
    // Implementation here
  }

}

class BlogPostDisplay{
      // Method related to post display
      constructor(public blogpost:BlogPost){}
  displayHTML() {
    return `<h1>${this.blogpost.title}</h1><p>${this.blogpost.content}</p>`;
  }
}