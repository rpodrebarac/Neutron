const BlogsDAO = require("../dao/blogsDAO");

module.exports = class BlogsController {
    // "Send" the data from the database.
    static async apiSendBlogData(request, response) {
        let blogsData = await BlogsDAO.retrieveAllBlogs();
        response.json(blogsData);
    }

    // "Send" the home blog data from the database.
    static async apiSendHomeBlogData(request, response) {
        let specificBlogData = await BlogsDAO.retrieveASpecificBlog("Hello, World");
        response.json(specificBlogData);
    }

    // "Send" blog data given a filtered category.
    static async apiSendFilteredBlogData(request, response) {
        // Obtain the requested category.
        let category = request.params.category;

        // "Send" the data related to the requested category.
        let filteredBlogData = await BlogsDAO.retrieveBlogsByCategory(category);
        response.json(filteredBlogData);
    }

    // Create a new blog.
    static async apiCreateBlog(request, response) {
        // Ensure that the request has been obtained.
        console.log(request.body);

        // Post the new blog to the database.
        BlogsDAO.postBlog(request.body);
    }
}
