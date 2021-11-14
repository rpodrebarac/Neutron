const BlogsDAO = require("../dao/blogsDAO");

module.exports = class BlogsController {
    // "Send" the data from the database.
    static async apiSendBlogData(request, response) {
        let blogsData = await BlogsDAO.retrieveAllBlogs();
        response.json(blogsData);
    }

    // Create a new blog.
    static async apiCreateBlog(request, response) {
        // Ensure that the request has been obtained.
        console.log(request.body);

        // Post the new blog to the database.
        BlogsDAO.postBlog(request.body);
    }
}
